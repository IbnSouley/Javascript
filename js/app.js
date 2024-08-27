// Importation des modules Firebase nécessaires pour l'application
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { setDoc, doc, getFirestore, getDocs, collection, deleteDoc, updateDoc } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyC2zEcOLDXTBBkAEjxBFgPzyqBv8vHsPg8",
    authDomain: "tache-de-javascript.firebaseapp.com",
    projectId: "tache-de-javascript",
    storageBucket: "tache-de-javascript.appspot.com",
    messagingSenderId: "206947328201",
    appId: "1:206947328201:web:0b4d2aa9504620345a6d18",
    measurementId: "G-1J4PRDNDZE"
  };
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

let students = [];
const NbreEtudiantsPage = 5;
let PageCurrent = 1;
let currentStudentId = null; // Ajout d'une variable pour stocker l'id de l'étudiant en cours de modification

async function fetchStudents() {
    const querySnapshot = await getDocs(collection(db, "students"));
    students = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    filtre();
}

//function Moyenne
function Moyenne() {
    let Total = 0;
    for (const student of students) {
        Total += student.note;
    }
    return Total / students.length;
}

//function sommeNote
function SommeNote() {
    let totalNote = 0;
    for (const chaqueNote of students) {
        totalNote += chaqueNote.note;
    }
    return totalNote;
}

//function sommeAge
function SommeAge() {
    let totalAge = 0;
    for (const chaqueAge of students) {
        totalAge += chaqueAge.age;
    }
    return totalAge;
}

//function compterNote
function compterNotes() {
    return students.length;
}

//function compterAge
function compterAge() {
    return students.length;
}

function RenderStudents(data) {
    const Tbody = document.getElementById("Tbody");
    Tbody.innerHTML = "";

    const StartIndex = (PageCurrent - 1) * NbreEtudiantsPage;
    const EndIndex = StartIndex + NbreEtudiantsPage;
    const PageStudents = data.slice(StartIndex, EndIndex);

    for (const student of PageStudents) {
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td>${student.prenom}</td>
            <td>${student.nom}</td>
            <td>${student.note}</td>
            <td>${student.age}</td>
            <td>
                <button class="btn btn-outline-info btn-sm modify-student" data-id="${student.id}">Modifier</button>
                <button class="btn btn-outline-danger btn-sm delete-student" data-id="${student.id}">Supprimer</button>
            </td>
        `;
        Tbody.appendChild(tr);
    }
    RenderPagination(data.length);
    attachDeleteEvent(); // Attacher les événements de suppression après le rendu des étudiants
    attachModifyEvent(); // Attacher les événements de modification après le rendu des étudiants
}

//function supprimer
function attachDeleteEvent() {
    const deleteButtons = document.querySelectorAll('.delete-student');
    deleteButtons.forEach(button => {
        button.addEventListener('click', async () => {
            const studentId = button.getAttribute('data-id');
            try {
                await deleteDoc(doc(db, "students", studentId)); // Suppression de l'étudiant dans Firestore
                await fetchStudents(); // Mise à jour de l'affichage
            } catch (error) {
                console.error("Error deleting student: ", error);
            }
        });
    });
}

//function modifier
function attachModifyEvent() {
    const modifyButtons = document.querySelectorAll('.modify-student');
    modifyButtons.forEach(button => {
        button.addEventListener('click', async () => {
            const studentId = button.getAttribute('data-id');
            const student = students.find(s => s.id === studentId);
            if (student) {
                currentStudentId = studentId; // Stocker l'id de l'étudiant en cours de modification
                document.getElementById('modifierPrenom').value = student.prenom;
                document.getElementById('modifierNom').value = student.nom;
                document.getElementById('modifierNote').value = student.note;
                document.getElementById('modifierAge').value = student.age;
                document.getElementById('modalModifier').style.display = 'block';
            }
        });
    });
}

//function pagination
function RenderPagination(totalStudents) {
    const pagination = document.getElementById('pagination');
    pagination.innerHTML = '';

    const pageCount = Math.ceil(totalStudents / NbreEtudiantsPage);
    for (let i = 1; i <= pageCount; i++) {
        const pageItem = document.createElement('a');
        pageItem.href = "#";
        pageItem.className = "page-link";
        pageItem.innerText = i;
        pageItem.onclick = function (event) {
            event.preventDefault();
            PageCurrent = i;
            filtre();
        };
        const pageLi = document.createElement('li');
        pageLi.className = "page-item";
        pageLi.appendChild(pageItem);
        pagination.appendChild(pageLi);
    }
}

//function filtre
function filtre() {
     const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const filteredStudents = students.filter(student =>
        student.nom.toLowerCase().includes(searchInput) || student.prenom.toLowerCase().includes(searchInput)
    );
    const Tbody = document.getElementById('Tbody');
    Tbody.innerHTML = '';

    // Calcul des indices de début et de fin pour les étudiants à afficher
    const start = (PageCurrent - 1) * NbreEtudiantsPage;
    const end = start + NbreEtudiantsPage;
    const studentsToShow = students.slice(start, end);

    studentsToShow.forEach(student => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${student.prenom}</td>
            <td>${student.nom}</td>
            <td>${student.note}</td>
            <td>${student.age}</td>
            <td>
                <i class="fa fa-edit"></i>
                <i class="fa fa-trash"></i>
            </td>
        `;
        Tbody.appendChild(tr);

        const deleteIcon = tr.querySelector('.fa-trash');
        deleteIcon.addEventListener('click', async () => {
            try {
                await deleteDoc(doc(db, "students", student.id));
                students = students.filter(s => s.id !== student.id); // Mise à jour du tableau local
                filtre(); // Mise à jour de l'affichage
            } catch (error) {
                console.error("Error deleting student: ", error);
            }
        });

        const editIcon = tr.querySelector('.fa-edit');
        editIcon.addEventListener('click', () => {
            currentStudentId = student.id;
            document.getElementById('modifierPrenom').value = student.prenom;
            document.getElementById('modifierNom').value = student.nom;
            document.getElementById('modifierNote').value = student.note;
            document.getElementById('modifierAge').value = student.age;
            $('#modalModifier').modal('show');
        });
    });

    
    document.getElementById('MoyGen').innerText = Moyenne().toFixed(2);
    document.getElementById('card1').innerText = SommeNote();
    document.getElementById('card2').innerText = "La somme des ages est égale à " + SommeAge();
    document.getElementById('card3').innerText = "Le nombre des notes est égale à " + compterNotes();
    document.getElementById('card4').innerText = "Le nombre des ages est égale à " + compterAge();

    // Mettre à jour les informations de pagination
    RenderPagination(students.length);
}

document.getElementById('searchInput').addEventListener('input', () => {
    PageCurrent = 1;
    filtre();
});

document.getElementById('bouttonAjout').addEventListener('click', () => {
    document.getElementById('modal').style.display = 'block';
});

document.getElementById('closeModal').addEventListener('click', () => {
    document.getElementById('modal').style.display = 'none';
    document.getElementById('formulaire').reset();
});

document.getElementById('envoyerModal').addEventListener('click', async () => {
    const ajoutPrenom = document.getElementById('ajoutPrenom').value;
    const ajoutNom = document.getElementById('ajoutNom').value;
    const ajoutNote = parseFloat(document.getElementById('ajoutNote').value);
    const ajoutAge = parseInt(document.getElementById('ajoutAge').value);

    if (ajoutNote>20) {
        alert("La note est superieur à 20");
    }else{

        if (ajoutPrenom === '' || ajoutNom === '' || isNaN(ajoutNote) || isNaN(ajoutAge)) {
            alert('Veuillez remplir tous les champs.');
        } else {
            const nouveauEtudiant = {
                prenom: ajoutPrenom,
                nom: ajoutNom,
                note: ajoutNote,
                age: ajoutAge
            };
            try {
                await setDoc(doc(collection(db, "students")), nouveauEtudiant);
                fetchStudents();
                document.getElementById('modal').style.display = 'none';
                document.getElementById('formulaire').reset();
            } catch (error) {
                console.error("Error adding student: ", error);
            }
        }
    }
    
    
    
    
});

document.getElementById('boutonModifier').addEventListener('click', async () => {
    const modifierPrenom = document.getElementById('modifierPrenom').value;
    const modifierNom = document.getElementById('modifierNom').value;
    const modifierNote = parseFloat(document.getElementById('modifierNote').value);
    const modifierAge = parseInt(document.getElementById('modifierAge').value);

    if (modifierPrenom === '' || modifierNom === '' || isNaN(modifierNote) || isNaN(modifierAge)) {
        alert('Veuillez remplir tous les champs.');
    } else {
        const updatedStudent = {
            prenom: modifierPrenom,
            nom: modifierNom,
            note: modifierNote,
            age: modifierAge
        };
        try {
            await updateDoc(doc(db, "students", currentStudentId), updatedStudent);
            fetchStudents();
            document.getElementById('modalModifier').style.display = 'none';
            document.getElementById('formulaire').reset();
            currentStudentId = null;
        } catch (error) {
            console.error("Error updating student: ", error);
        }
    }
});

document.getElementById('closeModifierModal').addEventListener('click', () => {
    document.getElementById('modalModifier').style.display = 'none';
    document.getElementById('formulaire').reset();
    currentStudentId = null;
});

window.onload = fetchStudents;

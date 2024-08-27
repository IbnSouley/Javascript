//Create even listener
document.getElementById('button').addEventListener('click' , loadText);

function loadText() {
    //create XHR Object
    var xhr = new XMLHttpRequest();
    //OPEN - type, url/file, async
    // console.log(xhr);
    xhr.open('GET', 'sample.txt', true);

    console.log('READYSTATE : ', xhr.readyState);
    
   //OPTIONAL - used for loaders
   xhr.onprogress = function() {
    console.log('READYSTATE : ', xhr.readyState);
   }

    xhr.onload = function() {
        console.log('READYSTATE : ', xhr.readyState);
        if(this.status == 200){
            // console.log(this.responseText);
            document.getElementById('text').innerHTML = this.responseText;
        }
    }

    xhr.onerror = function() {
        console.log('Request Error...');
        
    }

    //Sends request
    xhr.send();
}
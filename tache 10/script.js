window.onload = function() {
    

    const pi = 3.142;

    function calcArea(r) {
        const pi = 10;
        console.log("The area is : " + pi * r * r);
    }

    console.log(pi);
    calcArea(5);
    
}

//The let keyword
window.onload = function () {
    
  var items = document.getElementsByTagName("li");

  for (var x = 0; x < items.length; x++){
    items[x].onclick = function() {
        console.log(x);
        
    }
  }
}

//Default parameters
window.onload = function() {
    function logsoma(name = "mamadou", belt = "red", age = 25) {
        console.log("My name is "  + name + " and my belt colour is " + belt + " and my age is " + age); 
    }
    logsoma("ibn", "blue", 25);
}

//Generators
window.onload = function () {
    
    function* gen() {
        var x = yield "pear";
        var y = yield "banana";
        var z = yield "apple";
        return x + y + z;
    }

    var myGen = gen();
    console.log(myGen.next());
    console.log(myGen.next(10));
    console.log(myGen.next(5));
    console.log(myGen.next(3));
    
}
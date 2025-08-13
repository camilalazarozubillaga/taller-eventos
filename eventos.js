document.addEventListener("DOMContentLoaded", function() {
    const div = document.getElementById("miDiv");
    const btn = document.getElementById("btn");

    div.addEventListener("click", function() {
        alert("Hola! Soy el div");
    });

    btn.addEventListener("click", function(event) {
        event.stopPropagation(); 
        alert("Hola!");
    });
});
var btn_voltar = document.querySelector("#voltar");

btn_voltar.addEventListener("click", function(){
    window.scrollTo(0, 0);
});

function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}
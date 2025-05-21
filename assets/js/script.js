// document.addEventListener("DOMContentLoaded", function () {
//   let images = document.querySelectorAll(".carousel-item img");

//   images.forEach(img => {
//     img.style.height = "50vh";
//     img.style.objectFit = "cover";
//   });
// });


// document.addEventListener("DOMContentLoaded", function () {
//   let images = document.querySelectorAll(".carousel-item img");

//   images.forEach(img => {
//     img.style.height = "50vh";
//     img.style.objectFit = "cover";
//   });
// });



// document.getElementById("modal-link").addEventListener("click", function (event) {
//     event.preventDefault(); // Empêche le lien de naviguer immédiatement
//     var myModal = new bootstrap.Modal(document.getElementById("exampleModalone"));
//     myModal.show();
    
//     setTimeout(() => {
//         window.location.href = "index.html";
//     }, 3000); // Redirection après 3 secondes
// });



document.addEventListener("DOMContentLoaded", function () {
    var myModal = document.getElementById("Modal_send_message");

    myModal.addEventListener("hidden.bs.modal", function () {
        window.location.href = "index.html"; // Redirection après fermeture
    });
});
var firebaseForm = document.getElementById("firebase_form");

function saveHistory(hName, hLocation, hNeed) {
    return firebase.firestore().collection('histories').add({
        name: hName,
        location: hLocation,
        need: hNeed
    }).catch(function(error) {
        console.error('Error writing neew message to database', error);
    });
}

function save(event) {
    event.preventDefault();
    var nameText = document.getElementById("name").value;
    var dirText = document.getElementById("location").value;
    var need = document.getElementById("need").value;
    saveHistory(nameText, dirText, need);
}

// Accessing a function without () will return the function object instead of the function result.
// Si pusiera save() la función se ejecutaría al empezar y las demás veces sólo repetiría lo mismo.
firebaseForm.addEventListener("submit", save);
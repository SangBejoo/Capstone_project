const firebaseConfig = {
    apiKey: "AIzaSyBoiiJYn6kWJ4U0GsG0tusjF5Mukapf8Fs",
    authDomain: "coral-sonar-408101.firebaseapp.com",
    databaseURL: "https://coral-sonar-408101-default-rtdb.firebaseio.com",
    projectId: "coral-sonar-408101",
    storageBucket: "coral-sonar-408101.appspot.com",
    messagingSenderId: "866548413440",
    appId: "1:866548413440:web:f5a36eb2be605716b094e5",
    measurementId: "G-VL8973EHHW"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var messageDB = firebase.database().ref('message');

document.getElementById('contact').addEventListener("submit", submitForm);

function submitForm(e){
    e.preventDefault();

    var name = getElementVal("name");
    var email = getElementVal("email");
    var subject = getElementVal("subject");

saveMessages(name, email, subject);

    // Menampilkan pesan setelah submit
    var successMessage = document.createElement('p');
    successMessage.textContent = 'Form submitted successfully!';
    successMessage.style.color = 'green';
    document.getElementById('contact').appendChild(successMessage);

    // Mengosongkan form setelah submit
    document.getElementById('contact').reset();
}

const saveMessages = (name, email, subject) => {
    var newContactForm = messageDB.push();

    newContactForm.set({
        name : name, 
        email : email, 
        subject : subject, 
    });
};

    const getElementVal = (id) => {
        return document.getElementById(id).value;
    };


// Initialize Firebase (ADD YOUR OWN DATA)
var config = {
  apiKey: "AIzaSyAdNyisWU7xY_w3JRXxBwJ0opFw44Ij5PE",
  authDomain: "satara-b2b.firebaseapp.com",
  databaseURL: "https://satara-b2b-forum-default-rtdb.firebaseio.com/",
  projectId: "satara-b2b",
  storageBucket: "satara-b2b.appspot.com",
  messagingSenderId: "553416523639"
};
firebase.initializeApp(config);

// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var email = getInputVal('email');
  var number = getInputVal('number');
  var messages = getInputVal('messages');

  // Save message
  saveMessage(name, email, number, messages);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, email, number, messages){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    email:email,
    number:number,
    messages:messages
  });
}


 
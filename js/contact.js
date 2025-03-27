// Initialize Firebase (ADD YOUR OWN DATA)
var config = {
  apiKey: "AIzaSyCDckBUH996bOfajis6UWmvbyUMUJJyJgo",
  authDomain: "satara-b2b-forum.firebaseapp.com",
  databaseURL: "https://satara-b2b-forum-default-rtdb.firebaseio.com",
  projectId: "satara-b2b-forum",
  storageBucket: "satara-b2b-forum.appspot.com",
  messagingSenderId: "242526974980"
};
firebase.initializeApp(config);

// Reference messages collection
var messagesRef = firebase.database().ref('contact');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var fname = getInputVal('fname');
  var lname = getInputVal('lname');
  var email = getInputVal('email');
  var phone = getInputVal('phone');
  var message = getInputVal('message');

  // Save message
  saveMessage(fname, lname, email, phone, message);

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
function saveMessage(fname, lname, email, phone, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    fname: fname,
    lname:lname,
    email:email,
    phone:phone,
    message:message
  });
}


 
// Initialize Firebase
var config = {
    apiKey: "AIzaSyCDckBUH996bOfajis6UWmvbyUMUJJyJgo",
  authDomain: "satara-b2b-forum.firebaseapp.com",
  databaseURL: "https://satara-b2b-forum-default-rtdb.firebaseio.com",
  projectId: "satara-b2b-forum",
  storageBucket: "satara-b2b-forum.appspot.com",
  messagingSenderId: "242526974980"
};

firebase.initializeApp(config);

const dbRef = firebase.database().ref();

const usersRef = dbRef.child('feedback');
const userListUI = document.getElementById("userList");

usersRef.on("child_added", snap => {
	let user = snap.val();

	let $li = document.createElement("li");
	$li.innerHTML = user.email;
	
	$li.setAttribute("child-key", snap.key);
	$li.addEventListener("click", userClicked)
	userListUI.append($li);

});

function userClicked(e) {

	var userID = e.target.getAttribute("child-key");

	const userRef = dbRef.child('feedback/' + userID);
	const userDetailUI = document.getElementById("userDetail");

	userDetailUI.innerHTML = ""

	userRef.on("child_added", snap => {

		var $p = document.createElement("p");
		$p.innerHTML = snap.key  + " - " +  snap.val()
		userDetailUI.append($p);
	});

}



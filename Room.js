 var firebaseConfig = {

  apiKey: "AIzaSyAyvyne3phEG23VDBe9t9BqP_-JJrfnX5E",

  authDomain: "letschatwebapp-d1bc6.firebaseapp.com",

  databaseURL: "https://letschatwebapp-d1bc6-default-rtdb.firebaseio.com",

  projectId: "letschatwebapp-d1bc6",

  storageBucket: "letschatwebapp-d1bc6.appspot.com",

  messagingSenderId: "778932376193",

  appId: "1:778932376193:web:5965aaa6ec2f2a9e7bb380"

};


  
  firebase.initializeApp(firebaseConfig);

  username = localStorage.getItem("username");
  document.getElementById("username").innerHTML="Welcome"+username

  function addRoom() {
    room_name = document.getElementById("room_name").value;

    firebase.database().ref("/").child(room_name).update({
          purpose : "adding room name"
    });

    localStorage.setItem("room_name" , room_name);

    window.location = "Page.html";
  }

  function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//Start code
row = "<div class-'room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'#>"+Room_names+"</div><hr>"
//End code
});});}

function redirectToRoomName(name) {
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "Page.html"
}
getData();

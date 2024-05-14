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

user_name = localStorage.getItem("username");
room_name = localStorage.getItem("room_name");

function send() {
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
          name:user_name,
          message:msg,
          like:0
    });
}
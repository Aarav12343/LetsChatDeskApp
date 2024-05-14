function addUser() {
    var username = document.getElementById("Username").value;
    localStorage.setItem("username" , username);
    window.location = "LetsChat.html";
}

function login(){
     name = document.getElementById("username").value;
    localStorage.setItem("user", name );
    window.location="kwitter_room.html";
}



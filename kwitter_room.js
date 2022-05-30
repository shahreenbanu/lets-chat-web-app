
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyA--5MN97eVAsMXbI9n7k29pXoc8ut0sQ4",
      authDomain: "kwitter-8683b.firebaseapp.com",
      databaseURL: "https://kwitter-8683b-default-rtdb.firebaseio.com",
      projectId: "kwitter-8683b",
      storageBucket: "kwitter-8683b.appspot.com",
      messagingSenderId: "1049571778044",
      appId: "1:1049571778044:web:6145c1f4330a12320aa679",
      measurementId: "G-8RDM6PF06P"
    };
    firebase.initializeApp(firebaseConfig);
    var username = localStorage.getItem("user");
    document.getElementById("welcome").innerHTML="Welcome "+ username;
    
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("rooms").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name -" + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName( this.id)'>#"+ Room_names +"</div><hr>";
      document.getElementById("rooms").innerHTML+=row;
      //End code
      });});}
getData();

function logout(){
      localStorage.removeItem("user");
      window.location="index.html";
}
function addRoom() {
      user_room = document.getElementById("userroom").value;
      localStorage.setItem("room" , user_room);
      firebase.database().ref("/").child(user_room).update({
            message:"your room is added"
      });
      localStorage.setItem("room" , user_room);
}
function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("room", name )
     
      window.location="kwitter_page.html";
}


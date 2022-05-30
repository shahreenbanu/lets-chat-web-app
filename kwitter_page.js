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
  var user_name = localStorage.getItem("user");
  var room_name = localStorage.getItem("room");
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
//Start code
console.log(firebase_message_id);
      console.log(message_data)
      name = message_data['name'];
      message = message_data['message'];
      like = message_data['like'];
      name_with_tag = "<h4> "+ name +"<img class='user_tick' src='tick.png'></h4>";
      message_with_tag ="<h4 class='message_h4'>" + message +  "</h4>";
      like_button = "<button class=' btn btn-warning' id=" + firebase_message_id+ " value="+ like +"onclick='updateLike(this.id)'>";
      span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";
      row = name_with_tag + message_with_tag + like_button + span_with_tag;
      document.getElementById("output").innerHTML+= row;
//End code
 } });  }); }
getData();
function logout(){
    localStorage.removeItem("user");
    localStorage.removeItem("room");
    window.location="index.html";
}
function send(){
    msg = document.getElementById("message").value;
    firebase.database().ref(room_name).push({
        name : user_name,
        message : msg,
        like:0
    });
       
   document.getElementById("message").value = "";
}
function updateLike(message_id) {
    console.log("clicked on like button - " + message_id);
    button_id = message_id;
    likes = document.getElementById(button_id).value;
    updated_likes = Numbers(likes) + 1;
    console.log(updated_likes);

    firebase.database().ref(room_name).child(message_id).update({
        like : updated_likes
    });
}
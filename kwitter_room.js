
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyBA_1zj6IrGBPkSX9Tmo0CF3O8qLzMvKt8",
      authDomain: "kwitter-4e5f7.firebaseapp.com",
      databaseURL: "https://kwitter-4e5f7-default-rtdb.firebaseio.com",
      projectId: "kwitter-4e5f7",
      storageBucket: "kwitter-4e5f7.appspot.com",
      messagingSenderId: "893472148345",
      appId: "1:893472148345:web:0afc4d4d0047238d097da8"
    
    };

   firebase.initializeApp(firebaseConfig);


   user_name = localStorage.getItem("user_name"); document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function getData()
 {
       firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
      
       Room_names = childKey;
      
      
      
       //Start code
console.log('Room Name - ' + Room_names);
row = "<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function addRoom()
{
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });
      localStorage.setItem("room_name",room_name);
      window.location = "kwitter_page.html";
}

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name",room_name);
      window.location = "kwitter_page.html";
}

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}
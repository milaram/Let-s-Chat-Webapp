
//ADD YOUR FIREBASE LINKS HERE

var firebaseConfig = {
      apiKey: "AIzaSyByug4n6Oj5yLhT9c_aXRC-zrkEB0G9Xsk",
      authDomain: "kwitter-new-64dff.firebaseapp.com",
      databaseURL: "https://kwitter-new-64dff-default-rtdb.firebaseio.com",
      projectId: "kwitter-new-64dff",
      storageBucket: "kwitter-new-64dff.appspot.com",
      messagingSenderId: "201536640193",
      appId: "1:201536640193:web:3e63f75314f99977127040"
    };
   
    firebase.initializeApp(firebaseConfig);
 function addRoom()  
 {
       room_name = document.getElementById("room_name").value;
        
       firebase.database().ref("/").child(room_name).update({
             purpoose : "adding room name"
       });
       localStorage.setItem("room_name", room_name);
       window.location = "kwitter_page.html";
 }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("room name - " + Room_names);
row = "<div class = 'room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div> <hr>";
document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name)
{console.log(name);
 localStorage.setItem("room_name", name);
 window.location = "kwitter_page.html";
}

function Logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}

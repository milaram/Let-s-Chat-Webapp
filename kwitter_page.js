//YOUR FIREBASE LINKS

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
    function send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value = "";
}
function getData()
 { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = "";
 snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
console.log(firebase_message_id);
console.log(message_data);
name=message_data['name'];
message=message_data['message'];
like=message_data['like'];
name_tag="<h4>" + name +"<img class='user_tick' src='tick.png'></h4>";
message_tag="<h4 class='message_h4'>" + message + "</h4>" ;
like_button="<button class='btn btn-warning' id=" + firebase_message_id+" value=" + like + " onclick ='update_like(this.id)'";
span_tag="<span class='glyphicon glyphicon-thumbs-up'> Like:" + like + "</span> </button> <hr>";
row=name_tag+message_tag+like_button+span_tag;
document.getElementById("output").innerHTML += row;
      } });  }); }
getData();

function update_like(message_id){
      console.log("clicked on like button-"+ message_id);
      button_id=message_id;
      likes=document.getElementById(button_id).value;
      updated_like=Number(likes) + 1;
      console.log(updated_like);

      firebase.database().ref(room_name).child(message_id).update({
            like:updated_like
      });
}

function Logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";}
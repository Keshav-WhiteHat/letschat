var firebaseConfig = {
      apiKey: "AIzaSyBOoJy5HqhlNd8Lb707JlAjxTWddCs4pwI",
      authDomain: "kwitter-b2959.firebaseapp.com",
      databaseURL: "https://kwitter-b2959-default-rtdb.firebaseio.com",
      projectId: "kwitter-b2959",
      storageBucket: "kwitter-b2959.appspot.com",
      messagingSenderId: "408735342421",
      appId: "1:408735342421:web:4f92aa5e87bd11a00bd9dc"
    };
    
    // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
user_name=localStorage.getItem("user_name"),
document.getElementById("user_name").innerHTML="welcome "+user_name+"!";

function addroom(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"addingroomname"
      });
      localStorage.setItem("room_name",room_name);
      window.location="kwitter_page.html"
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("roomname:"+Room_names);
row="<div class='room_name' id="+Room_names+"onclick='redirect(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row;
//End code

      });});}
getData();
function redirect(){
      console.log (name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html"
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";   
   }
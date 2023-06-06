var firebaseConfig = {
      apiKey: "AIzaSyCaTXblelk2a7mRuhNwwuY5dx2s1F_0DGM",
      authDomain: "chit-chatter-576a9.firebaseapp.com",
      databaseURL: "https://chit-chatter-576a9-default-rtdb.firebaseio.com",
      projectId: "chit-chatter-576a9",
      storageBucket: "chit-chatter-576a9.appspot.com",
      messagingSenderId: "161663627810",
      appId: "1:161663627810:web:90112e205dda326f71d07b"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
user_name=localStorage.getItem("user_name");


document.getElementById("user_name").innerHTML="Welcome "+ user_name + "!";
function addRoom(){
      room_name= document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({ 
            purpose : "adding room name" });
            localStorage.setItem("room_name",room_name);
            window.location="kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("roomname- "+Room_names);
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
document.getElementById("output").innerHTML+=row;

      //End code
      });});}
getData();
function redirectToRoomName(name){
console.log(name);
localStorage.setItem("room_name",name);
window.location="kwitter_page.html";

}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}





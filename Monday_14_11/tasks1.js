// const form = document.getElementById('form');
// const username = document.getElementById('username');
// const email = document.getElementById('email');
// const pass = document.getElementById('password');


function addData(){
    let value
var username = document.getElementById(`username`).value;
var email = document.getElementById(`email`).value;
var pass = document.getElementById(`pass`).value;



localStorage.setItem(`Username`,username);
localStorage.setItem(`useremail`,email);
localStorage.setItem(`userpwd`,pass);

   document.getElementById("name").value="";
   document.getElementById("email").value="";
   document.getElementById("pass").value="";
}
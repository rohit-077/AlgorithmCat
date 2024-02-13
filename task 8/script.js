console.log("working"); 
const save=document.querySelector(".save"); 
const enter=document.getElementById("enter"); 
const login=document.getElementById("login");
var username=document.getElementById("inputEmail4").value; 
var password=document.getElementById("inputPassword4").value; 
var pass=document.getElementById("inputPassword4");
const toggle=document.querySelector(".toggle");
save.addEventListener("click",()=>{
	console.log("save the creds clicked"); 
	alert("Your credentials were successfully saved"); 

}); 
enter.addEventListener("click",()=>{
	console.log("enter clicked"); 
	alert("Thanks for filling up the form"); 
	
});  

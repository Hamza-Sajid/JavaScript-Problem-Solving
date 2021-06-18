var email=document.getElementById('email');
var password=document.getElementById('password');

document.getElementById("button").addEventListener("click", function() {
  var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

if(email.value=="" && password.value=="")
{
alert("Kindly fill the form");
}

if(password.value.length<8)
{
  alert("Enter 8 character long password")
}
if(password.value.length>=8 && email.value.match(mailformat))
{
alert("Login Successfully!");
}

else {
  alert("TRY AGAIN!");
}
});

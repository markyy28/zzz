$("btn-resetPassword").click(function(){
  var auth = firebase.auth();
  var email = $("#email").val();

if(email != "")
{
auth.sendPasswordResetEmail(email).then(function(){
window.alert("Email has been sent" );
})
.catch(function(error){
  var errorCode = error.code;
  var errorMessage = error.message;

  console.log(errorCode);
  console.log(errorMessage);

  window.alert("Message : " + errorMessage);

});
}
else{
  window.alert("Please fill out the form");
}
});

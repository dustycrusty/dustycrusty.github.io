var $password = $("#passField");
var $confirmPassword = $("#confirm_password");
var $email = $("#emailField");
//Hide hints
$("form span").hide();

function isPasswordValid() {
  return $password.val().length > 8;
}

function isEmailValid() {
    var exp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.+-]+\.edu$/;
    return exp.test($email.val());
}

function arePasswordsMatching() {
  return $password.val() === $confirmPassword.val();
}

function canSubmit() {
  return isPasswordValid() && arePasswordsMatching() && isEmailValid();
}

function passwordEvent(){
    if(isPasswordValid()) {
      $password.next().hide();
    } else {
      $password.next().show();
    }
}

function confirmPasswordEvent() {
  if(arePasswordsMatching()) {
    $confirmPassword.next().hide();
  } else {
    $confirmPassword.next().show();
  }
}

function confirmEmailEvent() {
    if (isEmailValid()){
        $email.next().hide();
    }
    else {
        $email.next().show();
    }
}

function enableSubmitEvent() {
  $("#submit").prop("disabled", !canSubmit());
    if ($("#submit").prop("disabled")) {
       $("#submit").attr("onclick", null);
        $("#submit").css("background-color", "gray");
    }
    else {
        
         $("#submit").attr("onclick", "signUp()");
         $("#submit").css("background-color", "rgba(255,120,121, 1)");
    }
}

//When event happens on password input
$password.focus(passwordEvent).keyup(passwordEvent).keyup(confirmPasswordEvent).keyup(enableSubmitEvent);

//When event happens on confirmation input
$confirmPassword.focus(confirmPasswordEvent).keyup(confirmPasswordEvent).keyup(enableSubmitEvent);

$email.focus(confirmEmailEvent).keyup(confirmEmailEvent).keyup(enableSubmitEvent);

enableSubmitEvent();



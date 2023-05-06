import React from 'react';

export default function SignUpForm() {
  var $password = $("#password");
var $confirmPassword = $("#confirm_password");

//Hide hints
$("form span").hide();

function isPasswordValid() {
  return $password.val().length > 8;
}

function arePasswordsMatching() {
  return $password.val() === $confirmPassword.val();
}

function canSubmit() {
  return isPasswordValid() && arePasswordsMatching();
}

function passwordEvent(){
    //Find out if password is valid
    if(isPasswordValid()) {
      //Hide hint if valid
      $password.next().hide();
    } else {
      //else show hint
      $password.next().show();
    }
}

function confirmPasswordEvent() {
  //Find out if password and confirmation match
  if(arePasswordsMatching()) {
    //Hide hint if match
    $confirmPassword.next().hide();
  } else {
    //else show hint
    $confirmPassword.next().show();
  }
}

function enableSubmitEvent() {
  $("#submit").prop("disabled", !canSubmit());
}

//When event happens on password input
$password.focus(passwordEvent).keyup(passwordEvent).keyup(confirmPasswordEvent).keyup(enableSubmitEvent);

//When event happens on confirmation input
$confirmPassword.focus(confirmPasswordEvent).keyup(confirmPasswordEvent).keyup(enableSubmitEvent);

enableSubmitEvent();
  return (
    <div>
      <form action="#" method="post">
        <h2>Sign Up</h2>
        <p>
          <label htmlFor="email" className="floatLabel">Email</label>
          <input id="email" name="email" type="text" />
        </p>
        <p>
          <label htmlFor="password" className="floatLabel">Password</label>
          <input id="password" name="password" type="password" />
          <span>Enter a password longer than 8 characters</span>
        </p>
        <p>
          <label htmlFor="confirm_password" className="floatLabel">Confirm Password</label>
          <input id="confirm_password" name="confirm_password" type="password" />
          <span>Your passwords do not match</span>
        </p>
        <p>
          <input type="submit" value="Create My Account" id="submit" />
        </p>
      </form>
    </div>
  );
}

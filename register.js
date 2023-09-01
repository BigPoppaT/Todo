
const passwordMatch = () => {
  while(true) {
    let pw1 = document.getElementById("pswd1");
    let pw2 = document.getElementById("pswd2");
    if(pw1 === pw2) {
      alert("Password created successfully");
      return passwordMatch;
    } else {
      alert("Passwords did not match, Try again!")
    }
  }
};


passwordMatch();

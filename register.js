const passwordMatch = () => {
  while(true) {
    const pw1 = document.getElementById("pswd1");
    const pw2 = document.getElementById("pswd2");
    if(pw1 === pw2) {
      alert("Password created successfully");
      return passwordMatch;
    } else {
      alert("Passwords did not match, Try again!");
    }
  }
};


let psw = passwordMatch();

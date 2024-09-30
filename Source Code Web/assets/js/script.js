var tglbtn = document.getElementById("nav-toggle");
var navlst = document.getElementById("nav-list")

tglbtn.addEventListener('click', () => {navlst.classList.toggle("sml-screen");});


function validateForm() {
    let name = document.forms["myForm"]["fname"].value;
    if (name == "") {
      alert("Name must be filled out");
      return false;
    }

    let psswd = document.forms["myForm"]["psswd"].value;
    let psswd_conf = document.forms["myForm"]["psswd-conf"].value;
    if ((psswd == "")||(psswd_conf == "")) {
      alert("Password and Password Confirmation must be filled out");
      return false;
    }
    else {
        if(psswd != psswd_conf){
            alert("Password & Confirm Password do not match");
            return false
        }
    }

    let birth = document.forms["myForm"]["birth"].value;
    if (birth == "") {
        alert("Date of birth must be filled out");
        return false;
    }

    let agree = document.forms["myForm"]["terms"].checked;
    if (agree == false) {
        alert("You must agree with terms and conditions!");
        return false;
    }

    alert("Register success!");
}
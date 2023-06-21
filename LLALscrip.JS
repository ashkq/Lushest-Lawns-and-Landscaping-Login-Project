var firstnameFormat = /^[A-Z][a-z]+$/
var lastnameFormat = /^[A-Z][a-z]+$/
var passwordFormat = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[\W]).{1,12}$/
var IDFormat = /^\d{6}$/
var phoneFormat = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/
var emailFormat = /^(?=.*?[A-Z]){0,}(?=(.*[a-z]){1,})(?=(.*[\d]){0,})(?=(.*[._-]){0,})(?=(.*[\W]){1,})(?!.*\s).{0,}[@][a-zA-Z]{2,4}[.][a-z]{2,4}$/

const land1 = {firstname: "John", lastname: "Stevens", password: "!Hello23", ID: "123123", phone: "1231231234", email: "johnstevens@njit.edu"};
const land2 = {firstname: "Alex", lastname: "Jacobs", password: "Lap-top5", ID: "454454", phone: "0987654321", email: "alexjacobs@njit.edu"};
const land3 = {firstname: "Peter", lastname: "Griffin", password: "Tesla#3", ID: "000111", phone: "3837420903", email: "petergriffin@njit.edu"};
const land4 = {firstname: "Steven", lastname: "Roberts", password: "Batman,1", ID: "456789", phone: "7873367932", email: "stevenroberts@njit.edu"};
const land5 = {firstname: "Thomas", lastname: "Edison", password: "Paris.0", ID: "098765", phone: "2354826975", email: "thomasedison@njit.edu"};
const land6 = {firstname: "Arthur", lastname: "Shelby", password: "Peaky!3", ID: "762762", phone: "2778575360", email: "arthurshelby@njit.edu"};
const land7 = {firstname: "Billy", lastname: "Kimber", password: "Booki3?", ID: "112233", phone: "9558518582", email: "billykimber@njit.edu"};
const land8 = {firstname: "Finn", lastname: "Jenkins", password: "Define@6", ID: "888888", phone: "2493579953", email: "finnjenkins@njit.edu"};
const landscapers = new Array(land1, land2, land3, land4, land5, land6, land7, land8);

function emailRequired() {
  if (document.getElementById("emailConfirm").checked) {
    document.getElementById("required").style.visibility = "visible";
  }
  else {
    document.getElementById("required").style.visibility = "hidden";
  }
}

function validate() {
  var first = document.getElementById("firstname").value;
  var first2 = document.getElementById("firstname");
  var counter = 0
  if (firstnameFormat.test(first) == false) {
    counter++
    alert("Please re-enter with capital first letter and the rest lowercase");
    first2.focus();
    return false;
}
  var last = document.getElementById("lastname").value;
  var last2 = document.getElementById("lastname");
  if (lastnameFormat.test(last) ==  false) {
    counter++
    alert("Please re-enter with capital first letter and the rest lowercase");
    last2.focus();
    return false;
}
  var pass = document.getElementById("password").value;
  var pass2 = document.getElementById("password");
  if (passwordFormat.test(pass) == false) {
    counter++
    alert("Please re-enter with a max of 12 characters and have at least 1 uppercase letter, one special character and one numeric character");
    pass2.focus();
    return false;
}
  var ID = document.getElementById("ID").value;
  var ID2 = document.getElementById("ID");
  if (IDFormat.test(ID) == false) {
    counter++
    alert("Please re-enter with a 6 digit number");
    ID2.focus();
    return false;
}
  var phone = document.getElementById("phone").value;
  var phone2 = document.getElementById("phone");
  if (phoneFormat.test(phone) == false) {
    counter++
    alert("Please re-enter with a 10 digit phone number");
    phone2.focus();
    return false;
}
  var email = document.getElementById("email").value;
  var email2 = document.getElementById("email");
  if (emailFormat.test(email) == false) {
    counter++
    alert("Please re-enter with an email address @ followed by a period and an email domain that consists of 2 to 4 characters");
    email2.focus();
    return false;
  }
  if (counter == 0) {
    verify();
  }
}

function verify() {
  for (let i = 0; i < landscapers.length; i++) {
  if (document.getElementById("firstname").value == landscapers[i].firstname) {
    if (document.getElementById("lastname").value == landscapers[i].lastname) {
        if (document.getElementById("password").value == landscapers[i].password) {
            if (document.getElementById("ID").value == landscapers[i].ID) {
                if (document.getElementById("phone").value == landscapers[i].phone) {
                    if (document.getElementById("email").value == landscapers[i].email) {
                      alert("Successfully logged in!");
                      break;

  }
  }
  }
  }
  }
  }
  if (i==7) {
    alert("This account isn't registered");
  }
}
}
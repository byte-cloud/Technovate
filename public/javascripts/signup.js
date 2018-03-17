function ValidatePassword() {
    var regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{10,12}$/;
    var txt = document.getElementById("key");
    if (!regex.test(txt.value)) {
        alert("Password strength is not good.");
    } else {
        alert("Password strength is good.");
    }
}

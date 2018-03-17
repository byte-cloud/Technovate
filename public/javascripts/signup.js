function ValidatePassword() {
    var regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{10,12}$/;
    var txt = document.getElementById("key");
    if (!regex.test(txt.value)) {
        alert("Password strength is not good.");
    } else {
        alert("Password strength is good.");
    }
}


function showPassword() {

    var password_attr = $('#password').attr('type');
    var conf_password_attr = $('#conf_password').attr('type');

    if (password_attr != 'text') {

        $('.checkbox').addClass('show');
        $('#password').attr('type', 'text');
        $('#conf_password').attr('type', 'text');

    } else {

        $('.checkbox').removeClass('show');
        $('#password').attr('type', 'password');
        $('#conf_password').attr('type', 'password');

    }

}
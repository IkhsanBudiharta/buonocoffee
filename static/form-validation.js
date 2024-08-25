$('#name-register').on('input', validateName);
$('#email-register').on('input', validateEmail);
$('#password-register').on('input', validatePassword);
$('#repeat-password-register').on('input', validateRepeatPassword);

function validateName() {
    const name = $('#name-register').val();
    const nameValidation = $('#name-validation');
    if (!name) {
        nameValidation.text("Name can't be empty");
        $('#name-register').addClass('invalid');
    } else if (name.length < 3) {
        nameValidation.text('Name must be at least 3 characters long.');
        $('#name-register').addClass('invalid');
    }
    else {
        nameValidation.text('');
        $('#name-register').removeClass('invalid');
    }
}

function validateEmail() {
    const email = $('#email-register').val();
    const emailValidation = $('#email-validation');
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
        emailValidation.text("Email can't be empty");
        $('#email-register').addClass('invalid');
    } else if (!emailPattern.test(email)) {
        emailValidation.text('Please enter a valid email address.');
        $('#email-register').addClass('invalid');
    }

    else {
        emailValidation.text('');
        $('#email-register').removeClass('invalid');
    }
}

function validatePassword() {
    const password = $('#password-register').val();
    const passwordValidation = $('#password-validation');
    if (!password) {
        passwordValidation.text("Password can't be empty");
        $('#password-register').addClass('invalid');
    }
    else if (password.length < 8) {
        passwordValidation.text('Password must be at least 8 characters long.');
        $('#password-register').addClass('invalid');
    }
    else {
        passwordValidation.text('');
        $('#password-register').removeClass('invalid');
    }
}

function validateRepeatPassword() {
    const password = $('#password-register').val();
    const repeatPassword = $('#repeat-password-register').val();
    const repeatPasswordValidation = $('#repeat-password-validation');
    if (!repeatPassword) {
        repeatPasswordValidation.text("Repeat password can't be empty");
        $('#repeat-password-register').addClass('invalid');
    } else if (password !== repeatPassword) {
        repeatPasswordValidation.text('Passwords do not match.');
        $('#repeat-password-register').addClass('invalid');
    }


    else {
        repeatPasswordValidation.text('');
        $('#repeat-password-register').removeClass('invalid');
    }
}
function shakeInput(selector) {
    $(selector).addClass('shake');
    setTimeout(function () {
        $(selector).removeClass('shake');
    }, 500);
}

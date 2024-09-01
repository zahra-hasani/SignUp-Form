// // انتخاب عناصر ورودی
// var nameInput = document.getElementById('name');
// var emailInput = document.getElementById('email');
// var passwordInput = document.getElementById('password');

// // افزودن رویداد تغییر به ورودی نام
// nameInput.addEventListener('change', function() {
//     const regexName = /^[a-zA-Z]+$/;
//     const inputName = nameInput.value;

//     if (!regexName.test(inputName) || inputName.length >= 15) {
//         alert("نام باید کمتر از 15 کاراکتر و فقط شامل حروف انگلیسی باشد.");
//     } else {
//         alert("نام معتبر است.");
//     }
// });

// // افزودن رویداد تغییر به ورودی ایمیل
// emailInput.addEventListener('change', function() {
//     const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//     const inputEmail = emailInput.value;

//     if (!regexEmail.test(inputEmail)) {
//         alert("ایمیل معتبر نیست.");
//     } else {
//         alert("ایمیل معتبر است.");
//     }
// });

// // افزودن رویداد تغییر به ورودی رمز عبور
// passwordInput.addEventListener('change', function() {
//     const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$#-_!%*?&])[A-Za-z\d@$#-_!%*?&]{8,}$/;
//     const inputPassword = passwordInput.value;

//     if (!regexPassword.test(inputPassword)) {
//         alert('رمز عبور باید حداقل شامل 8 کاراکتر، یک حرف کوچک، یک حرف بزرگ، یک عدد و یک کاراکتر خاص باشد.');
//     } else {
//         alert("رمز عبور معتبر است.");
//     }
// });


// انتخاب عناصر ورودی و دکمه
var nameInput = document.getElementById('name');
var emailInput = document.getElementById('email');
var passwordInput = document.getElementById('password');
var submitBtn = document.getElementById('submitBtn');

// انتخاب عناصر برای نمایش پیغام‌های خطا
var nameError = document.getElementById('nameError');
var emailError = document.getElementById('emailError');
var passwordError = document.getElementById('passwordError');

// افزودن رویداد کلیک به دکمه بررسی
submitBtn.addEventListener('click', function() {
    const regexName = /^[a-zA-Z]+$/;
    const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$#-_!%*?&])[A-Za-z\d@$#-_!%*?&]{8,}$/;

    const inputName = nameInput.value;
    const inputEmail = emailInput.value;
    const inputPassword = passwordInput.value;

    // پاک کردن پیغام‌های خطا قبلی و حذف کلاس خطا
    nameError.textContent = '';
    emailError.textContent = '';
    passwordError.textContent = '';
    nameInput.classList.remove('error-input');
    emailInput.classList.remove('error-input');
    passwordInput.classList.remove('error-input');

    let isValid = true;

    // بررسی نام
    if (!regexName.test(inputName) || inputName.length >= 15) {
        nameError.textContent = "Name must be less than 15 characters and contain only English letters.";
        nameInput.classList.add('error-input');
        isValid = false;
    }

    // بررسی ایمیل
    if (!regexEmail.test(inputEmail)) {
        emailError.textContent = "Email is invalid.";
        emailInput.classList.add('error-input');
        isValid = false;
    }

    // بررسی رمز عبور
    if (!regexPassword.test(inputPassword)) {
        passwordError.textContent = "Password must be at least 8 characters with a mix of uppercase, lowercase, digits, and special characters.";
        passwordInput.classList.add('error-input');
        isValid = false;
    }

    // نمایش پیغام موفقیت در صورت اعتبارسنجی صحیح
    if (isValid) {
        alert("All inputs are valid.");
    }
});


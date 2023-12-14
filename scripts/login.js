var isLoginAccount = { email: '', password: '' };
var validAcc = [
    { email: 'admin', password: 'admin', isLocked : false },
    { email: 'user', password: 'user',isLocked : false }
];
const dataList = JSON.parse(localStorage.getItem(accountManager));
function CheckAdmin(e) {
    e.preventDefault();
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var boxChecks = document.querySelectorAll('.boxCheck');
    //  account đã đăng ký ở bên scripts changeTarget 
    validAcc.forEach(account => {
        // push và đi qua trang dashboard
        if (account.email === email && account.password === password && account.isLocked === false) {
            isLoginAccount.email = account.email;
            isLoginAccount.password = account.password;
            localStorage.setItem('isLoginAccount', JSON.stringify(isLoginAccount));
            window.location.href = "../html/DashBoard.html";
            currentTarget = 'DashBoard';
            localStorage.setItem('currentTarget', JSON.stringify(currentTarget));
        }
        else if (account.email === email && account.password === password && account.isLocked === true) {
            boxChecks[0].querySelector('p').innerHTML = 'Tài khoảng bị khoá, vui lòng liên hệ cho Admin để mở khoá !'
            boxChecks.forEach(box => {
                box.querySelector('div').style.width = '300px'
                box.querySelector('div').classList.remove('hidden');
                box.querySelector('div').classList.add('visible');
            });
        }
        // khi không nhập
        else if (email === "" && password === "") {
            boxChecks[0].querySelector('p').innerHTML = 'Email không được để trống !'
            boxChecks[1].querySelector('p').innerHTML = 'Pass không được để trống !'
            boxCheckFunc(boxChecks);
        } // khi nhập sai
        else if (account.email !== email && account.password !== password) {
            boxChecks[0].querySelector('p').innerHTML = 'Opp có vẻ sai email rùi !'
            boxChecks[1].querySelector('p').innerHTML = 'Opp có vẻ sai pass rùi !'
            boxCheckFunc(boxChecks);
        }
    });
}
function boxCheckFunc(listElement) {
    listElement.forEach(box => {
        box.querySelector('div').style.width = '240px'
        box.querySelector('div').classList.remove('hidden');
        box.querySelector('div').classList.add('visible');
    })
}
function checkLogin() {
    if (localStorage.getItem('isLoginAccount') == null)
        return;
    else {
        currentTarget = 'DashBoard';
        window.location.href = "../html/DashBoard.html";
        // 
    }

}
function togglePassword() {
    var password = document.getElementById('password');
    var showPass = document.getElementById('unHindPass');
    if (password.type == "password") {
        password.type = "text";
        showPass.innerHTML = '<i class="fa-regular fa-eye"></i>'
    } else {
        password.type = "password";
        showPass.innerHTML = '<i class="fa-regular fa-eye-slash"></i>'
    }
}


document.addEventListener('DOMContentLoaded', () => {
    checkLogin();
    document.getElementById('unHindPass').addEventListener('click', togglePassword)
    document.getElementById('submitButton').addEventListener('click', (e) => CheckAdmin(e));
    document.getElementById('email').addEventListener('change', (e) => {
        e.preventDefault();
        var boxChecks = document.querySelectorAll('.boxCheck');
        boxChecks.forEach(box => {
            box.querySelector('div').classList.remove('visible');
            box.querySelector('div').classList.add('hidden');
        })
    });
});
// 
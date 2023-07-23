yesButton = document.getElementById('Yes');

// Hàm xử lý khi khóa người dùng
function lockUserHandler(e, email) {
    e.preventDefault();
    var usersList = JSON.parse(localStorage.getItem(accountManager));
    for (let i = 0; i < usersList.length; i++) {
        if (usersList[i].email === email) {
            usersList[i].isLocked = true;
            localStorage.setItem(accountManager, JSON.stringify(usersList));
        }
    }
    renderCatalogs();
}

// Hàm xử lý khi mở khóa người dùng
function unLockUserHandler(e, email) {
    e.preventDefault();
    var usersList = JSON.parse(localStorage.getItem(accountManager));
    for (let i = 0; i < usersList.length; i++) {
        if (usersList[i].email === email) {
            usersList[i].isLocked = false;
            localStorage.setItem(accountManager, JSON.stringify(usersList));
        }
    }
    renderCatalogs();
}

// Thêm sự kiện click cho khóa người dùng
function lockUser(email) {
    yesButton.removeEventListener('click', (e) => lockUserHandler(e, email));
    yesButton.addEventListener('click', (e) => lockUserHandler(e, email));
}

// Thêm sự kiện click cho mở khóa người dùng
function unLockUser(email) {
    yesButton.removeEventListener('click', (e) => unLockUserHandler(e, email));
    yesButton.addEventListener('click', (e) => unLockUserHandler(e, email));
}




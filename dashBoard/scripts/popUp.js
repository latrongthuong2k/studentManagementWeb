// submit
document.getElementById("finishAddInfo").addEventListener("click", (e) => {
    e.preventDefault();
    var currentTargetList = JSON.parse(localStorage.getItem(currentTarget)) ? JSON.parse(localStorage.getItem(currentTarget)) : [];
    submitForm('submit', currentTargetList);
});

document.getElementById("Close").addEventListener("click", (e) => {
    e.preventDefault();
    submitForm('close',);
});

// Thêm sinh viên
function popUpForm(action, readOnlyElementNameID) {
    var boardAdd = document.getElementById("boardAdd");
    boardAdd.style.display = 'block';
    var coverBG = document.querySelector("#boardAdd .coverBG");
    var boxBody = document.querySelector("#boardAdd .boxBody");
    coverBG.style.display = 'block';
    setTimeout(() => {
        boxBody.style.opacity = '1';
        boxBody.classList.add('visible');
    }, 100);
    var selectedStatus = document.getElementById('selectStatus');
    selectedStatus.style.borderColor = '';
    selectedStatus.style.boxShadow = '';

    // action
    var elementID = document.getElementById(readOnlyElementNameID);
    var buttonText = document.getElementById('finishAddInfo');

    // 
    if (action === 'edit') {
        elementID.readOnly = true;
        elementID.style.backgroundColor = 'gray';
        buttonText.innerHTML = 'Sửa';
        var h3 = document.getElementById('submitBoard');
        switch (currentTarget) {
            case 'courseList':
                h3.innerHTML = 'Sửa khoá học';
                break;
            case 'studentList':
                h3.innerHTML = 'Sửa sinh viên';
                break;
            case 'classList':
                h3.innerHTML = 'Sửa lớp học';
                break;
        }
    }
    else {
        elementID.readOnly = false;
        elementID.style.backgroundColor = '';
        buttonText.innerHTML = 'Thêm mới';
    }



}


function popOutForm() {
    var boardAdd = document.getElementById("boardAdd");
    var coverBG = document.querySelector(".coverBG");
    var boardBody = boardAdd.querySelector(".boxBody");
    boardBody.style.opacity = '0';
    setTimeout(() => {
        boardBody.classList.remove('visible');
        coverBG.style.display = 'none';
        boardAdd.style.display = 'none';
    }, 400)
}


// buttons
document.getElementById("addBtn").addEventListener("click", (e) => {
    e.preventDefault();
    // opend popUp ;
    switch (currentTarget) {
        case "Dashboard":
            break;
        case "courseList":
            popUpForm('', 'CourseId');
            break;
        case "classList":
            popUpForm('', 'ClassId');
            break;
        case "studentList":
            popUpForm('', 'studentID');
            break;
        case "userSystems":
            break;
    }
});

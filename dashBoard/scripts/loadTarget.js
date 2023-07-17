
addForm = document.getElementById('addForm');
textFix = document.querySelector('.B');
switch (currentTarget) {
    case 'studentList':
        addForm.innerHTML = studentInputPattern;
        textFix.innerHTML = 'Quản lý sinh viên';
        break;
    case 'courseList':
        addForm.innerHTML = courseInputPattern;
        textFix.innerHTML = 'Quản lý khoá học';
        break;
    case 'classList':
        addForm.innerHTML = classInputPattern;
        textFix.innerHTML = 'Quản lý lớp học';
        break;
    case 'userSystems':
        textFix.innerHTML = 'Quản lý Users';
        break;
    case 'DashBoard':
        break;
}

// var h3 = document.getElementById('submitBoard');
// switch (currentTarget) {
//     case 'courseList':
//         h3.innerHTML = 'Tạo mới khoá học';
//         break;
//     case 'studentList':
//         h3.innerHTML = 'Tạo mới sinh viên';
//         break;
//     case 'classList':
//         h3.innerHTML = 'Tạo mới lớp học';
//         break;
// }

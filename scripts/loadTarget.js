
addForm = document.getElementById('addForm');
textFix = document.querySelector('.B');
switch (currentTarget) {
    case STUDENT_TARGET:
        addForm.innerHTML = studentInputPattern;
        textFix.innerHTML = 'Quản lý sinh viên';
        break;
    case COURSE_TARGET:
        addForm.innerHTML = courseInputPattern;
        textFix.innerHTML = 'Quản lý khoá học';
        break;
    case CLASS_TARGET:
        addForm.innerHTML = classInputPattern;
        textFix.innerHTML = 'Quản lý lớp học';
        break;
    case accountManager:
        textFix.innerHTML = 'Quản lý Users';
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

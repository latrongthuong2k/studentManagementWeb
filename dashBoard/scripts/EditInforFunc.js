//***************************************************
var targetOverride = '';
// Khi sửa thông tin sinh viên
function editInfoStudent(catalogID) {
    var studentList = JSON.parse(localStorage.getItem('studentList')) ? JSON.parse(localStorage.getItem('studentList')) : [];
    let selectedStatus = document.getElementById('selectStatus');
    let inputGlobalClass = document.querySelectorAll('[type="text"]');

    var catalog = studentList.find(function (catalog) {
        return catalog.studentID === catalogID;
    });
    targetOverride = catalog; // biến cục bộ targetOverride ở bên ngoài
    if (catalog != null) {
        popUpForm('edit', 'studentID');
        selectedStatus.value = catalog.Status;
        let maleFemale = document.querySelectorAll('#gender');
        maleFemale.forEach(sex => {
            if (sex.value === catalog.Gender) {
                sex.checked = true;
            }
        });
        inputGlobalClass.forEach(element => {
            switch (element.id) {
                case 'studentID':
                    element.value = catalog.studentID;
                    break;
                case 'birthDay':
                    element.value = catalog.Birthday;
                    break;
                case 'name':
                    element.value = catalog.Name;
                    break;
                case 'classStudy':
                    element.value = catalog.Class;
                    break;
                case 'address':
                    element.value = catalog.Address;
                    break;
                case 'email':
                    element.value = catalog.Email;
                    break;
                case 'descriptions':
                    element.value = catalog.Descriptions;
                    break;
                case 'phone':
                    element.value = catalog.Phone;
                    break;
            }
        })
    }
    else {
        console.log('Danh mục không tồn tại.');
    }
}
function editInfoCourse(catalogID) {
    var courseList = JSON.parse(localStorage.getItem('courseList')) ? JSON.parse(localStorage.getItem('courseList')) : [];
    let selectedStatus = document.getElementById('selectStatus');
    let inputGlobalClass = document.querySelectorAll('[type="text"]');
    var catalog = courseList.find(function (catalog) {
        return catalog.CourseId === catalogID;
    });
    targetOverride = catalog;
    if (catalog != null) {
        popUpForm('edit', 'CourseId');
        selectedStatus.value = catalog.Status;
        inputGlobalClass.forEach(element => {
            switch (element.id) {
                case 'CourseId':
                    element.value = catalog.CourseId;
                    break;
                case 'CourseName':
                    element.value = catalog.CourseName;
                    break;
                case 'CourseTime':
                    element.value = catalog.CourseTime;
                    break;
            }
        })
    }
    else {
        console.log('Danh mục không tồn tại.');
    }
}
function editInfoClass(catalogID) {
    var classList = JSON.parse(localStorage.getItem('classList')) ? JSON.parse(localStorage.getItem('classList')) : [];
    let Descriptions = document.getElementById('descriptions');
    let Status = document.getElementById('selectStatus');
    let inputGlobalClass = document.querySelectorAll('[type="text"]');
    var catalog = classList.find(function (catalog) {
        return catalog.ClassId === catalogID;
    });
    targetOverride = catalog;
    if (catalog != null) {
        popUpForm('edit', 'ClassId');
        Descriptions.value = catalog.Descriptions;
        Status.value = catalog.Status;
        inputGlobalClass.forEach(element => {
            switch (element.id) {
                case 'ClassId':
                    element.value = catalog.ClassId;
                    break;
                case 'ClassName':
                    element.value = catalog.ClassName;
                    break;
                case 'LecturerName':
                    element.value = catalog.Lecturer;
                    break;
                case 'TotalNumber':
                    element.value = catalog.TotalNumber;
                    break;
            }
        })
    }
    else {
        console.log('Danh mục không tồn tại.');
    }
}
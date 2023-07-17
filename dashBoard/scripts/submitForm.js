
// check đầu vào
function checkInput() {
    const inputGlobalClassList = document.querySelectorAll('[type="text"]');
    inputGlobalClassList.forEach(element => {
        element.addEventListener('blur', (e) => {
            e.preventDefault();
            switch (currentTarget) {
                case 'courseList':
                    checkInputCourse(element, 'checkEach');
                    break;
                case 'studentList':
                    checkInputStudent(element, 'checkEach');
                    break;
                case 'classList':
                    checkInputClass(element, 'checkEach');
                    break;
            }
        });
    });
}
// take Value and reset
function submitForm(action) {
    var validFeelBackGlobal = document.querySelectorAll('.valid-feedback');
    var inValidFeelBackGlobal = document.querySelectorAll('.invalid-feedback');
    var addForm = document.getElementById('addForm');
    var inputGlobalClass = addForm.querySelectorAll('[type="text"]');
    var selectedStatus = document.getElementById('selectStatus');
    if (action === 'submit') {
        switch (currentTarget) {
            case COURSE_TARGET:
                inputGlobalClass.forEach(element => {
                    if (checkInputCourse(element, 'checkEach') === false) { return }
                });
                if (func(selectedStatus) === false) {
                    return;
                }
                course.Status = selectedStatus.value;
                // pushOrModify(course, 'CourseId');    

                break;
            case CLASS_TARGET:
                var Descriptions = document.getElementById('descriptions');
                var LecturerName = document.getElementById('LecturerName');
                inputGlobalClass.forEach(element => {
                    if (checkInputClass(element, 'checkEach') == false) { return }
                })
                classRoom.Lecturer = LecturerName.value;
                classRoom.Status = selectedStatus.value;
                classRoom.Descriptions = Descriptions.value;
                pushOrModify(classRoom, 'ClassId');

                // đưa vào mảng lớn 
                // const courseList = JSON.parse(localStorage.getItem('courseList'));
                // const selectedCourseId = document.getElementById('select-course').value;
                // const selectedCourse = courseList.find(course => course.CourseId === selectedCourseId);
                // const classOfCourse = selectedCourse.Class;
                // classOfCourse.push(JSON.parse(localStorage.getItem(currentTarget) ? JSON.parse(localStorage.getItem(currentTarget)) : []));
                // localStorage.setItem(COURSE_TARGET, JSON.stringify(classOfCourse));
                break;
            case STUDENT_TARGET:
                var gender = document.querySelector('input[name="gender"]:checked').value;
                //
                inputGlobalClass.forEach(element => {

                    if (element.id !== 'descriptions' || element.id !== 'gender') {
                        // check each để lấy dữ liệu
                        if (checkInputStudent(element, 'checkEach') == false) { return }
                    }
                });
                //
                if (func(selectedStatus) === false) {
                    return;
                }
                // ********* lấy NỐT dữ liệu gender vs descriptions riêng ( không có trong hàm CheckInput ) *********
                newInformationStudent.Descriptions = descriptions;
                newInformationStudent.Gender = gender;
                newInformationStudent.Status = selectedStatus.value;
                pushOrModify(newInformationStudent, 'studentID');
                break;
            case USER_TARGET:
                break;
        }
        // // vatidate trường Status ( đổi màu đỏ nếu không chọn )
        function func(selectedStatus) {
            if (selectedStatus.value == '') {
                selectedStatus.style.borderColor = '#dc3545';
                selectedStatus.style.boxShadow = ' 0px 0px 4px 2px rgba(255, 35, 35, 0.5)';
                selectedStatus.addEventListener('change', function () {
                    if (selectedStatus.value === '') {
                        selectedStatus.style.borderColor = '#dc3545';
                        selectedStatus.style.boxShadow = '  0px 0px 4px 2px rgba(255, 35, 35, 0.5)';
                    }
                    else {
                        selectedStatus.style.borderColor = '#198754';
                        selectedStatus.style.boxShadow = '  0px 0px 4px 2px #19875466';
                    }
                })
                return false; // return nếu status chưa được chọn
            }
        }
        function funcR() {
            // Reset trạng thái ẩn cảnh báo cho tất cả các trường
            for (var i = 0; i < validFeelBackGlobal.length; i++) {
                validFeelBackGlobal[i].style.display = 'none';
            }
            for (var i = 0; i < inValidFeelBackGlobal.length; i++) {
                inValidFeelBackGlobal[i].style.display = 'none';
            }
            for (var i = 0; i < inputGlobalClass.length; i++) {
                debugger
                inputGlobalClass[i].style.backGroundColor = '';
                inputGlobalClass[i].classList.remove('is-valid');
                inputGlobalClass[i].classList.remove('is-invalid');
                document.querySelector('#addForm').reset();
            }
        }

        //**** Lưu giá trị vào mảng
        // check trước là sửa hay push mới 
        function pushOrModify(patternObject, targetId) {
            var currentTargetList = JSON.parse(localStorage.getItem(currentTarget)) ? JSON.parse(localStorage.getItem(currentTarget)) : [];
            if (document.getElementById(targetId).readOnly === true) {
                document.getElementById(targetId).readOnly = false;
                CheckExistToOverride(currentTargetList, patternObject);
            } else {
                currentTargetList.push(patternObject);
                localStorage.setItem(currentTarget, JSON.stringify(currentTargetList));
            }
            funcR();
        }
        renderCatalogs();
        popOutForm();
        //  làm các việc còn lại



    } else if (action === 'close') {
        // Reset trạng thái ẩn cảnh báo cho tất cả các trường
        for (var i = 0; i < validFeelBackGlobal.length; i++) {
            validFeelBackGlobal[i].style.display = 'none';
        }
        for (var i = 0; i < inValidFeelBackGlobal.length; i++) {
            inValidFeelBackGlobal[i].style.display = 'none';
        }
        for (var i = 0; i < inputGlobalClass.length; i++) {
            inputGlobalClass[i].style.backGroundColor = '';
            inputGlobalClass[i].classList.remove('is-valid');
            inputGlobalClass[i].classList.remove('is-invalid');
        }
        document.querySelector('#addForm').reset();
        popOutForm();
    }
};

// addEvent blur cho inputs
checkInput();
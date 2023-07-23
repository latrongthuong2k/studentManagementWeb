
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
                managementList = JSON.parse(localStorage.getItem('managementList')) ? JSON.parse(localStorage.getItem('managementList')) : []
                inputGlobalClass.forEach(element => {
                    if (checkInputCourse(element, 'checkEach') === false) { return }
                });
                if (func(selectedStatus) === false) {
                    return;
                }
                course.Status = selectedStatus.value;
                if (pushOrModify(course, 'CourseId') == true) {
                    managementList.push(course);
                } else {
                    // edit courseList in management list
                    for (let i = 0; i < managementList.length; i++) {
                        if (managementList[i].CourseId == course.CourseId) {
                            courseList = JSON.parse(localStorage.getItem(COURSE_TARGET))
                            managementList[i] = courseList;
                            break; // Thoát khỏi vòng lặp sau khi thay đổi giá trị
                        }
                    }
                }
                break;
            case CLASS_TARGET:
                managementList = JSON.parse(localStorage.getItem('managementList')) ? JSON.parse(localStorage.getItem('managementList')) : []
                var Descriptions = document.getElementById('descriptions');
                var LecturerName = document.getElementById('LecturerName');
                inputGlobalClass.forEach(htmlElementId => {
                    if (checkInputClass(htmlElementId, 'checkEach') == false) { return }
                })
                classRoom.Lecturer = LecturerName.value;
                classRoom.Status = selectedStatus.value;
                classRoom.Descriptions = Descriptions.value;

                if (pushOrModify(classRoom, 'ClassId') == true)
                /* check true cũng đồng nghĩa dã push classRoom vào classList rồi, giờ đẩy thêm 
                obj class đó vào managementList.course (cụ thể) nữa và lưu lại
                */ {
                    for (let i = 0; i < managementList.length; i++) {
                        if (managementList[i].CourseId == selectedOptionCourse.CourseId) {
                            managementList[i].Class.push(classRoom);
                            break;
                        }
                    }
                }
                else {
                    // edit classList in management.course list
                    for (let i = 0; i < managementList.length; i++) {
                        if (managementList[i].CourseId == selectedOptionCourse.CourseId) {
                            classList = JSON.parse(localStorage.getItem(CLASS_TARGET));
                            managementList[i].Class = classList;
                            break;
                        }
                    }
                }
                break;
            case STUDENT_TARGET:
                debugger
                managementList = JSON.parse(localStorage.getItem('managementList')) ? JSON.parse(localStorage.getItem('managementList')) : []
                var gender = document.querySelector('input[name="gender"]:checked').value;
                //
                inputGlobalClass.forEach(htmlElementId => {
                    if (htmlElementId.id !== 'descriptions' || htmlElementId.id !== 'gender') {
                        // check each để lấy dữ liệu
                        if (checkInputStudent(htmlElementId, 'checkEach') == false) { return }
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

                if (pushOrModify(newInformationStudent, 'studentID') == true)
                /* check true cũng đồng nghĩa dã push student vào studentList rồi, giờ đẩy thêm 
                obj class đó vào managementList.course.class nữa và lưu lại
                */ {
                    for (let i = 0; i < managementList.length; i++) {
                        if (managementList[i].CourseId == selectedOptionCourse.CourseId) {
                            for (let j = 0; j < managementList[i].Class.length; j++) {
                                if (managementList[i].Class[j].ClassId == selectedOptionClassOfCourse.ClassId) {
                                    // studentList = JSON.parse(localStorage.getItem(STUDENT_TARGET))
                                    managementList[i].Class[j].Students.push(newInformationStudent);
                                    break;
                                }
                            }
                        }
                    }
                }
                else {
                    // edit studentList in management.course.class list
                    for (let i = 0; i < managementList.length; i++) {
                        if (managementList[i].CourseId == selectedOptionCourse.CourseId) {
                            for (let j = 0; j < managementList[i].Class.length; j++) {
                                if (managementList[i].Class[j].ClassId == selectedOptionClassOfCourse.ClassId) {
                                    studentList = JSON.parse(localStorage.getItem(STUDENT_TARGET))
                                    managementList[i].Class[j].Students = studentList;
                                    break;
                                }
                            }
                        }
                    }
                }
                break;
            case USER_TARGET:
                break;
        }
        // lưu lại
        localStorage.setItem('managementList', JSON.stringify(managementList));
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
                inputGlobalClass[i].style.backGroundColor = '';
                inputGlobalClass[i].classList.remove('is-valid');
                inputGlobalClass[i].classList.remove('is-invalid');
                document.querySelector('#addForm').reset();
            }
        }

        //**** Lưu giá trị vào mảng
        // check trước là sửa hay push mới 
        function pushOrModify(patternObjectNewData, htmlElementId) {
            isPushed = true;
            var currentTargetList = JSON.parse(localStorage.getItem(currentTarget)) ? JSON.parse(localStorage.getItem(currentTarget)) : [];
            if (document.getElementById(htmlElementId).readOnly === true) {
                document.getElementById(htmlElementId).readOnly = false;
                CheckExistToOverride(currentTargetList, patternObjectNewData);
                isPushed = false;
            } else {
                currentTargetList.push(patternObjectNewData);
                localStorage.setItem(currentTarget, JSON.stringify(currentTargetList));
                isPushed = true;
            }
            funcR();
            return isPushed;
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

//  kiểm tra ID có tồn tại hay chưa và ghi đè 
function CheckExistToOverride(targetList, patternObjectNewData) {
    targetList.forEach((oldObj, index) => {
        switch (currentTarget) {
            case STUDENT_TARGET:
                if (oldObj.studentID === patternObjectNewData.studentID) {
                    targetList[index] = patternObjectNewData;
                }
                break;
            case COURSE_TARGET:
                if (oldObj.CourseId === patternObjectNewData.CourseId) {
                    targetList[index] = patternObjectNewData;
                }
                break;
            case CLASS_TARGET:
                if (oldObj.ClassId === patternObjectNewData.ClassId) {
                    targetList[index] = patternObjectNewData;
                }
                break;
            case accountManager:
                if (oldObj.email === patternObjectNewData.email) {
                    targetList[index] = patternObjectNewData;
                }
                break;
        }
    });
    debugger
    localStorage.setItem(currentTarget, JSON.stringify(targetList));

}
// addEvent blur cho inputs
checkInput();
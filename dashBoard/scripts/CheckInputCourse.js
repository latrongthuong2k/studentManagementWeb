
function checkInputCourse(elementInput, action) {
    var currentTargetList = JSON.parse(localStorage.getItem(currentTarget)) ? JSON.parse(localStorage.getItem(currentTarget)) : [];

    // target la một list các element Input type text của đối tượng 
    const feelBackCourseId = document.getElementById('feelBackCourseId');
    const feelBackCourseName = document.getElementById('feelBackCourseName');
    const feelBackCourseTime = document.getElementById('feelBackCourseTime');
    // Condition
    var isValid = true;
    // Validate trường CourseId
    if (elementInput.id === 'CourseId' && elementInput.readOnly === false) {
        debugger
        if (elementInput.value === "") {
            elementInput.classList.remove('is-valid');
            elementInput.classList.add('is-invalid');
            var invalidFeedback = feelBackCourseId.querySelector('.invalid-feedback');
            feelBackCourseId.querySelector('.valid-feedback').style.display = 'none';
            invalidFeedback.innerHTML = 'ID course không được để trống !';
            invalidFeedback.style.display = 'block';
            isValid = false;

        } else {
            var isExistingID = false;
            for (var i = 0; i < currentTargetList.length; i++) {
                if (currentTargetList[i].CourseId.replace(/\s/g, '') === elementInput.value.replace(/\s/g, '')) {
                    isExistingID = true;
                    break;
                }
            }
            if (isExistingID) {
                elementInput.classList.remove('is-valid');
                elementInput.classList.add('is-invalid');
                elementInput.style.backgroundColor = bgColorWarning;
                var invalidFeedback = feelBackCourseId.querySelector('.invalid-feedback');
                feelBackCourseId.querySelector('.valid-feedback').style.display = 'none';
                invalidFeedback.innerHTML = 'ID khoá học đã tồn tại, xin vui lòng nhập ID khác !';
                invalidFeedback.style.display = 'block';
                isValid = false;

            } else {
                elementInput.style.backgroundColor = '';
                elementInput.classList.add('is-valid');
                elementInput.classList.remove('is-invalid');
                feelBackCourseId.querySelector('.valid-feedback').style.display = 'block';
                feelBackCourseId.querySelector('.invalid-feedback').style.display = 'none';

                // sửa về đối tượng course
                course.CourseId = elementInput.value;

                isValid = true;
            }
        }
    }
    //
    if (elementInput.id === 'CourseName') {
        if (elementInput.value === "") {
            elementInput.classList.remove('is-valid');
            elementInput.classList.add('is-invalid');
            var invalidFeedback = feelBackCourseName.querySelector('.invalid-feedback');
            feelBackCourseName.querySelector('.valid-feedback').style.display = 'none';
            invalidFeedback.innerHTML = 'Tên course không được để trống !';
            invalidFeedback.style.display = 'block';
            isValid = false;

        } else {
            var isExistingName = false;
            for (var i = 0; i < currentTargetList.length; i++) {
                if (currentTargetList[i].CourseName.replace(/\s/g, '') === elementInput.value.replace(/\s/g, '')) {
                    isExistingName = true;
                    break;
                }
            }
            if (isExistingName) {
                elementInput.classList.remove('is-valid');
                elementInput.classList.add('is-invalid');
                elementInput.style.backgroundColor = bgColorWarning;
                var invalidFeedback = feelBackCourseName.querySelector('.invalid-feedback');
                feelBackCourseName.querySelector('.valid-feedback').style.display = 'none';
                invalidFeedback.innerHTML = 'Tên khoá học đã tồn tại, xin vui lòng đặt tên khác !';
                invalidFeedback.style.display = 'block';
                isValid = false;

            }
            else {
                elementInput.style.backgroundColor = '';
                elementInput.classList.add('is-valid');
                elementInput.classList.remove('is-invalid');
                feelBackCourseName.querySelector('.valid-feedback').style.display = 'block';
                feelBackCourseName.querySelector('.invalid-feedback').style.display = 'none';


                course.CourseName = elementInput.value;

                isValid = true;
            }

        }
    }
    //
    if (elementInput.id === 'CourseTime') {
        if (elementInput.value === "") {
            elementInput.classList.remove('is-valid');
            elementInput.classList.add('is-invalid');
            var invalidFeedback = feelBackCourseTime.querySelector('.invalid-feedback');
            feelBackCourseTime.querySelector('.valid-feedback').style.display = 'none';
            invalidFeedback.innerHTML = 'Thời gian không được để trống !';
            invalidFeedback.style.display = 'block';
            isValid = false;

        } else {
            elementInput.classList.add('is-valid');
            elementInput.classList.remove('is-invalid');
            feelBackCourseTime.querySelector('.valid-feedback').style.display = 'block';
            feelBackCourseTime.querySelector('.invalid-feedback').style.display = 'none';

            course.CourseTime = elementInput.value;

            isValid = true;
        }
    }
    // *** Action cho func

    if (action === 'checkEach') {
        if (isValid) {
            return true;
        } else {
            return false;
        }
    }
}
function checkInputStudent(elementInput, action) {
    var currentTargetList = JSON.parse(localStorage.getItem(currentTarget)) ? JSON.parse(localStorage.getItem(currentTarget)) : [];

    // target la một list các element Input type text của đối tượng studentList
    const feelBackID = document.getElementById('feelBackID');
    const feelBackBirthday = document.getElementById('feelBackBirthday');
    const feelBackName = document.getElementById('feelBackName');
    const feelBackClass = document.getElementById('feelBackClass');
    const feelBackAddress = document.getElementById('feelBackAddress');
    const feelBackEmail = document.getElementById('feelBackEmail');
    const feelBackPhone = document.getElementById('feelBackPhone');

    // Condition
    var isValid = true;
    // Validate trường studentID
    if (elementInput.id === 'studentID' && elementInput.readOnly === false) {
        if (elementInput.value === "") {
            elementInput.classList.remove('is-valid');
            elementInput.classList.add('is-invalid');
            var invalidFeedback = feelBackID.querySelector('.invalid-feedback');
            feelBackID.querySelector('.valid-feedback').style.display = 'none';
            invalidFeedback.innerHTML = 'ID không được để trống !';
            invalidFeedback.style.display = 'block';
            isValid = false;

        } else {
            var isExistingID = false;
            for (var i = 0; i < currentTargetList.length; i++) {
                if (currentTargetList[i].studentID.replace(/\s/g, '') === elementInput.value.replace(/\s/g, '')) {
                    isExistingID = true;
                    break;
                }
            }
            if (isExistingID) {
                elementInput.classList.remove('is-valid');
                elementInput.classList.add('is-invalid');
                elementInput.style.backgroundColor = bgColorWarning;
                var invalidFeedback = feelBackID.querySelector('.invalid-feedback');
                feelBackID.querySelector('.valid-feedback').style.display = 'none';
                invalidFeedback.innerHTML = 'ID đã tồn tại, xin vui lòng nhập ID khác !';
                invalidFeedback.style.display = 'block';
                isValid = false;

            }
            else {
                elementInput.style.backgroundColor = '';
                elementInput.classList.add('is-valid');
                elementInput.classList.remove('is-invalid');
                feelBackID.querySelector('.valid-feedback').style.display = 'block';
                feelBackID.querySelector('.invalid-feedback').style.display = 'none';

                newInformationStudent.studentID = elementInput.value;

                isValid = true;
            }
        }
    }
    //
    if (elementInput.id === 'name' && elementInput.readOnly === false) {
        if (elementInput.value === "") {
            elementInput.classList.remove('is-valid');
            elementInput.classList.add('is-invalid');
            var invalidFeedback = feelBackName.querySelector('.invalid-feedback');
            feelBackName.querySelector('.valid-feedback').style.display = 'none';
            invalidFeedback.innerHTML = 'Tên học sinh không được để trống !';
            invalidFeedback.style.display = 'block';
            isValid = false;

        } else {
            elementInput.classList.add('is-valid');
            elementInput.classList.remove('is-invalid');
            feelBackName.querySelector('.valid-feedback').style.display = 'block';
            feelBackName.querySelector('.invalid-feedback').style.display = 'none';

            newInformationStudent.Name = elementInput.value;

            isValid = true;
        }
    }
    //
    if (elementInput.id === 'birthDay') {
        if (elementInput.value === "") {
            elementInput.classList.remove('is-valid');
            elementInput.classList.add('is-invalid');
            var invalidFeedback = feelBackBirthday.querySelector('.invalid-feedback');
            feelBackBirthday.querySelector('.valid-feedback').style.display = 'none';
            invalidFeedback.innerHTML = 'Ngày sinh không được để trống !';
            invalidFeedback.style.display = 'block';
            isValid = false;

        } else {
            elementInput.classList.add('is-valid');
            elementInput.classList.remove('is-invalid');
            feelBackBirthday.querySelector('.valid-feedback').style.display = 'block';
            feelBackBirthday.querySelector('.invalid-feedback').style.display = 'none';


            newInformationStudent.Birthday = elementInput.value;

            isValid = true;
        }
    }
    //
    if (elementInput.id === 'classStudy') {
        if (elementInput.value === "") {
            elementInput.classList.remove('is-valid');
            elementInput.classList.add('is-invalid');
            var invalidFeedback = feelBackClass.querySelector('.invalid-feedback');
            feelBackClass.querySelector('.valid-feedback').style.display = 'none';
            invalidFeedback.innerHTML = 'Lớp học không được để trống !';
            invalidFeedback.style.display = 'block';
            isValid = false;

        } else {
            elementInput.classList.add('is-valid');
            elementInput.classList.remove('is-invalid');
            feelBackClass.querySelector('.valid-feedback').style.display = 'block';
            feelBackClass.querySelector('.invalid-feedback').style.display = 'none';

            newInformationStudent.Class = elementInput.value;

            isValid = true;
        }
    }
    //
    if (elementInput.id === 'address') {
        if (elementInput.value === "") {
            elementInput.classList.remove('is-valid');
            elementInput.classList.add('is-invalid');
            var invalidFeedback = feelBackAddress.querySelector('.invalid-feedback');
            feelBackAddress.querySelector('.valid-feedback').style.display = 'none';
            invalidFeedback.innerHTML = 'Địa chỉ không được để trống !';
            invalidFeedback.style.display = 'block';
            isValid = false;

        } else {
            elementInput.classList.add('is-valid');
            elementInput.classList.remove('is-invalid');
            feelBackAddress.querySelector('.valid-feedback').style.display = 'block';
            feelBackAddress.querySelector('.invalid-feedback').style.display = 'none';

            newInformationStudent.Address = elementInput.value;

            isValid = true;

        }
    }
    //
    if (elementInput.id === 'email') {
        var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/i;
        if (!emailPattern.test(email.value)) {
            elementInput.classList.remove('is-valid');
            elementInput.classList.add('is-invalid');
            var invalidFeedback = feelBackEmail.querySelector('.invalid-feedback');
            feelBackEmail.querySelector('.valid-feedback').style.display = 'none';
            invalidFeedback.innerHTML = 'Email không đúng !';
            invalidFeedback.style.display = 'block';
            isValid = false;

        } else {
            elementInput.classList.add('is-valid');
            elementInput.classList.remove('is-invalid');
            feelBackEmail.querySelector('.valid-feedback').style.display = 'block';
            feelBackEmail.querySelector('.invalid-feedback').style.display = 'none';

            newInformationStudent.Email = elementInput.value;

            isValid = true;
        }
    }
    //
    if (elementInput.id === 'phone') {
        var phoneNumber = phone.value.replace(/[-\s]/g, '');
        var phoneNumberPattern = /^\d{2}(?:\d{4}\d{4}|\d{8}|\d\d?\d{3,4}\d{4})$/;
        if (!phoneNumberPattern.test(phoneNumber)) {
            elementInput.classList.remove('is-valid');
            elementInput.classList.add('is-invalid');
            var invalidFeedback = feelBackPhone.querySelector('.invalid-feedback');
            feelBackPhone.querySelector('.valid-feedback').style.display = 'none';
            invalidFeedback.innerHTML = 'Số điện thoại không đúng !';
            invalidFeedback.style.display = 'block';
            isValid = false;

        } else {
            elementInput.classList.add('is-valid');
            elementInput.classList.remove('is-invalid');
            feelBackPhone.querySelector('.valid-feedback').style.display = 'block';
            feelBackPhone.querySelector('.invalid-feedback').style.display = 'none';

            newInformationStudent.Phone = elementInput.value;
            formatNumber(elementInput);

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
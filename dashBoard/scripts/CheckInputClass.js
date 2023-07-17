
function checkInputClass(elementInput, action) {
    // target la một list các element Input type text của đối tượng 
    var currentTargetList = JSON.parse(localStorage.getItem(currentTarget)) ? JSON.parse(localStorage.getItem(currentTarget)) : [];

    const feelBackClassID = document.getElementById('feelBackClassID');
    const feelBackClassName = document.getElementById('feelBackClassName');
    const feelBackLecturerName = document.getElementById('feelBackLecturerName');
    const feelBackTotalNumber = document.getElementById('feelBackTotalNumber');
    // Condition
    // Validate
    var isValid = true;
    if (elementInput.id === 'ClassId' || elementInput.readOnly === false) {
        if (elementInput.value === "") {
            elementInput.classList.remove('is-valid');
            elementInput.classList.add('is-invalid');
            let invalidFeedback = feelBackClassID.querySelector('.invalid-feedback');
            feelBackClassID.querySelector('.valid-feedback').style.display = 'none';
            invalidFeedback.innerHTML = 'ID lớp không được để trống !';
            invalidFeedback.style.display = 'block';
            isValid = false;
        } else {
            var isExistingID = false;
            for (var i = 0; i < currentTargetList.length; i++) {
                if (currentTargetList[i].ClassId.replace(/\s/g, '') === elementInput.value.replace(/\s/g, '')) {
                    isExistingID = true;
                    break;
                }
            }
            if (isExistingID) {
                elementInput.classList.remove('is-valid');
                elementInput.classList.add('is-invalid');
                elementInput.style.backgroundColor = bgColorWarning;
                let invalidFeedback = feelBackClassID.querySelector('.invalid-feedback');
                feelBackClassID.querySelector('.valid-feedback').style.display = 'none';
                invalidFeedback.innerHTML = ' ID Lớp học đã tồn tại, xin vui lòng nhập ID khác !';
                invalidFeedback.style.display = 'block';
                isValid = false;
            } else {
                elementInput.style.backgroundColor = '';
                elementInput.classList.add('is-valid');
                elementInput.classList.remove('is-invalid');
                feelBackClassID.querySelector('.valid-feedback').style.display = 'block';
                feelBackClassID.querySelector('.invalid-feedback').style.display = 'none';

                classRoom.ClassId = elementInput.value;

                isValid = true;
            }
        }
    }
    //
    if (elementInput.id === 'ClassName') {
        if (elementInput.value === "") {
            elementInput.classList.remove('is-valid');
            elementInput.classList.add('is-invalid');
            let invalidFeedback = feelBackClassName.querySelector('.invalid-feedback');
            feelBackClassName.querySelector('.valid-feedback').style.display = 'none';
            invalidFeedback.innerHTML = 'tên lớp không được để trống !';
            invalidFeedback.style.display = 'block';
            isValid = false;
        } else {
            var isExistingName = false;
            for (var i = 0; i < currentTargetList.length; i++) {
                if (currentTargetList[i].ClassName.replace(/\s/g, '') === elementInput.value.replace(/\s/g, '')) {
                    isExistingName = true;
                    break;
                }
            }
            if (isExistingName) {
                elementInput.classList.remove('is-valid');
                elementInput.classList.add('is-invalid');
                elementInput.style.backgroundColor = bgColorWarning;
                let invalidFeedback = feelBackClassName.querySelector('.invalid-feedback');
                feelBackClassName.querySelector('.valid-feedback').style.display = 'none';
                invalidFeedback.innerHTML = ' Tên Lớp học đã tồn tại, xin vui lòng đặt tên khác !';
                invalidFeedback.style.display = 'block';
                isValid = false;

            }
            else {
                elementInput.style.backgroundColor = '';
                elementInput.classList.add('is-valid');
                elementInput.classList.remove('is-invalid');
                feelBackClassName.querySelector('.valid-feedback').style.display = 'block';
                feelBackClassName.querySelector('.invalid-feedback').style.display = 'none';

                classRoom.ClassName = elementInput.value;

                isValid = true;
            }

        }
    }
    //
    if (elementInput.id === 'TotalNumber') {
        if (elementInput.value === "") {
            elementInput.classList.remove('is-valid');
            elementInput.classList.add('is-invalid');
            let invalidFeedback = feelBackTotalNumber.querySelector('.invalid-feedback');
            feelBackTotalNumber.querySelector('.valid-feedback').style.display = 'none';
            invalidFeedback.innerHTML = 'Sỉ số không được để trống !';
            invalidFeedback.style.display = 'block';
            isValid = false;

        } else {
            elementInput.classList.add('is-valid');
            elementInput.classList.remove('is-invalid');
            feelBackTotalNumber.querySelector('.valid-feedback').style.display = 'block';
            feelBackTotalNumber.querySelector('.invalid-feedback').style.display = 'none';

            classRoom.TotalNumber = elementInput.value;

            isValid = true;
        }
    }
    if (elementInput.id === 'LecturerName') {
        if (elementInput.value === "") {
            elementInput.classList.remove('is-valid');
            elementInput.classList.add('is-invalid');
            let invalidFeedback = feelBackLecturerName.querySelector('.invalid-feedback');
            feelBackLecturerName.querySelector('.valid-feedback').style.display = 'none';
            invalidFeedback.innerHTML = 'Tên giáo viên không được để trống !';
            invalidFeedback.style.display = 'block';
            isValid = false;
        } else {
            elementInput.classList.add('is-valid');
            elementInput.classList.remove('is-invalid');
            feelBackLecturerName.querySelector('.valid-feedback').style.display = 'block';
            feelBackLecturerName.querySelector('.invalid-feedback').style.display = 'none';

            // Ghi vào trong đối tượng classRoom
            classRoom.Lecturer = elementInput.value;
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

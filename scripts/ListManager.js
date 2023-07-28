// fix dấu trang 
var cText = document.querySelector('.C');
var dText = document.querySelector('.D');

// Hàm tạo các option cho select Course và gắn sự kiện
function renderCourseOptions(nameTarget) {
    managementList = JSON.parse(localStorage.getItem('managementList')) ? JSON.parse(localStorage.getItem('managementList')) : [];
    const selectOption = document.getElementById('select-course');
    // Xóa tất cả các option hiện có trong select
    selectOption.innerHTML = '';

    // Tạo option cho từng đối tượng trong renderList

    managementList.forEach(Obj => {
        const option = document.createElement('option');
        option.value = Obj.CourseId;
        option.innerText = Obj.CourseName;
        selectOption.appendChild(option);
    });
    // mặt định list ban đầu
    selectedOptionCourse = managementList[0];
    handleCourseSelection(); // kích hoạt mặt định ban đầu vì phải dùng () => cho hàm change
    selectOption.addEventListener('change', () => handleCourseSelection());

    // Gắn sự kiện khi chọn một Course

}

// Hàm xử lý khi chọn một Course
function handleCourseSelection() {
    renderList = JSON.parse(localStorage.getItem('managementList')) ? JSON.parse(localStorage.getItem('managementList')) : [];
    var course = null;
    var selectedOptionId = document.getElementById('select-course').value;
    for (let i = 0; i < renderList.length; i++) {
        if (renderList[i].CourseId === selectedOptionId) {
            cText.innerHTML = renderList[i].CourseName;
            course = renderList[i];
            selectedOptionCourse = course;
        }
    }
    if (course != null) {
        for (let i = 0; i < renderList.length; i++) {
            if (renderList[i].CourseId === course.CourseId) {
                if (renderList[i].Class.length != 0)
                    localStorage.setItem(CLASS_TARGET, JSON.stringify(renderList[i].Class));
                else {
                    const nullArray = [];
                    localStorage.setItem(STUDENT_TARGET, JSON.stringify(nullArray));
                }
            }
        }
    } else {
        debugger
    }
    // render class list theo mảng class (lưu độc lập trên local) và được ghi đè lại từ mảng class managerment

    /* vì lệnh render chỉ render theo targetList,
     mà targetList được thay đổi bằng các mảng lưu độc lập trên local mỗi khi đổi trang */
    if (currentTarget == STUDENT_TARGET) // chỉ render dropDown khi ở trang student
        renderClassOptionsOfCourse();
    else if (currentTarget == CLASS_TARGET) {
        renderCatalogs();
    }

}
////////////////////////////////////////////////////////////////
function renderClassOptionsOfCourse() {

    const classList = selectedOptionCourse;
    const selectOption = document.getElementById('select-class');
    // Xóa tất cả các option hiện có trong select
    selectOption.innerHTML = '';

    // Tạo option cho từng đối tượng trong classList
    classList.Class.forEach(Obj => {
        const option = document.createElement('option');
        option.value = Obj.ClassId;
        option.innerText = Obj.ClassName;
        selectOption.appendChild(option);
    });
    // Gắn sự kiện khi chọn một lớp học
    handleClassSelection();
    selectOption.addEventListener('change', () => handleClassSelection());

}

// Hàm xử lý khi chọn một lớp học
function handleClassSelection() {
    const course = selectedOptionCourse;
    const selectedOptionId = document.getElementById('select-class').value;
    const classItem = course.Class.find(Obj => Obj.ClassId === selectedOptionId);
    if (classItem === undefined) {
        renderCatalogs();
        return;
    }
    dText.innerHTML = classItem.ClassName;
    // selected Class data
    selectedOptionClassOfCourse = classItem;
    for (let i = 0; i < managementList.length; i++) {
        if (managementList[i].CourseId === selectedOptionCourse.CourseId) {
            for (let j = 0; j < managementList[i].Class.length; j++) {
                if (managementList[i].Class[j].ClassId === selectedOptionClassOfCourse.ClassId) {
                    {
                        localStorage.setItem(STUDENT_TARGET, JSON.stringify(managementList[i].Class[j].Students));
                    }
                }
            }
        }
    }
    renderCatalogs();
}

// gọi hàm 
if (currentTarget == CLASS_TARGET || currentTarget == STUDENT_TARGET) {
    renderCourseOptions(COURSE_TARGET);
}


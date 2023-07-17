// fix dấu trang 
var cText = document.querySelector('.C');

// Hàm tạo các option cho select Course và gắn sự kiện
function renderCourseOptions() {
    const courseList = JSON.parse(localStorage.getItem(COURSE_TARGET));
    const selectCourse = document.getElementById('select-course');
    if (courseList != null)
        return;
    // Xóa tất cả các option hiện có trong select
    selectCourse.innerHTML = '';

    // Tạo option cho từng đối tượng trong courseList
    courseList.forEach(course => {
        const option = document.createElement('option');
        option.value = course.CourseId;
        option.innerText = course.CourseName;
        selectCourse.appendChild(option);
    });
    cText.innerHTML = courseList[0].CourseName;


    // Gắn sự kiện khi chọn một Course
    selectCourse.addEventListener('change', handleCourseSelection);
}

// Hàm xử lý khi chọn một Course
function handleCourseSelection() {
    const selectedCourseId = document.getElementById('select-course').value;
    const courseList = JSON.parse(localStorage.getItem(COURSE_TARGET));
    const selectedCourse = courseList.find(course => course.CourseId === selectedCourseId);
    cText.innerHTML = selectedCourse.CourseName;
    classOfCourseList = selectedCourse.Class;
}

// gọi hàm 
renderCourseOptions();

// var currentTarget = JSON.parse(localStorage.getItem('currentTarget')) ? JSON.parse(localStorage.getItem('currentTarget')) : '';
var bodyControl = document.querySelector("#body-Control");
var items = bodyControl.querySelectorAll(".item");
var itemsIcons = bodyControl.querySelectorAll(".item .customIcon");
items.forEach(item => {
    if (item.id === 'DashBoard' && currentTarget === DASHBOARD) {
        changeStyle(item);
    } if (item.id === 'Class' && currentTarget === CLASS_TARGET) {
        changeStyle(item);
    }
    if (item.id === 'Course' && currentTarget === COURSE_TARGET) {
        changeStyle(item);
    }
    if (item.id === 'Students' && currentTarget === STUDENT_TARGET) {
        changeStyle(item);
    }
    if (item.id === 'Users' && currentTarget === accountManager) {
        changeStyle(item);
    }

});

function changeStyle(item) {
    // màu
    item.style.backgroundColor = '';
    item.style.boxShadow = '';
    item.style.backgroundColor = 'rgba(80, 156, 219, 1)';
    item.style.boxShadow = '0px 0px 40px 0px rgba(0, 0, 0, 0.4)';

    // icon
    // itemsIcons.forEach(icon => {
    //     icon.style.visibility = 'hidden';
    // });
    var icon = item.querySelector(".customIcon");
    icon.style.visibility = 'visible';
}
// add sự kiện chuyển trang cho các nút control

changePage();

function changePage(item) {
    items.forEach(button => {
        if (button.id === 'DashBoard') {
            button.addEventListener("click", (e) => {
                // e.preventDefault();
                currentTarget = DASHBOARD;
                localStorage.setItem('currentTarget', JSON.stringify(currentTarget));
                window.location.href = "../html/DashBoard.html";

            });
        } else {

            switch (button.id) {
                case "Course":
                    button.addEventListener("click", (e) => {
                        currentTarget = COURSE_TARGET;
                        localStorage.setItem('currentTarget', JSON.stringify(currentTarget));
                        window.location.href = "../html/CourseListPage.html";
                    });
                    break;
                case "Class":
                    button.addEventListener("click", (e) => {
                        currentTarget = CLASS_TARGET;
                        localStorage.setItem('currentTarget', JSON.stringify(currentTarget));
                        window.location.href = "../html/ClassListPage.html";

                    });
                    break;
                case "Students":
                    button.addEventListener("click", (e) => {
                        currentTarget = STUDENT_TARGET;
                        localStorage.setItem('currentTarget', JSON.stringify(currentTarget));
                        window.location.href = "../html/StudentsListPage.html";

                    });
                    break;
                case "Users":
                    button.addEventListener("click", (e) => {
                        currentTarget = accountManager;
                        localStorage.setItem('currentTarget', JSON.stringify(currentTarget));
                        window.location.href = "../html/UsersListPage.html";
                    });
                    break;
            }
        }
    });


}

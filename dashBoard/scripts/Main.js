// Text variables
var COURSE_TARGET = 'courseList';
//
var CLASS_TARGET = 'classList';
var USER_TARGET = 'userSystems';
var STUDENT_TARGET = 'studentList';
var DASHBOARD = 'DashBoard';
//
var CURRENT_TARGET_KEY = 'currentTarget';

// Main data local variables
// nameTarget
var currentTarget = JSON.parse(localStorage.getItem(CURRENT_TARGET_KEY)) ? JSON.parse(localStorage.getItem(CURRENT_TARGET_KEY)) : '';
// var currentTargetList = JSON.parse(localStorage.getItem(currentTarget)) ? JSON.parse(localStorage.getItem(currentTarget)) : [];

// listTarget


// đăng xuất button
document.getElementById("logOutBtn").addEventListener("click", () => {
    localStorage.removeItem('userSystems');
    window.location.href = "../Html/index.html";
});

// cài đặt ban đầu cho trường feel back
document.addEventListener('DOMContentLoaded', () => {
    FeelBackAdd();
    function FeelBackAdd() {
        var feelBacks = document.querySelectorAll('.feelBack');
        feelBacks.forEach(div => {
            div.innerHTML = `
                            <div class="valid-feedback">
                                        Ok rồi đó!
                            </div>
                            <div class="invalid-feedback">
                                        Không OK!
                            </div>`;
        });
    }
});

// ***************************************************



function loadEmptyOrList() {
    var emptyTable = document.getElementById("emptyTable");
    var renderedTable = document.getElementById("renderedTable");
    var currentTargetList = JSON.parse(localStorage.getItem(currentTarget)) ? JSON.parse(localStorage.getItem(currentTarget)) : [];
    if (currentTargetList.length === 0) {
        emptyTable.style.display = "block";
        renderedTable.style.display = "none";
    } else {
        emptyTable.style.display = "none";
        renderedTable.style.display = "block";
    }
}

// root color 
var bgColorWarning = 'rgba(246, 25, 25, 0.70)';





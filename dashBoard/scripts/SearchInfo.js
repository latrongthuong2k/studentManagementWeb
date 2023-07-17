// Sử lý sự kiện tìm kiếm
var inputElement = document.getElementById("FindInfo");
var searchFields = [];
var sortField = "";
inputElement.addEventListener("input", handleSearchInput);

switchCaseTargetToSearch();

function switchCaseTargetToSearch() {
    //
    switch (currentTarget) // Các trường muốn tìm kiếm
    {
        case 'studentList':
            inputElement.placeholder = 'Nhập Id học sinh hoặc tên học sinh để tìm kiếm';
            searchFields = ["studentID", "Name"];
            sortField = 'studentID';
            break;
        case 'courseList':
            inputElement.placeholder = 'Nhập Id course hoặc tên course để tìm kiếm';
            searchFields = ["CourseId", "CourseName"];
            sortField = 'CourseId';
            break;
        case 'classList':
            inputElement.placeholder = 'Nhập Id lớp hoặc tên lớp để tìm kiếm';
            searchFields = ["ClassId", "ClassName"];
            sortField = 'ClassId';
            break;
        case 'userSystems':
            inputElement.placeholder = 'Nhập email user để tìm kiếm';
            searchFields = ["email"];
            sortField = 'email';
            break;
        case 'DashBoard':
            break;
    }
}
// 
function handleSearchInput(event) {
    // Lấy giá trị từ trường input
    var keyword = event.target.value;
    var currentTargetList = JSON.parse(localStorage.getItem(currentTarget)) ? JSON.parse(localStorage.getItem(currentTarget)) : [];
    // Gọi hàm tìm kiếm 
    if (keyword === '') {
        renderCatalogs(currentTargetList);
    }
    var searchResults = searchObjects(keyword, searchFields, currentTargetList);
    renderCatalogs(searchResults);
}
// Hàm tìm kiếm
function searchObjects(keyword, fields, objectList) {
    keyword = keyword.toLowerCase();
    var results = objectList.filter(function (object) {
        // Kiểm tra các trường trong danh sách fields
        return fields.some(function (field) {
            // 
            var fieldValue = object[field].toLowerCase();

            // Tìm kiếm keyword trong fieldValue
            return fieldValue.includes(keyword);
        });
    });
    return results;
}

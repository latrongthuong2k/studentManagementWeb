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
        case STUDENT_TARGET:
            inputElement.placeholder = 'Nhập Id học sinh hoặc tên học sinh để tìm kiếm';
            searchFields = ["studentID", "Name"];
            sortField = 'studentID';
            break;
        case COURSE_TARGET:
            inputElement.placeholder = 'Nhập Id course hoặc tên course để tìm kiếm';
            searchFields = ["CourseId", "CourseName"];
            sortField = 'CourseId';
            break;
        case CLASS_TARGET:
            inputElement.placeholder = 'Nhập Id lớp hoặc tên lớp để tìm kiếm';
            searchFields = ["ClassId", "ClassName"];
            sortField = 'ClassId';
            break;
        case accountManager:
            inputElement.placeholder = 'Nhập email user để tìm kiếm';
            searchFields = ["email"];
            sortField = 'email';
            break;
        case DASHBOARD:
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
        renderCatalogsSearch(currentTargetList);
    }
    var searchResults = searchObjects(keyword, searchFields, currentTargetList);
    renderCatalogsSearch(searchResults);
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

function renderCatalogsSearch(renderList) {
    loadEmptyOrList();
    debugger
    if (renderList != []) {
        // target list truyền vào thì đã lấy dữ liệu từ local rồi 
        // TODO: cho hiển thị emptyPage
        var startIndex = (currentPage - 1) * catalogsPerPage;
        var endIndex = startIndex + catalogsPerPage;
        var catalogs = renderList.slice(startIndex, endIndex);
        var row = document.createElement('tr');

        // tbody
        var tBody = document.querySelector('#tableBody tbody');
        if (tBody == null) return;

        tBody.innerHTML = '';

        catalogs.forEach(function (catalog, index) {
            var row = document.createElement('tr');
            switch (currentTarget) {
                case COURSE_TARGET:
                    row.innerHTML = patternTbodyCourse(catalog, index);
                    break;
                case CLASS_TARGET:
                    row.innerHTML = patternTbodyClass(catalog, index);
                    break;
                case STUDENT_TARGET:
                    row.innerHTML = patternTbodyStudents(catalog, index);
                    break;
                case accountManager:
                    row.innerHTML = patternTbodyUser(catalog, index);
                    break;
            }
            tBody.appendChild(row);
        });
        //
        renderPaginationSearch(renderList);
    } else {
        debugger
    }

}

// render pagination ***
function renderPaginationSearch(renderList) {
    var startIndex = (currentPage - 1) * catalogsPerPage;
    var endIndex = startIndex + catalogsPerPage;
    var totalPages = Math.ceil(renderList.length / catalogsPerPage);
    var pagination = document.querySelector('#pagination');
    pagination.innerHTML = '';

    var startPage = Math.max(1, currentPage - 2);
    var endPage = Math.min(totalPages, startPage + 4);

    // Tạo nút '<<' (Trang đầu tiên)
    var firstButton = document.createElement("a");
    firstButton.href = "#";
    firstButton.innerHTML = "First";
    firstButton.style.fontSize = "14px";
    firstButton.style.fontWeight = "500";
    firstButton.disabled = currentPage === 1;
    firstButton.addEventListener("click", function (event) {
        event.preventDefault();
        currentPage = 1;
        renderCatalogs(renderList);
    });

    pagination.appendChild(firstButton);

    // Tạo nút '<' (Trang trước)
    var prevButton = document.createElement("a");
    prevButton.href = "#";
    prevButton.innerHTML = "Prev";
    prevButton.disabled = currentPage === 1;
    prevButton.addEventListener("click", function (event) {
        event.preventDefault();
        if (currentPage > 1) {
            currentPage--;
            renderCatalogs(renderList);
        }

    });
    pagination.appendChild(prevButton);

    for (var i = startPage; i <= endPage; i++) {
        var link = document.createElement("a");
        link.href = "#";
        link.textContent = i;
        if (i === currentPage) {
            link.classList.add("active");
        }
        link.addEventListener("click", function (event) {
            event.preventDefault();
            currentPage = parseInt(this.textContent);
            renderCatalogs(renderList);
        });
        pagination.appendChild(link);
    }

    // Tạo nút '>' (Trang kế tiếp)
    var nextButton = document.createElement("a");
    nextButton.href = "#";
    nextButton.innerHTML = "Next";
    nextButton.disabled = currentPage === totalPages;
    nextButton.addEventListener("click", function (event) {
        event.preventDefault();
        if (currentPage < totalPages && currentPage > 1) {
            currentPage++;
            renderCatalogs();
        }

    });
    pagination.appendChild(nextButton);

    // Tạo nút '>>' (Trang cuối cùng)
    var lastButton = document.createElement("a");
    lastButton.href = "#";
    lastButton.innerHTML = "Last";
    lastButton.style.fontSize = "14px";
    lastButton.style.fontWeight = "500";
    lastButton.disabled = currentPage === totalPages;
    lastButton.addEventListener("click", function (event) {
        event.preventDefault();
        currentPage = totalPages;
        renderCatalogs();
    });
    pagination.appendChild(lastButton);

    // Ẩn nút "First" và "Prev" nếu là trang đầu
    if (currentPage === 1) {
        // firstButton.style.display = 'none';
        prevButton.style.display = 'none';
        // prevButton.style.backgroundColor = 'rgb(196, 196, 196)';
    }

    // Ẩn nút "Next" và "Last" nếu là trang cuối
    if (currentPage === totalPages && currentPage > 1) {
        // nextButton.style.backgroundColor = 'rgb(196, 196, 196)';
        nextButton.style.display = 'none';
        // lastButton.style.display = 'none';
    }
}

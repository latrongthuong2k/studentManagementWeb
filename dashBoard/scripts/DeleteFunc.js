//  kiểm tra ID có tồn tại hay chưa và ghi đè 
function CheckExistToOverride(targetList, targetObj) {
    targetList.forEach((oldObj, index) => {
        switch (currentTarget) {
            case 'studentList':
                if (oldObj.studentID === targetObj.studentID) {
                    targetList[index] = targetObj;
                }
                break;
            case 'courseList':
                if (oldObj.CourseId === targetObj.CourseId) {
                    targetList[index] = targetObj;
                }
                break;
            case 'classList':
                if (oldObj.ClassId === targetObj.ClassId) {
                    targetList[index] = targetObj;
                }
                break;
            case 'userSystems':
                if (oldObj.email === targetObj.email) {
                    targetList[index] = targetObj;
                }
                break;
            case 'Dashboard':
                break;
        }
    });
    localStorage.setItem(currentTarget, JSON.stringify(targetList));
}
// xoá theo đối tượng list đã lọc
function findIndexAndDelete(listItems, targetId) {
    switch (currentTarget) {
        case 'studentList':
            var catalogIndex = listItems.findIndex(function (catalog) {
                return catalog.studentID === targetId;
            });
            if (catalogIndex != -1) {
                listItems.splice(catalogIndex, 1);
            } else {
                console.log('Danh mục không tồn tại.');
            }
            break;
        case 'courseList':
            var catalogIndex = listItems.findIndex(function (catalog) {
                return catalog.CourseId === targetId;
            });
            if (catalogIndex != -1) {
                listItems.splice(catalogIndex, 1);
            } else {
                console.log('Danh mục không tồn tại.');
            }
            break;
        case 'classList':
            var catalogIndex = listItems.findIndex(function (catalog) {
                return catalog.ClassId === targetId;
            });
            if (catalogIndex != -1) {
                listItems.splice(catalogIndex, 1);
            } else {
                console.log('Danh mục không tồn tại.');
            }
            break;
        case 'userSystems':
            var catalogIndex = listItems.findIndex(function (catalog) {
                return catalog.email === targetId;
            });
            if (catalogIndex != -1) {
                listItems.splice(catalogIndex, 1);
            } else {
                console.log('Danh mục không tồn tại.');
            }
            break;
        case 'DashBoard':
            break;
    }
    localStorage.setItem(currentTarget, JSON.stringify(listItems));
};


function deleteInfo(targetId) {
    document.getElementById('Yes').addEventListener('click', (e) => {
        var currentTargetList = JSON.parse(localStorage.getItem(currentTarget)) ? JSON.parse(localStorage.getItem(currentTarget)) : [];
        e.preventDefault();
        findIndexAndDelete(currentTargetList, targetId);
        renderCatalogs();
    })

}

// xoá theo đối tượng list đã lọc
function findIndexAndDelete(targetList, targetId) {
    managementList = JSON.parse(localStorage.getItem('managementList'));
    switch (currentTarget) {
        case COURSE_TARGET:
            var catalogIndex = targetList.findIndex(function (catalog) {
                return catalog.CourseId === targetId;
            });
            if (catalogIndex != -1) {
                targetList.splice(catalogIndex, 1);
                // courseList độc lập
                localStorage.setItem(currentTarget, JSON.stringify(targetList));
                // đẩy về courseList chính
                list = localStorage.getItem(COURSE_TARGET);
                managementList = list
                courseObj = list;
            }
            else {
                console.log('Danh mục không tồn tại.');
            }
            break;
        case CLASS_TARGET:
            var catalogIndex = targetList.findIndex(function (catalog) {
                return catalog.ClassId === targetId;
            });
            if (catalogIndex != -1) {
                targetList.splice(catalogIndex, 1);
                managementList.forEach(courseObj => {
                    if (courseObj.CourseId === targetList.CourseId) {
                        list = localStorage.getItem(CLASS_TARGET);
                        courseObj.Class = list;
                    }
                });
            } else {
                console.log('Danh mục không tồn tại.');
            }
            break;
        case STUDENT_TARGET:
            var catalogIndex = targetList.findIndex(function (catalog) {
                return catalog.studentID === targetId;
            });
            if (catalogIndex != -1) {
                targetList.splice(catalogIndex, 1);
                managementList.forEach(courseObj => {
                    if (courseObj.CourseId === targetList.CourseId) {
                        courseObj.forEach(classObj => {
                            if (classObj.ClassId == targetList.ClassId) {
                                list = localStorage.getItem(STUDENT_TARGET);
                                classObj = list;
                            }
                        });
                    }
                });
            } else {
                console.log('Danh mục không tồn tại.');
            }
            break;
        case accountManager:
            var catalogIndex = targetList.findIndex(function (catalog) {
                return catalog.email === targetId;
            });
            if (catalogIndex != -1) {
                targetList.splice(catalogIndex, 1);
            } else {
                console.log('Danh mục không tồn tại.');
            }
            break;
    }
    localStorage.setItem('managementList', JSON.stringify(managementList));
};


function deleteInfo(targetId) {
    document.getElementById('Yes').addEventListener('click', (e) => {
        var currentTargetList = JSON.parse(localStorage.getItem(currentTarget)) ? JSON.parse(localStorage.getItem(currentTarget)) : [];
        e.preventDefault();
        findIndexAndDelete(currentTargetList, targetId);
        renderCatalogs();
    })

}
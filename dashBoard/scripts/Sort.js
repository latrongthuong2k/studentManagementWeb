
function sortFunc(num = 1) {
    var currentTargetList = JSON.parse(localStorage.getItem(currentTarget)) ? JSON.parse(localStorage.getItem(currentTarget)) : [];
    let sortedList = sortList(currentTargetList, num);
    localStorage.setItem(currentTarget, JSON.stringify(sortedList));
    renderCatalogs();
};
// Hàm sắp xếp theo list
function sortList(list, sortOrder = 1) {
    list.sort(function (a, b) {
        var aId, bId;

        switch (currentTarget) {
            case STUDENT_TARGET:
                aId = a.studentID;
                bId = b.studentID;
                break;
            case COURSE_TARGET:
                aId = a.CourseId;
                bId = b.CourseId;
                break;
            case CLASS_TARGET:
                aId = a.ClassId;
                bId = b.ClassId;
                break;
            case accountManager:
                aId = a.email;
                bId = b.email;
                break;
        }

        function compare(a, b) {
            if (typeof a === 'string' && typeof b === 'string') {
                if (!isNaN(a) && !isNaN(b)) {
                    // Compare as numbers if both are numeric strings
                    return Number(a) - Number(b);
                } else {
                    // Compare as strings otherwise
                    return a.localeCompare(b);
                }
            } else {
                return a - b;
            }
        }

        return compare(aId, bId) * sortOrder;
    });


    return list;
}

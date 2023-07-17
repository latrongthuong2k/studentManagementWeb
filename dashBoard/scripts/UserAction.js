
function lockUser(targetId) {
    document.getElementById('Lock').addEventListener('click', (e) => {
        e.preventDefault();
        CheckExistToOverride(currentTargetList, patternObject);
        renderCatalogs();
    })
}
function lockAccountFunc() {

}
function findIndexAndDelete(listItems, targetId) {
    var catalogIndex = listItems.findIndex(function (catalog) {
        return catalog.email === targetId;
    });
    if (catalogIndex != -1) {
        listItems.splice(catalogIndex, 1);
    } else {
        console.log('Danh mục không tồn tại.');
    }
    localStorage.setItem(currentTarget, JSON.stringify(listItems));
}

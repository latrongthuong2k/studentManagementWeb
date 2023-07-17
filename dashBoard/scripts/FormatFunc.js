////////////////////////////////
// format cho số điện thoại
function formatNumber(target) {
    if (!target) {
        return;
    }
    const phoneNumber = target.value;
    const formattedNumber = formatPhoneNumber(phoneNumber);
    target.value = formattedNumber;

}
function formatPhoneNumber(phoneNumber) {
    const cleaned = phoneNumber.replace(/\D/g, '');

    const formatted = cleaned.slice(0, 2) + ' - ' + cleaned.slice(2, 6) + ' - ' + cleaned.slice(6);

    return formatted;
}
// format ngày sinh 
function formatBirthday(target) {
    if (!target) {
        return;
    }
    const birthDay = target.value;
    const formattedNumber = formatBirthdayNumber(birthDay);
    target.value = formattedNumber;
}
function formatBirthdayNumber(birthDay) {
    const cleaned = birthDay.replace(/\D/g, '');

    const formatted = cleaned.slice(0, 2) + ' / ' + cleaned.slice(2, 4) + ' / ' + cleaned.slice(4);

    return formatted;
}
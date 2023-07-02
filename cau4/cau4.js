function checkEmail(email) {
    // Biểu thức chính quy để kiểm tra định dạng email
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var emailInput = document.getElementById("email").value;
    var label = document.getElementById("lbl_thongbao");

    // Hiển thị kết quả
    if (re.test(emailInput)) {
        label.innerHTML = `<b>${emailInput}</b> là email hợp lệ`;
        label.style.color = "green";
        return true;
    } if (emailInput == "") {
        label.innerHTML = "Vui lòng nhập email";
        label.style.color = "red";
        return false;
    } 
    else {
        label.innerHTML = `<b>${emailInput}</b> là email không hợp lệ`;
        label.style.color = "red";
        return false;
    }
}
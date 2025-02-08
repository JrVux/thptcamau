document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (password !== confirmPassword) {
        document.getElementById('message').textContent = 'Mật khẩu không khớp!';
        return;
    }

    // Gửi dữ liệu đến server hoặc xử lý tại đây
    // Ví dụ: console.log({ name, email, password });

    document.getElementById('message').textContent = 'Đăng ký thành công!';
    document.getElementById('registrationForm').reset();
});

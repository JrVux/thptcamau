document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('registrationForm');
    const messageEl = document.getElementById('message');

    form.addEventListener('submit', async function (event) {
        event.preventDefault();

        const name = form.name.value.trim();
        const email = form.email.value.trim();
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;

        if (password !== confirmPassword) {
            messageEl.textContent = 'Mật khẩu không khớp!';
            messageEl.style.color = 'red';
            return;
        }

        try {
            const response = await fetch('https://script.google.com/macros/s/AKfycbyXiXs0gtP0i3h0D_qmqNWaJlWR3swjF79OpT6EtslgNP8NM-iuwVzTHMzHk8JPMEEG/exec', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, email, password })
            });

            const result = await response.json();

            if (response.ok) {
                messageEl.textContent = 'Đăng ký thành công!';
                messageEl.style.color = 'green';
                form.reset();
            } else {
                messageEl.textContent = result.message || 'Đăng ký thất bại!';
                messageEl.style.color = 'red';
            }
        } catch (error) {
            messageEl.textContent = 'Lỗi kết nối đến server!';
            messageEl.style.color = 'red';
        }
    });
});

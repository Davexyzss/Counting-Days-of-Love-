// Cài đặt ngày bắt đầu yêu nhau (Năm, Tháng - 1, Ngày, Giờ, Phút, Giây)
const startDate = new Date('2023-01-01T00:00:00');

function updateCounter() {
    const now = new Date();
    const difference = now - startDate;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / 1000 / 60) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    // Format thêm số 0 phía trước nếu dưới 10
    document.getElementById('days').innerText = days;
    document.getElementById('hours').innerText = hours.toString().padStart(2, '0');
    document.getElementById('minutes').innerText = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').innerText = seconds.toString().padStart(2, '0');
}

// Cập nhật mỗi giây
setInterval(updateCounter, 1000);
updateCounter();

// Logic đổi Theme và lưu vào LocalStorage
const themeBtns = document.querySelectorAll('.theme-btn');
const currentTheme = localStorage.getItem('theme') || 'pink';

// Hàm áp dụng theme
function applyTheme(themeName) {
    document.documentElement.setAttribute('data-theme', themeName);
    localStorage.setItem('theme', themeName);
    
    // Cập nhật trạng thái nút
    themeBtns.forEach(btn => {
        btn.classList.remove('active');
        if(btn.dataset.theme === themeName) {
            btn.classList.add('active');
        }
    });
}

// Áp dụng theme đã lưu khi load trang
applyTheme(currentTheme);

// Bắt sự kiện click đổi theme
themeBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        const theme = e.target.dataset.theme;
        applyTheme(theme);
    });
});

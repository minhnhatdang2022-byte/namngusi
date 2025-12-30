const cauChu = [
    "nốn lấm.",
    "mày bị ngu à",
    "con óc lợn",
    "chó ngu",
    "tốn thời gian ghê"
];

function xaChu() {
    // rung nhẹ màn hình
    document.body.classList.add("shake");
    setTimeout(() => document.body.classList.remove("shake"), 600);

    // mỗi lần bấm tạo 15 câu
    for (let i = 0; i < 15; i++) {
        taoChu();
    }
}

function taoChu() {
    const d = document.createElement("div");
    d.className = "hit";

    // nội dung ngẫu nhiên
    d.innerText = cauChu[Math.floor(Math.random() * cauChu.length)];

    // vị trí ngẫu nhiên
    d.style.left = Math.random() * (window.innerWidth - 150) + "px";
    d.style.top = Math.random() * (window.innerHeight - 50) + "px";

    // font size + màu ngẫu nhiên
    d.style.fontSize = (20 + Math.random() * 30) + "px";
    d.style.color = mauNgauNhien();

    document.body.appendChild(d);

    // hiển thị lâu đủ đọc
    setTimeout(() => {
        d.remove();
    }, 7000);
}

function mauNgauNhien() {
    const colors = ["red", "yellow", "lime", "orange", "cyan", "magenta"];
    return colors[Math.floor(Math.random() * colors.length)];
}

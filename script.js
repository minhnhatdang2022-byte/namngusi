const cauSatThuong = [
    "BẤM VÔ NGHĨA.",
    "LẠI LÀ BẠN À?",
    "TỐN THỜI GIAN GHÊ.",
    "BẤM HOÀI VẪN BẤM.",
    "KHÔNG HỌC ĐƯỢC GÌ À?",
    "ĐÂY LÀ VIỆC BẠN CHỌN SAO?",
    "RỒI CŨNG CHẲNG CÓ GÌ.",
    "TẬP TRUNG LÊN.",
    "BẠN ĐANG LÀM GÌ VẬY?",
    "THÊM MỘT LẦN NỮA."
];

function xaSatThuong() {
    // rung màn hình
    document.body.classList.add("shake");
    setTimeout(() => document.body.classList.remove("shake"), 700);

    // xả chữ nhiều hơn
    for (let i = 0; i < 30; i++) {
        taoHit();
    }
}

function taoHit() {
    const d = document.createElement("div");
    d.className = "hit";
    d.innerText = cauSatThuong[Math.floor(Math.random() * cauSatThuong.length)];

    d.style.left = Math.random() * window.innerWidth + "px";
    d.style.top = Math.random() * window.innerHeight + "px";
    d.style.fontSize = (18 + Math.random() * 28) + "px";
    d.style.color = mauManh();

    document.body.appendChild(d);

    setTimeout(() => d.remove(), 2200);
}

function mauManh() {
    const colors = ["#ff0000", "#ffea00", "#ff6a00", "#00ffcc", "#ff00ff"];
    return colors[Math.floor(Math.random() * colors.length)];
}

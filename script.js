const cauChu = [
    "BẤM VẬY ĐỂ LÀM GÌ?",
    "KHÔNG CÓ GÌ Ở ĐÂY CẢ.",
    "BẠN ĐANG LÃNG PHÍ THỜI GIAN.",
    "ĐỌC XONG CHƯA?",
    "RỒI SAO NỮA?",
    "VẪN CỐ BẤM.",
    "CHẲNG CÓ GÌ THAY ĐỔI.",
    "DỪNG LẠI ĐƯỢC RỒI."
];

let dangHien = false;

function xaChu() {
    // không cho spam chồng chữ
    if (dangHien) return;
    dangHien = true;

    // rung màn hình nhẹ
    document.body.classList.add("shake");
    setTimeout(() => document.body.classList.remove("shake"), 600);

    const d = document.createElement("div");
    d.className = "hit";
    d.innerText = cauChu[Math.floor(Math.random() * cauChu.length)];

    document.body.appendChild(d);

    // cho đọc đủ lâu
    setTimeout(() => {
        d.remove();
        dangHien = false;
    }, 5000);
}

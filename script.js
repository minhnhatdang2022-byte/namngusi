document.addEventListener("DOMContentLoaded", () => {
    const cauChu = [
        "nôn làm.",
        "mày bị ngu à",
        "con óc lợn",
        "chó ngu"
    ];

    const container = document.querySelector('.image-container');

    function taoChu() {
        const d = document.createElement('div');
        d.className = 'hit';
        d.innerText = cauChu[Math.floor(Math.random() * cauChu.length)];

        d.style.left = Math.random() * (window.innerWidth - 150) + "px";
        d.style.top = Math.random() * (window.innerHeight - 50) + "px";
        d.style.fontSize = (20 + Math.random() * 30) + "px";
        d.style.color = mauNgauNhien();

        container.appendChild(d);

        dragElement(d); // cho kéo được

        setTimeout(() => {
            d.remove();
        }, 10000);
    }

    function mauNgauNhien() {
        const colors = ["red", "yellow", "lime", "orange", "cyan", "magenta"];
        return colors[Math.floor(Math.random() * colors.length)];
    }

    setInterval(taoChu, 500); // mỗi 0.5s xuất hiện 1 chữ

    // kéo chữ bằng chuột/ngón tay
    function dragElement(el) {
        let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

        el.onpointerdown = dragMouseDown;

        function dragMouseDown(e) {
            e.preventDefault();
            pos3 = e.clientX;
            pos4 = e.clientY;
            document.onpointermove = elementDrag;
            document.onpointerup = closeDragElement;
        }

        function elementDrag(e) {
            e.preventDefault();
            pos1 = pos3 - e.clientX;
            pos2 = pos4 - e.clientY;
            pos3 = e.clientX;
            pos4 = e.clientY;
            el.style.top = (el.offsetTop - pos2) + "px";
            el.style.left = (el.offsetLeft - pos1) + "px";
        }

        function closeDragElement() {
            document.onpointerup = null;
            document.onpointermove = null;
        }
    }
});

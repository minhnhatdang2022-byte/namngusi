const text = document.getElementById("bigText");

text.addEventListener("mouseenter", () => {
    text.style.transform = "scale(1.1)";
});

text.addEventListener("mouseleave", () => {
    text.style.transform = "scale(1)";
});

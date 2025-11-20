document.addEventListener("DOMContentLoaded", function () {
    const title = document.getElementById("split-title");
    if (!title) return;
    const text = title.textContent.trim(); // Remove leading/trailing spaces
    title.textContent = "";
    text.split("").forEach((char, i) => {
        const span = document.createElement("span");
        span.textContent = char === " " ? "\u00A0" : char;
        span.className = "split-char";
        title.appendChild(span);
        setTimeout(() => {
            span.classList.add("visible");
        }, 100 + i * 40); // 100ms initial delay, 40ms per letter
    });
});

// Circular text bottom right logic
document.addEventListener('DOMContentLoaded', () => {
    const text = 'Developed by Laky ';
    const circleElement = document.getElementById('rotating-circle-br');
    if (circleElement) {
        const len = text.length;
        const angleIncrement = 360 / len;
        for (let i = 0; i < len; i++) {
            const char = text[i];
            const span = document.createElement('span');
            span.textContent = char;
            span.style.transform = `rotate(${i * angleIncrement}deg)`;
            if (char === ' ') {
                span.style.opacity = '0';
            }
            circleElement.appendChild(span);
        }
    }
});
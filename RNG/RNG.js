const generatebtn = document.getElementById('generatebtn');
const result = document.getElementById('result');

generatebtn.onclick = function () {
    let random = Math.floor(Math.random() * 6) + 1;
    result.textContent = random;
    
    result.style.animation = "none";
    result.offsetHeight; // reflow
    result.style.animation = "pop 0.4s ease";

};

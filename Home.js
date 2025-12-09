const buttonLeft = document.querySelectorAll('#left-button');
const buttonRight = document.querySelectorAll('#right-button');

console.log(buttonRight);

buttonRight.onclick = function () {
    document.getElementById('container').scrollLeft += 20;
};
buttonLeft.onclick = function () {
    document.getElementById('container').scrollLeft -= 20;
};
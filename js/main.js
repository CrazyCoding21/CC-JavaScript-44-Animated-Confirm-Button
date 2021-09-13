const container = document.querySelector('.container');
const button = document.getElementById('btn-confirm');
const mast = document.querySelector('.mast');
const sail1 = document.querySelector('.sail-1');
const sail2 = document.querySelector('.sail-2');
button.addEventListener("click", sail);

function sail(){
    button.innerText = "Let's Go!";
    button.style.setProperty("border-radius", "10px 10px 100px 100px");
    mast.style.setProperty("transform", " translate(170px, 48px) rotateZ(-0deg)");
    setTimeout(hoist, 500);
}

function hoist(){
    sail1.style.setProperty("transform", "translateX(16px) scaleY(1)");
    sail2.style.setProperty("transform", "translate(-104px, -145px) scaleY(1)");
    setTimeout(sailaway, 1000);
}

function sailaway(){
    container.style.setProperty("transform", "translateX(calc(100vw - 150px))");
}
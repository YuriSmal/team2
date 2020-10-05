let $titleAbout = document.getElementById('aboutus');
let $titleLearn = document.getElementById('learnmore');
let $titleSupport = document.getElementById('support');
// let $boxLearn = document.getElementById('box-1');
// let $boxAbout = document.getElementById('box-2');
// let $boxSupport = document.getElementById('box-3');



function showOne() {
    let x = document.getElementById('box-1');
    if (x.style.display === "none") {
        x.style.display = "flex";
    } else {
        x.style.display = "none";
    }
}

function showTwo() {
    let y = document.getElementById('box-2');
    if (y.style.display === "none") {
        y.style.display = "flex";
    } else {
        y.style.display = "none";
    }
}

function showThree() {
    let z = document.getElementById('box-3');
    if (z.style.display === "none") {
        z.style.display = "flex";
    } else {
        z.style.display = "none";
    }
}
let a = document.getElementById("stopButton");
let b = document.getElementById("readyButton");
let c = document.getElementById("goButton");
let d = document.getElementById("stopLight");
let e = document.getElementById("readyLight");
let f = document.getElementById("goLight");

function start() {
    a.style.backgroundColor = "#cf1124";
    d.style.backgroundColor = "#cf1124";

    b.style.backgroundColor = "#1f1d41";
    c.style.backgroundColor = "#1f1d41";
    e.style.backgroundColor = "#4b5069";
    f.style.backgroundColor = "#4b5069";
}

function ready() {
    b.style.backgroundColor = "#f7c948";
    e.style.backgroundColor = "#f7c948";

    c.style.backgroundColor = "#1f1d41";
    a.style.backgroundColor = "#1f1d41";
    d.style.backgroundColor = "#4b5069";
    f.style.backgroundColor = "#4b5069";
}

function go() {
    c.style.backgroundColor = "#199473";
    f.style.backgroundColor = "#199473";

    b.style.backgroundColor = "#1f1d41";
    a.style.backgroundColor = "#1f1d41";
    d.style.backgroundColor = "#4b5069";
    e.style.backgroundColor = "#4b5069";
}
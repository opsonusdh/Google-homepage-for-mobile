function search(){
    let x = document.getElementById("s").value;
    x.replace(" ","+")
    window.location.replace("https:\/\/www.google.com/search?q="+x);
}
function facebook() {
    window.location.replace("https:\/\/www.facebook.com");
}
function instagram() {
    window.location.replace("https:\/\/www.instagram.com");
}
function youtube() {
    window.location.replace("https:\/\/www.youtube.com");
}
function flipkart() {
    window.location.replace("https:\/\/www.flipkart.com");
}
function zomato() {
    window.location.replace("https:\/\/www.zomato.com");
}
function git() {
    window.location.replace("https:\/\/github.com");
}
function dh() {
    window.location.replace("https:\/\/m.dailyhunt.in");
}
function wiki() {
    window.location.replace("https:\/\/en.m.wikipedia.org");
}
function gpt() {
    window.location.replace("https:\/\/chatgpt.com");
}
function x() {
    window.location.replace("https:\/\/www.x.com");
}
function snap() {
    window.location.replace("https:/\/\gemini.google.com");
}

window.addEventListener("load", () => {
    const editable = document.getElementById("text");
    const savedContent = localStorage.getItem("TextFromGoogle");
    if (savedContent !== null) {
        editable.innerHTML = savedContent;
    }
    editable.addEventListener("input", () => {
    localStorage.setItem("TextFromGoogle", editable.innerHTML);
    });
});

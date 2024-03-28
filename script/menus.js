let b = 0;
const element = document.getElementById("menusBody");
function t() {
    b = (b+1)%2
    if (b===0) {
        element.classList.remove("extend");
    } else {
        element.classList.add("extend");
    }
}
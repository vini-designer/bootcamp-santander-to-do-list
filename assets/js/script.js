var toDo = document.getElementById("TODO")
var wrap = document.getElementById("wrapperList")

function addToDo () {
    console.log("teste");
    if (toDo.value != "") {
        wrap.insertAdjacentHTML("afterbegin", "<label class='container'><input type='checkbox'><span class='checkmark'></span><label>" + toDo.value + "</label></label>");
    }
}
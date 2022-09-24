function counter(element){
    var target = element.parentElement.querySelector("#count");
    var toNum = parseFloat(target.innerText);
    target.innerText = toNum + 1;
}
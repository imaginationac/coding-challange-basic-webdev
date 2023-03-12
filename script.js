let list = [];

let addToList = function(){
    list.push(list.length + 1);
}

let printToAlert = function(){
    window.alert(list);
}

// Challenge VI
button = document.querySelector("#challenge_vi_button");
button.addEventListener("click", printToAlert);

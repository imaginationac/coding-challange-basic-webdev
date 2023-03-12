let list = [];

let addToList = function(){
    let item = document.querySelector("#listItem").value;
    list.push(item);
}

let printToAlert = function(){
    window.alert(list);
}

// Challenge VI
button = document.querySelector("#challenge_vi_button");
button.addEventListener("click", printToAlert);

// Challenge VII
listButton = document.querySelector("#challenge_vii_button");
listButton.addEventListener("click", addToList);

let list = [];

let addToList = function(){
    let item = document.querySelector("#listItem").value;
    list.push(item);
}

let printToAlert = function(){
    window.alert(list);
}

let printToToast = function(){
    // Create toast message component
    // This should be at a minumum, a box, with a button that says dimiss or is an X.
    let toast = document.createElement("div");
    toast.setAttribute("class", "toast");
    // Populate text content.
    toast.textContent = list;
    let dismissButton = document.createElement("button");
    dismissButton.textContent = "Dismiss";
    toast.appendChild(dismissButton);
    // Attach to DOM
    document.body.appendChild(toast);

    // Set a timeout of 5 seconds after which the toast message will self dismiss.
    setTimeout(removeToast, 5000, toast);

    // Add event listener to the dimiss button to remove the toast.
    dismissButton.addEventListener("click", function (){ removeToast (toast)});
}

let removeToast = function(toast){
    if(toast){
        toast.remove();
    }
}
// Challenge VI
button = document.querySelector("#challenge_vi_button");
//button.addEventListener("click", printToAlert);
button.addEventListener("click", printToToast);

// Challenge VII
listButton = document.querySelector("#challenge_vii_button");
listButton.addEventListener("click", addToList);

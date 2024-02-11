const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");

button.addEventListener("click", () => {
    if (input.value != "") {
        let li = document.createElement("li");
        li.textContent = input.value;

        let delButton = document.createElement("button");
        delButton.textContent = "X";
        delButton.setAttribute("aria-label", "Remove Scripture");

        li.append(delButton);
        list.append(li);
        input.value = "";
        input.focus();
        delButton.addEventListener("click", () => {
            list.removeChild(li);
            input.focus();
        });
        window.alert("scripture added succesfully");
    }
    else {
        window.alert("please enter your favorite scripture")
    }

})
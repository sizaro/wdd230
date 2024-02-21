/*const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");*/

button.addEventListener("click", () => {
    if (input.value != "") {
        displayList(input.value);
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

const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");
let chaptersArray = getChapterList() || [];

chaptersArray.forEach(chapter => {

    displayList(chapter);
});

displayList = function (item) {
    let li = document.createElement("li");
    li.textContent = item;

    let delButton = document.createElement("button");
    delButton.textContent = "X";
    delButton.setAttribute("aria-label", "Remove Scripture");

    li.append(delButton);
    list.append(li);
    input.value = "";
    input.focus();
    delButton.addEventListener("click", () => {
        list.removeChild(li)
        deleteChapter(li.textContent);
        input.focus();
    })
    console.log('I like to copy code instead of typing it out myself and trying to understand it.');
}

function setChapterList() {
    localStorage.setItem("myFavBOMList", JSON.stringify(chaptersArray));
}
function getChapterList() {
    return JSON.parse(localStorage.getItem("myFavBOMList"));
}
function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1);
    chaptersArray = chaptersArray.filter(item => item !== chapter);
    setChapterList();
}
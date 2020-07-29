/* Scrolling variables */

let startscrollone = document.getElementById("btnone");
let startscrolltwo = document.getElementById("btntwo");
let startscrollthree = document.getElementById("btnthree");
let startscrollfour = document.getElementById("btnfour");
let into = document.getElementById("contactspage");

/* Scrolling methods */

 startscrollone.addEventListener("click", function () {
     into.scrollIntoView({behavior:"smooth"});
 });

 startscrolltwo.addEventListener("click", function () {
     into.scrollIntoView({behavior:"smooth"});
 });

 startscrollthree.addEventListener("click", function () {
     into.scrollIntoView({behavior:"smooth"});
 });

 startscrollfour.addEventListener("click", function () {
     into.scrollIntoView({behavior:"smooth"});
 });

/*Validation func + Time + others*/

let typeName = document.getElementById("typeName");

let typeComment = document.getElementById("typeComment");

let btnSend = document.getElementById("btnSend");

let pasteHere = document.getElementById("pasteHere");

let editBtn = "Edit";

let saveBtn = "Save";

let comments = [];

loadComments();

btnSend.addEventListener("click", function(e){
    e.preventDefault();

    if (typeName.value === ""){
        document.getElementById("typeName").style.border = "3px solid red";
        document.getElementById("btnSend").style.animation = "rotate 0.7s ease-in-out both";
    }

    if (typeName.value != ""){
        document.getElementById("typeName").style.border = "";
    }

    if (typeComment.value === ""){
        document.getElementById("typeComment").style.border = "3px solid red";
        document.getElementById("btnSend").style.animation = "rotate 0.7s ease-in-out both";
    }

    if (typeComment.value != ""){
        document.getElementById("typeComment").style.border = "";
    }

    if (typeName.value === "" || typeComment.value === ""){
        document.getElementById("btnSend").style.animation = "rotate 0.7s ease-in-out both";
    }

    else {

    let today = new Date();

    let date = today.getDate();
    let month = today.getMonth() + 1;
    let year = today.getFullYear();

    let hour = today.getHours();
    let minute = today.getMinutes();

    if (date < 10) {
         date = '0' + date;
    }

    if (month < 10) {
         month = '0' + month;
    }

    if (hour < 10) {
         hour = '0' + hour;
    }

    if (minute < 10) {
         minute = '0' + minute;
    }

    let currentDateAndTime = date + ":" + month + ":" + year + ":" + "\n" + hour + ":" + minute;

    let comment = {
        id : Math.round(Math.random() * 100000, 0),
        time : currentDateAndTime,
        name : typeName.value,
        text : typeComment.value,
        edit1 : editBtn,
        save1 : saveBtn
    }

    comments.push(comment);

    saveComments();
    showComments(comment.id);
    typeName.value = "";
    typeComment.value = "";

    }

});

function saveComments(){
    localStorage.setItem("comments", JSON.stringify(comments));
}

function showComments(commentId){
    let blockDiv = document.createElement("div");
    blockDiv.setAttribute("id", commentId);

    let newDiv0 = document.createElement("div");
    newDiv0.innerHTML = comments[comments.length-1].time;
    blockDiv.appendChild(newDiv0);

    let newDiv = document.createElement("div");
    newDiv.classList.add("className");
    newDiv.innerHTML = comments[comments.length-1].name;
    blockDiv.appendChild(newDiv);

    let newDiv1 = document.createElement("div");
    newDiv1.classList.add("classComment");
    newDiv1.innerHTML = comments[comments.length-1].text;
    blockDiv.appendChild(newDiv1);

    let newDiv2 = document.createElement("div");
    newDiv2.classList.add("editSave");

    let aTagEdit = document.createElement("a");
    aTagEdit.classList.add("editButton");
    aTagEdit.href="";
    aTagEdit.style.color = "red";

    aTagEdit.innerHTML = comments[comments.length-1].edit1;
    newDiv2.appendChild(aTagEdit);

    let spaceTextNode = document.createTextNode("\n|\n");
    newDiv2.appendChild(spaceTextNode);

    let aTagSave = document.createElement("a");
    aTagSave.classList.add("saveButton");
    aTagSave.href="";
    aTagSave.style.color = "red";

    aTagSave.innerHTML = comments[comments.length-1].save1;
    newDiv2.appendChild(aTagSave);

    blockDiv.appendChild(newDiv2);

    let br = document.createElement("br");
    blockDiv.appendChild(br);

    pasteHere.appendChild(blockDiv);

}

function loadComments(){
    comments = JSON.parse(localStorage.getItem("comments"));

    if (comments === null){
         comments = [];
    }

    comments.forEach(function(item){
        let blockDiv = document.createElement("div");
        blockDiv.setAttribute("id", item.id);

        let newDiv0 = document.createElement("div");
        newDiv0.innerHTML = item.time;
        blockDiv.appendChild(newDiv0);

        let newDiv = document.createElement("div");
        newDiv.classList.add("className");
        newDiv.innerHTML = item.name;
        blockDiv.appendChild(newDiv);

        let newDiv1 = document.createElement("div");
        newDiv1.classList.add("classComment");
        newDiv1.innerHTML = item.text;
        blockDiv.appendChild(newDiv1);

        let newDiv2 = document.createElement("div");
        newDiv2.classList.add("editSave");

        let aTagEdit = document.createElement("a");
        aTagEdit.classList.add("editButton");
        aTagEdit.href="";
        aTagEdit.style.color = "red";

        aTagEdit.innerHTML = item.edit1;
        newDiv2.appendChild(aTagEdit);

        let spaceTextNode = document.createTextNode("\n|\n");
        newDiv2.appendChild(spaceTextNode);

        let aTagSave = document.createElement("a");
        aTagSave.classList.add("saveButton");
        aTagSave.href="";
        aTagSave.style.color = "red";

        aTagSave.innerHTML = item.save1;
        newDiv2.appendChild(aTagSave);

        blockDiv.appendChild(newDiv2);

        let br = document.createElement("br");
        blockDiv.appendChild(br);

        pasteHere.appendChild(blockDiv);

    });
}

let editBtnOnClick = document.querySelectorAll(".editButton");

editBtnOnClick.forEach(function(btn){
    btn.addEventListener("click", function(e){
    e.preventDefault();

    let x = e.target.parentElement;
    let nameValue = x.previousElementSibling.previousElementSibling;
    let commentValue = x.previousElementSibling;

    let nameTextInside = nameValue.textContent;
    let commentTextInside = commentValue.textContent;

    let createInput1 = document.createElement("input");
    createInput1.classList.add("inputOne");
    createInput1.value = nameTextInside;
    createInput1.style.border = "1px solid #696b70";
    createInput1.style.marginBottom = "5px";
    createInput1.style.width = "100%";
    nameValue.textContent = "";
    nameValue.appendChild(createInput1);

    let createInput2 = document.createElement("input");
    createInput2.classList.add("inputTwo");
    createInput2.value = commentTextInside;
    createInput2.style.border = "1px solid #696b70";
    createInput2.style.width = "100%";
    commentValue.textContent = "";
    commentValue.appendChild(createInput2);
    });
});

let saveBtnOnClick = document.querySelectorAll(".saveButton");

saveBtnOnClick.forEach(function(btn){
    btn.addEventListener("click", function(e){
        e.preventDefault();

        let x = e.target.parentElement;
        let nameValue = x.previousElementSibling.previousElementSibling;
        let commentValue = x.previousSibling;
        let traverseInputName = nameValue.children[0];
        let traverseInputComment = commentValue.children[0];

        let traverseInputValueName = traverseInputName.value;
        let nameCreateTextNode = document.createTextNode(traverseInputValueName);
        nameValue.appendChild(nameCreateTextNode);
        nameValue.removeChild(traverseInputName);

        let traverseInputValueComment = traverseInputComment.value;
        let commentCreateTextNode = document.createTextNode(traverseInputValueComment);
        commentValue.appendChild(commentCreateTextNode);
        commentValue.removeChild(traverseInputComment);

        let parentSaveEdit = e.target.parentElement;
        let parentForId = parentSaveEdit.parentElement.id;

        let idx = comments.findIndex(function(item){
            return item.id == parentForId;
        });

        comments[idx].name = traverseInputValueName;

        comments[idx].text = traverseInputValueComment;

        saveComments();

    });
});





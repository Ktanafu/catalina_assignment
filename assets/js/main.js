// Function to create new list item
function addItem(){
    var myList = document.getElementById("list");
    var newListItem = document.createElement("li");
    var itemText = document.getElementById("newInput").value;
    var listText = document.createTextNode(itemText);
    // If input is empty an alert is created
    newListItem.appendChild(listText);
    if (itemText === "") {
        alert("Please enter your idea first");
    } else {
        myList.appendChild(newListItem);
    }
};

// Clear input text
function clearText(){
    var itemText = document.getElementById("newInput");
    itemText.value = "";
};


var addButton = document.getElementById("createNew");
addButton.addEventListener("click", function(){
    addItem(); 
    clearText();
});
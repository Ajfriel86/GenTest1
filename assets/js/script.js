// This function is called 'changeOrder' and it takes 2 parameters: 
// parentId: This represents the the elements of the parent whose children can be rearranged
// newOrder: This represents the the array which will specify the new order
function changeOrder(parentId, newOrder) {
    //The next line, var parent, retrieves the DOM element with the ID specified by the parentId parameter and stores it in the variable parent
    // This element is the container whose children will be rearranged
    var parent = document.getElementById(parentId);
    // The next line, var children, initializes an empty array named children to store references to the child elements of the parent
    var children = [];

    // The for loop will iterate over each element in the newOrder array
    // The loop initializes a counter i to 0, and it continues as long as i is less than the length of the newOrder array
    // After each iteration, the counter i is incremented by 1
    for (var i = 0; i < newOrder.length; i++) {
        // This line retrieves a child element from the DOM using the ID specified in the current position of the newOrder array
        var child = document.getElementById(newOrder[i]);
        // After obtaining the reference to the child element, the code pushes that element to the children array
        children.push(child);
    }

    // This section, children.forEach, uses a forEach method to iterate over elements of the children array
    // This section, (function (child), defines an anonymous function that takes the parameter, child. This function will be executed for each element in the children array
    children.forEach(function (child) {
        // This section, parent.removeChild(child), removes the specified child element from its parent
        // The removeChild method is a DOM method used to remove a child node from its parent
        parent.removeChild(child);
    });

    // This section, children.forEach, uses a forEach method to iterate over elements of the children array.
    // This section, (function (child), defines an anonymous function that takes the parameter, child. This function will be executed for each element in the children array
    children.forEach(function (child) {
        // This line appends/adds the specified child element to the end of the list of children of the parent element
        // The appendChild method is a DOM method used to add a child node to the end of the list of children of a specified parent node
        parent.appendChild(child);
    });
}

// This section, document.getElementById("fix"), retrieves the DOM element with the ID "fix" 
// It then uses the getElementById method, which  returns a reference to the element with the specified ID
// This section, addEventListener("click", function (), adds an event listener to the selected element ("fix") 
// It listens for the "click" event, and when that event occurs, it executes the provided function
document.getElementById("fix").addEventListener("click", function () {
    // This section, calls the changeOrder function
    // It specifies the ID of the parent element as "box" and provides a new order for the child elements as ["t1", "i1", "b1"].
    changeOrder("box", ["t1", "i1", "b1"]);
});
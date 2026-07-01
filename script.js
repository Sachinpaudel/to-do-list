// function addTodo(){
//     const inputElement = document.querySelector("input");
//     const value = inputElement.value;
//     console.log(value);
// }

// -------------------------------------------------------------------------------------------------

//     let ctr = 0;
// function callback(){
// const el = document.querySelector("h1");
// el.innerHTML = ctr;
//     console.log(ctr);
//     // ctr = ctr + 1;
// }

// setInterval(callback, 1000);

// ----------------------------------------------------------------------------------------------

    function addTodo() {
    const inputEl = document.querySelector("input");
    const value = inputEl.value;

    const newDivEl = document.createElement("div");
    newDivEl.textContent = value;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";

    deleteBtn.onclick = function () {
        newDivEl.remove();
    };

    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";

    editBtn.onclick = function () {
        const newValue = prompt("Enter new value:", newDivEl.firstChild.textContent);

        if (newValue !== null) {
            newDivEl.firstChild.textContent = newValue;
        }
        else{
            alert("Edit cancelled.");
        }
    };

    newDivEl.appendChild(deleteBtn);
    newDivEl.appendChild(editBtn);

    document.body.appendChild(newDivEl);

    inputEl.value = "";

   
}






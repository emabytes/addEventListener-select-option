// lev 1_6

//with this keyword you can't use arrow function 🔥 

let optionList = document.getElementById("my-select");
optionList.addEventListener("change", function() {
    document.getElementById("option-selected").innerHTML = `Sie haben ausgewählt ${this.value}`
})





// another way with onchange in html 🔥 

// function changeText() {
//     let optionList = document.getElementById("my-select")
//     let selected = optionList.options[optionList.selectedIndex].value;
//     document.getElementById("option-selected").innerHTML = `Sie haben ausgewählt ${selected}`
// }


//another way with arrow function 🔥 

// let optionList = document.getElementById("my-select");
// optionList.addEventListener("change", (event) => changeText(event))

// let changeText = (event) => {
//     document.getElementById("option-selected").innerHTML = `Sie haben ausgewählt ${optionList.value}`
// }

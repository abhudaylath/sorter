// DOM Elements
const arraySizeInput = document.getElementById('a_size');
const generateArrayButton = document.getElementById('a_generate');
const speedInput = document.getElementById('a_speed');
const algoButtons = document.querySelectorAll(".algos button");
const arrayContainer = document.getElementById("array_container");

//variables
let arraySize = arraySizeInput.value;
let array = [];
let divElements = [];
let divSizes = [];
let marginSize;
arrayContainer.style = "flex-direction:row";


//generate Array
function generateArray() {
    arrayContainer.innerHTML = "";
    array = Array.from({ length: arraySize }, (_, i) => i + 1);
    array = array.sort(() => Math.random() - 0.5);

    for (let i = 0; i < arraySize; i++) {
        divSizes[i] = array[i];
        divElements[i] = document.createElement("div");
        marginSize = 0.1;
        divElements[i].style = `
            margin:0% ${marginSize}%;
            background-color:blue;
            width:${100 / arraySize - 2 * marginSize}%;
            height:${divSizes[i]}%;
        `;
        arrayContainer.appendChild(divElements[i]);
    }
}


//event listners
generateArrayButton.addEventListener("click", generateArray);
arraySizeInput.addEventListener("input", () => {
    arraySize = arraySizeInput.value;
    generateArray();
});

window.onload = generateArray;

//buttons
algoButtons.forEach(button => {
    button.addEventListener("click", () => {
        disableButtons();
        button.classList.add("butt_selected");
        //console.log(button.innerHTML);
        
        switch (button.innerHTML) {
            case "Bubble": BubbleSort(); break;
            case "Heap": HeapSort(); break;
            case "Insertion": InsertionSort(); break;
            case "Merge": MergeSort(); break;
            case "Quick": QuickSort(); break;
            case "Selection": SelectionSort(); break;
        }
    })
})

function disableButtons() {
    algoButtons.forEach(button => {
        button.disabled = true;
        button.classList = [];
        button.classList.add("butt_locked")
    })
    generateArrayButton.disabled = true;
    speedInput.disabled = true;
    arraySizeInput.disabled = true;
}

function enableButtons() {
    window.setTimeout(function(){
    algoButtons.forEach(button => {
        button.disabled = false;
        button.classList = [];
        button.classList.add("butt_unselected")
    })
    generateArrayButton.disabled = false;
    speedInput.disabled = false;
    arraySizeInput.disabled = false;
},c_delay+=delay_time);
}

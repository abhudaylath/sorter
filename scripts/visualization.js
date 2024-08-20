let delay_time = 1000 / (arraySizeInput.value * speedInput.value); 
let c_delay = 0; 


function div_update(div1, div2, height1, height2, color) {
    setTimeout(() => {
        div1.style.height = `${height1}%`;
        div2.style.height = `${height2}%`;
        div1.style.backgroundColor = color;
        div2.style.backgroundColor = color;
    }, c_delay += delay_time);
}

speedInput.addEventListener("input", () => {
    delay_time = 1000 / (arraySizeInput.value * speedInput.value);
});

const colors = {
    comparison: "yellow",
    swap: "red",
    sorted: "green",
    default: "blue",
};
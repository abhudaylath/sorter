function BubbleSort() {
    
    document.getElementById("Time_Worst").innerText="O(N^2)";
    document.getElementById("Time_Average").innerText="Θ(N^2)";
    document.getElementById("Time_Best").innerText="Ω(N)";

    document.getElementById("Space_Worst").innerText="O(1)";
    c_delay=0;
    for (var i = 0; i < arraySize - 1; i++) {
        for (var j = 0; j < arraySize - i - 1; j++) {
            div_update(divElements[j], divElements[j + 1], divSizes[j], divSizes[j + 1], colors.comparison);

            if (divSizes[j] > divSizes[j + 1]) {
                div_update(divElements[j], divElements[j + 1], divSizes[j + 1], divSizes[j], colors.swap);

                let temp = divSizes[j];
                divSizes[j] = divSizes[j + 1];
                divSizes[j + 1] = temp;

                div_update(divElements[j], divElements[j + 1], divSizes[j], divSizes[j + 1], colors.swap);
            }
            div_update(divElements[j], divElements[j + 1], divSizes[j], divSizes[j + 1], colors.default);
        }
        div_update(divElements[j], divElements[j], divSizes[j], divSizes[j], colors.sorted);
    }
    div_update(divElements[0], divElements[0], divSizes[0], divSizes[0], colors.sorted);

    enableButtons();
}
function InsertionSort() {
    document.getElementById("Time_Worst").innerHTML = "O(N^2)";
    document.getElementById("Time_Average").innerText = "Θ(N^2)";
    document.getElementById("Time_Best").innerHTML = "O(N)";
    document.getElementById("Space_Worst").innerHTML = "O(1)";
    c_delay = 0;
    for (var i = 1; i < arraySize; i++) {
        div_update(divElements[i], divElements[i], divSizes[i], divSizes[i], colors.comparisons);
        var key = divSizes[i];
        for (var j = i - 1; j >= 0 && divSizes[j] > key; j--) {
            div_update(divElements[j], divElements[j + 1], divSizes[j], divSizes[j + 1], colors.swap);
            divSizes[j + 1] = divSizes[j];
            div_update(divElements[j], divElements[j + 1], divSizes[j], divSizes[j + 1], colors.swap);
            div_update(divElements[j + 1], divElements[j], divSizes[j + 1], divSizes[j], colors.default);
        }
        divSizes[j + 1] = key;
        for (var t = 0; t <= i; t++) {
            div_update(divElements[t], divElements[t], divSizes[t], divSizes[t], colors.sorted);
        }
    }
    enableButtons();
}
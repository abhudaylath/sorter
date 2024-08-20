function partition(start, end) {
    var pivotValue = divSizes[start]
    var i = start + 1
    div_update(divElements[start], divElements[start], divSizes[start], divSizes[start], colors.comparisons);
    for (var j = start + 1; j <= end; j++) {
        if (divSizes[j] < pivotValue) {
            div_update(divElements[j], divElements[j], divSizes[j], divSizes[j], colors.comparisons);
            div_update(divElements[i], divElements[j], divSizes[i], divSizes[j], colors.swap);
            var temp = divSizes[i];
            divSizes[i] = divSizes[j];
            divSizes[j] = temp;
            div_update(divElements[i], divElements[j], divSizes[i], divSizes[j], colors.swap);
            div_update(divElements[i], divElements[j], divSizes[i], divSizes[j], colors.default);
            i++;
        }
    }
    div_update(divElements[start], divElements[i - 1], divSizes[start], divSizes[i - 1], colors.swap);
    var temp = divSizes[i - 1];
    divSizes[i - 1] = divSizes[start];
    divSizes[start] = temp;
    div_update(divElements[start], divElements[i - 1], divSizes[start], divSizes[i - 1], colors.default);
    for (var t = start; t <= i; t++) {
        div_update(divElements[t], divElements[t], divSizes[t], divSizes[t], colors.sorted)
    }
    return i - 1;
}

function Sort(start, end) {
    if (start >= end) return;
    var pivotIndex = partition(start, end);
    Sort(start, pivotIndex - 1);
    Sort(pivotIndex + 1, end);
}

function QuickSort() {
    document.getElementById("Time_Worst").innerHTML = "O(N^2)";
    document.getElementById("Time_Best").innerHTML = "O(NLOG(N))";
    document.getElementById("Time_Average").innerHTML = "O(NLOG(N))";
    document.getElementById("Space_Worst").innerHTML = "O(LOG(N))";
    c_delay = 0;
    Sort(0, divSizes.length - 1);
    enableButtons();
}
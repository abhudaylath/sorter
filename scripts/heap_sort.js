function heapify(i, n) {
    var large = i;
    var l = 2 * i + 1;
    var r = 2 * i + 2;
    
    if (l < n && divSizes[l] > divSizes[large]) {
        large = l;
    }

    if (r < n && divSizes[r] > divSizes[large]) {
        large = r;
    }

    if (large != i) {
        div_update(divElements[i], divElements[large], divSizes[i], divSizes[large], colors.swap);
        div_update(divElements[i], divElements[large], divSizes[i], divSizes[large], colors.default);

        var temp = divSizes[large];
        divSizes[large] = divSizes[i];
        divSizes[i] = temp;

        heapify(large, n);
    }
}

function Heap() {
    for (var i = Math.floor(arraySize / 2) - 1; i >= 0; i--) {
        heapify(i, arraySize);
    }

    for (var i = arraySize - 1; i > 0; i--) {
        div_update(divElements[i], divElements[0], divSizes[i], divSizes[0], colors.swap);
        div_update(divElements[i], divElements[0], divSizes[i], divSizes[0], colors.default);

        var temp = divSizes[0];
        divSizes[0] = divSizes[i];
        divSizes[i] = temp;
        heapify(0, i);
        div_update(divElements[i], divElements[i], divSizes[i], divSizes[i], colors.sorted);
    }
    div_update(divElements[i], divElements[i], divSizes[i], divSizes[i], colors.sorted);
}

function HeapSort() {
    document.getElementById("Time_Worst").innerHTML = "O(Nlog(N))";
    document.getElementById("Time_Best").innerHTML = "O(Nlog(N))";
    document.getElementById("Time_Average").innerHTML = "O(Nlog(N))";
    document.getElementById("Space_Worst").innerHTML = "O(1)";
    c_delay=0;
    Heap();
    enableButtons();
}

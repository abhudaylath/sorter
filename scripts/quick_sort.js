function quick_partition(start, end) {
    var i = start + 1;
    var piv = divSizes[start];
    div_update(divElements[start], divElements[start], divSizes[start], divSizes[start], "yellow");//Color update

    for (var j = start + 1; j <= end; j++) {
        if (divSizes[j] < piv) {
            div_update(divElements[j], divElements[j], divSizes[j], divSizes[j], "yellow");//Color update

            div_update(divElements[i], divElements[j], divSizes[i], divSizes[j], "red");//Color update
            
            var temp = divSizes[i];
            divSizes[i] = divSizes[j];
            divSizes[j] = temp;

            div_update(divElements[i], divElements[j], divSizes[i], divSizes[j], "red");//Height update
            
            div_update(divElements[i], divElements[j], divSizes[i], divSizes[j], "blue");//Height update
            
            i += 1;
        }
    }
    div_update(divElements[start], divElements[i - 1], divSizes[start], divSizes[i - 1], "red");//Color update
    
    var temp = divSizes[start];//put the pivot element in its proper place.
    divSizes[start] = divSizes[i - 1];
    divSizes[i - 1] = temp;

    div_update(divElements[start], divElements[i - 1], divSizes[start], divSizes[i - 1], "red");//Height update
    
    for (var t = start; t <= i; t++) {
        div_update(divElements[t], divElements[t], divSizes[t], divSizes[t], "green");//Color update
    }

    return i - 1;
}

function quick_sort(start, end) {
    if (start < end) {
        var piv_pos = quick_partition(start, end);
        quick_sort(start, piv_pos - 1);
        quick_sort(piv_pos + 1, end);
    }
}

function QuickSort() {
    document.getElementById("Time_Worst").innerText = "O(N^2)";
    document.getElementById("Time_Average").innerText = "Θ(N log N)";
    document.getElementById("Time_Best").innerText = "Ω(N log N)";

    document.getElementById("Space_Worst").innerText = "O(log N)";

    c_delay = 0;

    quick_sort(0, divSizes.length - 1);

    enableButtons();
}
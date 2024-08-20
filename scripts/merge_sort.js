function Merge(left, mid, right) {
    var n1 = mid - left + 1;
    var n2 = right - mid;
    var L = new Array(n1), R = new Array(n2);
    
    for (var i = 0; i < n1; i++)
        L[i] = divSizes[left + i];
    for (var j = 0; j < n2; j++)
        R[j] = divSizes[mid + 1 + j];

    var i = 0, j = 0, k = left;

    while (i < n1 && j < n2) {
        if (L[i] <= R[j]) {
            divSizes[k] = L[i];
            div_update(divElements[k], divElements[k], divSizes[k], L[i], colors.sorted);
            i++;
        } else {
            divSizes[k] = R[j];
            div_update(divElements[k], divElements[k], divSizes[k], R[j], colors.sorted);
            j++;
        }
        k++;
    }

    while (i < n1) {
        divSizes[k] = L[i];
        div_update(divElements[k], divElements[k], divSizes[k], L[i], colors.sorted);
        i++;
        k++;
    }

    while (j < n2) {
        divSizes[k] = R[j];
        div_update(divElements[k], divElements[k], divSizes[k], R[j], colors.sorted);
        j++;
        k++;
    }
}

function Sort(left, right) {
    if (left >= right) {
        return;
    }

    var mid = Math.floor((left + right) / 2);

    Sort(left, mid);
    Sort(mid + 1, right);

    Merge(left, mid, right);
}

function MergeSort() {
    document.getElementById("Time_Worst").innerHTML = "O(NLOG(N))";
    document.getElementById("Time_Best").innerHTML = "O(NLOG(N))";
    document.getElementById("Time_Average").innerHTML = "O(NLOG(N))";
    document.getElementById("Space_Worst").innerHTML = "O(N)";

    c_delay = 0;

    Sort(0, divSizes.length - 1);

    enableButtons();
}

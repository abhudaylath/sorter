function SelectionSort(){
    document.getElementById("Time_Worst").innerHTML = "O(N^2)";
    document.getElementById("Time_Best").innerHTML = "O(N^2)";
    document.getElementById("Time_Average").innerHTML = "O(N^2)";
    document.getElementById("Space_Worst").innerHTML = "O(1)";
    c_delay = 0;
    for(var i=0; i<arraySize;i++){
        var ind =i;
        for(var j=i+1; j<arraySize;j++){
            div_update(divElements[ind],divElements[j],divSizes[ind],divSizes[j],colors.comparison);
            div_update(divElements[ind],divElements[j],divSizes[ind],divSizes[j],colors.default);
            if(divSizes[ind]>divSizes[j]){
                ind = j;
            }
        }
        if(ind!=i){
            div_update(divElements[i],divElements[ind],divSizes[i],divSizes[ind],colors.swap);
            var temp = divSizes[i];
            divSizes[i] = divSizes[ind];
            divSizes[ind] = temp;
            div_update(divElements[ind],divElements[i],divSizes[ind],divSizes[i],colors.default);
        }
        div_update(divElements[i],divElements[i],divSizes[i],divSizes[i],colors.sorted);
    }
    div_update(divElements[i],divElements[i],divSizes[i],divSizes[i],colors.sorted);
    enableButtons();
}
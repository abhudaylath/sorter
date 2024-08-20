function merge_sort(start,mid,end)
{
    var p=start,q=mid+1;

    var Arr=[],k=0;

    for(var i=start; i<=end; i++)
    {
        if(p>mid)
        {
            Arr[k++]=divSizes[q++];
            div_update(divElements[q-1],divElements[q-1],divSizes[q-1],divSizes[q-1],colors.comparison);//Color update
        }
        else if(q>end)
        {
            Arr[k++]=divSizes[p++];
            div_update(divElements[p-1],divElements[p-1],divSizes[p-1],divSizes[p-1],colors.comparison);//Color update
        }
        else if(divSizes[p]<divSizes[q])
        {
            Arr[k++]=divSizes[p++];
            div_update(divElements[p-1],divElements[p-1],divSizes[p-1],divSizes[p-1],colors.comparison);//Color update
        }
        else
        {
            Arr[k++]=divSizes[q++];
            div_update(divElements[q-1],divElements[q-1],divSizes[q-1],divSizes[q-1],colors.swap);//Color update
        }
    }

    for(var t=0;t<k;t++)
    {
        divSizes[start++]=Arr[t];
        div_update(divElements[start-1],divElements[start-1],divSizes[start-1],divSizes[start-1],colors.sorted);//Color update
    }
}
function merge_partition(start,end)
{
    if(start < end)
    {
        var mid=Math.floor((start + end) / 2);
        div_update(divElements[mid],divElements[mid],divSizes[mid],divSizes[mid],colors.comparison);//Color update

        merge_partition(start,mid);
        merge_partition(mid+1,end);

        merge_sort(start,mid,end);
    }
}

function MergeSort()
{
    document.getElementById("Time_Worst").innerText="O(N log N)";
    document.getElementById("Time_Average").innerText="Θ(N log N)";
    document.getElementById("Time_Best").innerText="Ω(N log N)";

    document.getElementById("Space_Worst").innerText="O(N)";

    c_delay=0;

    merge_partition(0,divSizes.length-1);

    enableButtons();;
}

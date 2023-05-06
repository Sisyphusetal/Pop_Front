function popFront(arr, index) {
    var front = arr[index];
    for(var i=0; i<arr.length; i++) {
        if(i>=index) {
            arr[i]=arr[i+1]
        }
    }
arr.pop();
return front;
}

console.log(popFront([1,2,3,4,5], 0))
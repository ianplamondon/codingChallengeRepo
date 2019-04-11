function evenFibonacciSum(nth){
    let arr=[1,2];
    let newArr=[2];
    for(let i=2;i<=nth;i++){
        arr[i]=arr[i-1]+arr[i-2];
        if(arr[i]%2==0){
            newArr.push(arr[i]);
        }
    }
    let val = 0;
    for(let i=0;i<newArr.length;i++){
        val += newArr[i];
    }
    return val;
}
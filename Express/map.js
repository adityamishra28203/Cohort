//implement map function

function f(k) {
    return k*2;
}
function mapFunction(arr, f) {
    let newArray = []
    for(let i=0; i<arr.length; i++) {
        let newValue = -1;
        newValue = f(arr[i])
        newArray.push(newValue)
    }
    console.log(newArray) ;
}

const arr = [1,2,3,4];
mapFunction(arr,f)
let arr = [3, 2, 1]

let temp = arr[0]
arr[0] = arr[2]
arr[2] = arr[0]
arr[0] = temp
console.log(arr)



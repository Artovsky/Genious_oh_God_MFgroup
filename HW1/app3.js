//1-ое применение. Копирование части исходного массива arr в новый массив arr1 и его вывод

let arr = [5, 9, 3, 6, 88, 22, 44, 55, 12345, 1]
arr.sort(function(a, b){ 
    return a - b
})

let arr1 = arr.slice(0,5)
console.log(arr1)

//2-ое применение. Копирование полного исходного массива в новый массив

let arr2 = [5, 9, 3, 6, 88, 22, 44, 55,678687676, 6, -1, 12345, 1]
arr2.sort(function(a, b){ 
    return a - b
})

let arr3 = arr2.slice()
console.log(arr3)

//3-ое применение. Возвращение двух самых больших чисел

let arr4 = [5, 9, 3, 6, 88, 22, 44, 55,678687676, 6, -1, 12345, 1, 1e6]
arr4.sort(function(a, b){ 
    return a - b
})

let arr5 = arr4.slice(-2)
console.log(arr5)

//4-ое применение. Возвращение первого элемента из массива (здесь: самого маленького)

let arr6 = [5, 9, 3, 6, 88, 22, 44, 55,678687676, 6, -1, 12345, 1, 1e6]
arr6.sort(function(a, b){ 
    return a - b
})

let arr7 = arr6.slice(0,1)
console.log(arr7)

//5-ое применение. Нарезание первых трех чисел в отдельные массивы, их последующее сложение и вывод

let arr8 = [5, 9, 3, 6, 88, 22, 44, 55,678687676, 6, -1, 12345, 1, 1e6]
arr8.sort(function(a, b){ 
    return a - b
})

let arr9 = arr8.slice(0,1)
let arr10 = arr8.slice(1,2)
let arr11 = arr8.slice(2,3)
console.log(arr9 + arr10 + arr11)

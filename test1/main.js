arr_1 = ['A1', 'A2', 'A3', 'A4']
arr_2 = ['B1', 'B2', 'B3', 'B4']
arr_3 = ['C1', 'C2', 'C3', 'C4']
arr_4 = ['F1', 'F2', 'F3', 'F4']
arr_5 = ['X1', 'X2', 'X3', 'X4']



function tinhToHop(arrs){
    console.log("So to hop:", arrs.map(item=>item.length).reduce((a, b)=> a*b, 1))
}

//Hàm combine nhận vào 2 tham số:
//   Tham số thứ nhất là 1 giá trị
//   Tham số thứ 2 là một mảng bất kỳ
//   Kết quả trả về là một mảng mới với giá trị tổ h hợp từ 2 tham số
function combine(x, arr_y){
    let result = []
    for (let item of arr_y){
        result.push([x, ...item])
    }
    return result
}


//Hàm combine nhận vào 2 tham số:
//   Tham số thứ nhất là một mảng bất kỳ
//   Tham số thứ 2 là một mảng bất kỳ
//   Kết quả trả về là một mảng mới với giá trị tổ hợp từ 2 tham số
function combine2Arr(arr_1, arr_2){
    let result = []
    for (let item of arr_1){
        result.push(...combine(item, arr_2))
    }
    return result
}


//Hàm combine nhận vào n tham số:
//   Kết quả trả về là một mảng mới với giá trị tổ hợp từ n tham số
function combineNArr(...arrs){
    let newArr = arrs.reverse()
    tinhToHop(arrs)
    let result = newArr.reduce((a, b) => combine2Arr(b, a), [[]])
    return result
}

console.log(combineNArr(arr_1, arr_2, arr_3, arr_4, arr_5))


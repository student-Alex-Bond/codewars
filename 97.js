function processData(data) {
    let a =1
    for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < 1; j++) {
            a *= data[i][j] - data[i][j + 1]
        }
    }
    return a
}
console.log((processData([[2, 5], [3, 4], [8, 7]])))

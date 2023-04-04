function replace(array, from, to, elements) {

    array.splice(from,to-from,...elements)

}
let testArray = [1, 2, 100, 100, 6]
replace(testArray, 2, 4, [3, 4, 5])
console.log(testArray)


function copyReplace(array, from, to, elements) {
    let array1=array
     array1.splice(from,to-from,...elements)
    return array1
}
console.log(copyReplace([1, 2, 100, 200, 6], 2, 4, [3, 4, 5]))




let customerOrder = []
function recordOrders(time,birds) {


    customerOrder.push({time:time,birds:birds})


}

recordOrders(new Date, ["coffee", "yaourt", "pizza"])
console.log(customerOrder)

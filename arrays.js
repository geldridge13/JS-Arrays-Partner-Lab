//let array=["one", "two", "three"]
//if (array.length==0){
    //alert ("this array is empty")
//}
//let s="default"

//for (var i =0; i < array.length; i++){
    //console.log(array[i])
    //array[i]=s
//}
//console.log(array)

let array=["one","two","three"];
let combined = ""
for (var i=0; i < array.length; i++) {
    combined += array[i]
    if (i < array.length - 1) {
        combined += ", "
    }
}

console.log(combined)
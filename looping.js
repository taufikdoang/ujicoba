// tesprakterk

// console.log("sudah berhasil")
// console.log("okelah kalau begitu")

// var minuman = "Choco Ice"

// switch(minuman) {
//     case 'Sweat Tea' :
//         console.log("You choose Sweat Tea, thanks")
//         break;
//     case 'Plain Tea' :
//         console.log("You choose Sweat Tea, thanks")
//         break;
//     case 'Boba' :
//         console.log("You choose Boba, thanks")
//         break;
//     case 'Milk Coffee' :
//         console.log("You choose Milk Coffee, thanks")
//         break;
//     case 'Choco Ice' :
//         console.log("You choose Choco Ice, thanks")
//         break;
//     default :
//         if (minuman === " ") {
//             console.log("input minuman")
//         } else {
//         console.log("is not defined") 
//         }
//         break;
// }


// var pembelian = 30000;
// var coupon = "Free 15%";

// switch (coupon) { 
//     case 'FreeOngkir':
//         if (pembelian >= 50000) {
//             var total = pembelian * 0.9
//             console.log("Total pembelian anda Rp " + total)
//         } else if (pembelian >= 30000 && pembelian < 50000) {
//             var total = pembelian * 0.95
//             console.log("Total pembelian anda Rp " + total)
//         } else {
//             var total = pembelian * 0.975
//             console.log("Total pembelian anda Rp " + total)
//         }
//         break;
//     case 'Free 15%':
//         if (pembelian >= 30000) {
//             var total = pembelian * 0.85
//             console.log("Total pembelian anda Rp " + total)
//         } else {
//             var total = pembelian * 1
//             console.log("Total pembelian anda Rp " + total)
//             break;
//         }
// }


    // var num = 5;


    // for (var i = 1; i <=num; i++) {
    //     console.log(i)
    // }

// var num = 5;

// for(var i = 1 ; i <=num; i++){
//     if(i % 2 === 0){
//         console.log(i + " bilangan genap ")
//     } else {
//         console.log(i + " bilangan ganjil")
//     }
// }


// var str ="sarapan"
// var temp = '' // tempat menampung sementara

// for(var i = 0; i < str.length; i++){
//     if(i % 2 === 0){
//         temp = temp + str[i].toUpperCase()
//     } else {
//         temp = temp + str[i]
//     }
// }
// console.log(temp)

// var num = 3;
// var temp = ""
// for (var i = 0; i < num; i++){
//     for (var j = 0; j < num; j++) {
//         temp += "#"
//     }
//     console.log(temp)
//     temp = ""
// }


// var num = 5;
// var temp = '';
// var chara = "x"


// for (var i = 0; i < num; i++) { 
//     for (var j = 0; j <= i; j++) {
//         temp += chara
//     }
//     console.log(temp)
//     temp = ""
// }


var num = 5;
var temp = '';


for (var i = 0; i < num; i++) { 
    for (var j = 0; j <= i; j++) {
        temp += (j+0)
    }
    console.log(temp)
    temp = ''
}

var pembelian = 30000;
var coupon = "Free 15%";

Switch (coupon) {
    case 'FreeOngkir':
        if (pembelian >= 50000) {
            var total = pembelian * 0.9
            console.log("Total pembelian anda Rp " + total)
        } else if (pembelian >= 30000 && pembelian < 50000) {
            var total = pembelian * 0.95
            console.log("Total pembelian anda Rp " + total)
        } else {
            var total = pembelian * 0.975
            console.log("Total pembelian anda Rp " + total)
        }
        break;
    case 'Free 15%':
        if (pembelian >= 30000) {
            var total = pembelian * 0.85
            console.log("Total pembelian anda Rp " + total)
        } else {
            var total = pembelian * 1
            console.log("Total pembelian anda Rp " + total)
            break;
        }

}



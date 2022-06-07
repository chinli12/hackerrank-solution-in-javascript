// you need to complete the function bonAppetit that should print Bon Appetit if the bill is fairly split. otherwise, it should print the integer amount of money that Brian owes Anna.
function bonAppetit(bill, k, b)
{
    let sum = 0;
    for (let i = 0; i < bill.length; i++) {
        if (i !== k) {
            sum += bill[i];
        }
    }
    if (sum / 2 === b) {
        console.log("Bon Appetit");
    } else {
        console.log(b - sum / 2);
    }
}
function buyShingara(money){
    var shingara=10;
    var quantity= money / shingara;
    return quantity;
}

var money= 350;
var koytaPabo= buyShingara(money);
console.log('khabo',koytaPabo, 'ta shingara');


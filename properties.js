var myMobile={
    brand:'Poco',
    model:"x3",
    camera:'50px',
    ram:'6gb',
    rom:'128gb',
    price:29500,
}
// Some other way to find a value of a specific property/KeyboardEvent.
var randomAccessMemory= myMobile.ram;
console.log(randomAccessMemory);

var randomAccessMemory2= myMobile['ram'];
console.log(randomAccessMemory2);


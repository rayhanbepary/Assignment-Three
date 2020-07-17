//feetToMile
function feetToMile(feet){
    var mile = feet/5280;
    return mile;
}
var convert = feetToMile(10560)
console.log(convert);

//woodCalculator
function woodCalculator(chair,table,bed){
    var totalChair = chair * 1;
    var totleTable = table * 3;
    var totalBed   = bed * 5;
    return totalChair + totleTable + totalBed;
}
var total = woodCalculator(14,5,4);
console.log(total);

//brickCalculator
function brickCalculator(calculate){
    const oneFeet           = 1000;
    const firstTenFloors    = 15;
    const secondTenFloors   = 12;
    const overTwenty        = 10;
    if(calculate <= 10){
        var multiply = calculate * firstTenFloors;
        var result = multiply  * oneFeet;
        return result;
    }else if(calculate <=20){
        var subtract = calculate - 10;
        var multiply = subtract * secondTenFloors;
        var firstTen = 10 * 15;
        var total    = multiply + firstTen;
        var result = total * oneFeet;
        return result;
    }else if(calculate > 20){
        var subtract = calculate - 20;
        var multiply = subtract * overTwenty;
        var firstTen = 10*15;
        var secondTen = 10*12;
        var total = multiply + firstTen + secondTen;
        var result = total  *oneFeet;
        return result;
    }
}
console.log(brickCalculator(35));


//tinyFriend
  function tinyFriend(name){
    var prevName = name[0];
    for(var i = 0; i < name.length; i++){
        var currentName = name[i];
        if(currentName.length < prevName.length){
            prevName = currentName;
        }
	}
	return prevName;
}
var arrayName = tinyFriend(['Rasel','Rayhan','Alo','ba']);
console.log(arrayName);
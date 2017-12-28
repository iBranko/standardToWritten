var separateByPlaceValue = function (number) {
    var formattedNumber = number.toString();

    for(var i = formattedNumber.length-3; i > 0; i-=3) {
        formattedNumber = formattedNumber.insert(i, ",");
    }

    return formattedNumber;
};

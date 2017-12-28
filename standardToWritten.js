var standardToWritten = function (n) {
    var a = separateByPlaceValue(n).split(",");
    var sizea = a.length;
    var writtenNumber = "";
    
    for(var i = 0; i < sizea; i++) {
        if(a[i] != "000") {
            var b = a[i].toString().split("");
            b.reverse();
            var sizeb = b.length;
            
            for(var j = sizeb-1; j >= 0; j--){
                if(i > 0 && j === sizeb-1){
                    writtenNumber += ", ";
                }
                
                if(j === 1) {
                    if(parseInt(b[j]) === 1) {
                        switch(parseInt(b[j-1])){
                            case 9:
                                writtenNumber += " nineteen ";
                                break;
                            case 8:
                                writtenNumber += " eighteen ";
                                break;
                            case 7:
                                writtenNumber += " seventeen ";
                                break;    
                            case 6:
                                writtenNumber += " sixteen ";
                                break;    
                            case 5:
                                writtenNumber += " fifteen ";
                                break;
                            case 4:
                                writtenNumber += " fourteen ";
                                break;   
                            case 3:
                                writtenNumber += " thirteen ";
                                break;    
                            case 2:
                                writtenNumber += " twelve ";
                                break;    
                            case 1:
                                writtenNumber += " eleven ";
                                break;
                            case 0:    
                                writtenNumber += " ten ";
                                break;
                        }
                        break;
                    } else {
                        switch(parseInt(b[j])){
                            case 9:
                                writtenNumber += " ninety";
                                break;
                            case 8:
                                writtenNumber += " eighty";
                                break;
                            case 7:
                                writtenNumber += " seventy";
                                break;    
                            case 6:
                                writtenNumber += " sixty";
                                break;    
                            case 5:
                                writtenNumber += " fifty";
                                break;
                            case 4:
                                writtenNumber += " forty";
                                break;   
                            case 3:
                                writtenNumber += " thirty";
                                break;    
                            case 2:
                                writtenNumber += " twenty";
                                break;    
                        }
                        if(b[j-1] > 0 && b[j] > 1){
                            writtenNumber += "-";
                        } else {
                            writtenNumber += " ";
                        }
                    }
                } else {
                    switch(parseInt(b[j])){
                        case 9:
                            writtenNumber += "nine ";
                            break;
                        case 8:
                            writtenNumber += "eight ";
                            break;
                        case 7:
                            writtenNumber += "seven ";
                            break;    
                        case 6:
                            writtenNumber += "six ";
                            break;    
                        case 5:
                            writtenNumber += "five ";
                            break;
                        case 4:
                            writtenNumber += "four ";
                            break;   
                        case 3:
                            writtenNumber += "three ";
                            break;    
                        case 2:
                            writtenNumber += "two ";
                            break;    
                        case 1:
                            writtenNumber += "one ";
                            break;    
                    }
                    if(j === 2 && b[j] >= 1){
                        writtenNumber += " hundred";
                    }
                } 
            }
            
            switch(i) {
                case sizea-2:
                    writtenNumber += " thousand";
                    break;
                case sizea-3:
                    writtenNumber += " million";
                    break;
                case sizea-4:
                    writtenNumber += " billion";
                    break; 
                case sizea-5:
                    writtenNumber += " trillion";
                    break; 
                case sizea-6:
                    writtenNumber += " quadrillion";
                    break;   
                case sizea-7:
                    writtenNumber += " quintillion";
                    break;   
                case sizea-8:
                    writtenNumber += " sextillion";
                    break;    
                case sizea-9:
                    writtenNumber += " septillion";
                    break; 
                case sizea-10:
                    writtenNumber += " octillion";
                    break;
                case sizea-11:
                    writtenNumber += " nonillion";
                    break;  
                case sizea-12:
                    writtenNumber += " decillion";
                    break;     
            }
        }
    }
    
    return writtenNumber;
};

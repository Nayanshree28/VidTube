export const API_KEY = `AIzaSyCiLkeSI2VObRSm9KRjHJfr3evRTxu9s74`;

export const value_convertor = (value) =>{
    if(value >= 1000000){
        return Math.floor(value/1000000) + "M";
    }
    else if(value>=1000){
        return Math.floor(value/1000)+"K"
    }
    else{
        return value;
    }
}
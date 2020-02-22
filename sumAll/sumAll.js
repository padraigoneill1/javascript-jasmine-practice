const sumAll = function(a,b) {
    if (a < 0 || b < 0 || typeof a!= 'number' || typeof b!= 'number' ) return 'ERROR'
    result = 0
    i = 0
    j = 0
    if (a < b){
        for (;a<=b;a++){
            result +=a ;
        }
    }
    else{
        for (;a>=b;a--){
            result +=a ;
        }
    }
    return result
}

module.exports = sumAll

const repeatString = function(word,repeats) {
    if (repeats < 0) return 'ERROR' 
    result = ''
    for (i=0 ; i < repeats;i++){
        result +=word
    }
    return result
}

 repeatString;

module.exports = repeatString

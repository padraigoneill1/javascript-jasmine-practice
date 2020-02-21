const removeFromArray = function(array) {
    for ( arg = 0; arg < arguments.length; arg++) {
        for (i = 0; i<array.length; i++) {
            if (array[i] == arguments[arg]) array.splice(i,1)
        }
    }
    return array
}

module.exports = removeFromArray

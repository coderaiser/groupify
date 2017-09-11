'use strict';

const mapa = require('mapa');

module.exports = groupify;

function groupify(n, array) {
    check(n, array);
    
    var length = array.length;
    var count = getCount(n, length);
    
    return mapa(function(item, i) {
        var start   = i * n,
            end     = start + n;
        
        if (end >= length)
            end = length;
        
        return array.slice(start, end);
    }, Array(count));
}

function getCount(n, length) {
    var count = Math.round(length / n);
    
    if (length % n)
        ++count;
    
    return count;
}

function check(n, array) {
    if (typeof n !== 'number')
        throw Error('n should be number!');
    
    if (!Array.isArray(array))
        throw Error('array should be an array!');
}


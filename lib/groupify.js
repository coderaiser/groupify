(function(global) {
    'use strict';
    
    if (typeof module !== 'undefined' && module.exports)
        module.exports  = groupify;
    else
        global.groupify = groupify;
    
    function groupify(n, array) {
        check(n, array);
        
        var length  = array.length,
            count   = getCount(n, length);
        
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
    
    function mapa(fn, array) {
        var i       = 0,
            n       = array.length,
            result  = Array(n);
          
        for (i = 0; i < n; i++)
            result[i] = fn(array[i], i, n, array);
          
        return result;
    }
})(this);

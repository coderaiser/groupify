'use strict';

const groupify = require('..');
const test = require('tape');

test('divide array by strict n elements in groups', t => {
    const result = groupify(3, [1, 2, 3, 4, 5, 6]);
    
    t.deepEqual(result, [[1, 2, 3], [4, 5, 6]]);
    t.end();
});

test('divide array by not strict n elements in groups', t => {
    const result = groupify(5, [1,2,3,4,5,6]);
    
    t.deepEqual(result, [[1, 2, 3, 4, 5], [6]]);
    t.end();
});

test('arguments: no n', t => {
    t.throws(groupify, /n should be number!/, 'should throw when not number');
    t.end();
});

test('arguments: no array', t => {
    const fn = () => groupify(2);
   
    t.throws(fn, /array should be an array!/, 'should throw when not array');
    t.end();
});


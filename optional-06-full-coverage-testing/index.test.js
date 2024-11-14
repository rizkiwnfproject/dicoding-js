import { test } from 'node:test';
import assert from 'node:assert';
import sum from './index.js';

/*
Note : 
1. if pertama itu jika salah satu angka ada yang string/diluar dari tipe number atau sama2 number
2. if kedua itu jika salah satu angka ada yang kurang dari 0 alias minus
*/

test('sum should return the sum of two positive numbers', () => {
    assert.strictEqual(sum(3, 4), 7, 'sum(3, 4) should return 7');
    assert.strictEqual(sum(10, 15), 25, 'sum(10, 15) should return 25');
});

test('sum should return 0 if either argument is not a number', () => {
    assert.strictEqual(sum('3', 4), 0, 'sum("3", 4) should return 0');
    assert.strictEqual(sum(3, '4'), 0, 'sum(3, "4") should return 0');
    assert.strictEqual(sum('a', 'b'), 0, 'sum("a", "b") should return 0');
    assert.strictEqual(sum(null, undefined), 0, 'sum(null, undefined) should return 0');
});

test('sum should return 0 if either argument is a negative number', () => {
    assert.strictEqual(sum(-3, 4), 0, 'sum(-3, 4) should return 0');
    assert.strictEqual(sum(3, -4), 0, 'sum(3, -4) should return 0');
    assert.strictEqual(sum(-3, -4), 0, 'sum(-3, -4) should return 0');
});

test('sum should return 0 if both arguments are 0', () => {
    assert.strictEqual(sum(0, 0), 0, 'sum(0, 0) should return 0');
});

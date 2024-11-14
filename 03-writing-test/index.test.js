// index.test.js
import { test } from 'node:test';
import assert from 'node:assert';
import { sum } from './index.js';

test('test return value of sum', () => {
    assert.strictEqual(sum(1, 2), 3, 'sum(1, 2) should return 3');
    assert.strictEqual(sum(-1, -1), -2, 'sum(-1, -1) should return -2');
    assert.strictEqual(sum(0, 0), 0, 'sum(0, 0) should return 0');
    assert.strictEqual(sum(1.5, 2.5), 4, 'sum(1.5, 2.5) should return 4');
});

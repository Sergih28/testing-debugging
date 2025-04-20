import { test, expect } from "@jest/globals";

function sum(a, b) {
  return a + b;
}

test('adds 4 + 2 to equal 6', () => {
  const r = sum(4, 2)
  expect(r).toBe(6);
});

import { expect, test } from 'vitest'

function sum(a, b) {
  return a + b
}

test('adds 1 + 2 to equal 3', () => {
  const x = sum(1, 2)
  expect(x).toBe(3)
})

test('adds 2 + 2 to equal 4', () => {
  const x = sum(2, 2)
  console.log('asdf')

  expect(x).toBe(4)
})

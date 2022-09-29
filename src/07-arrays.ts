(() => {
  let prices = [1, 2, 2, 1, 1, 212, 'hola', true]
  // prices.push('asasa')
  // prices.push(true)
  // prices.push({})
  prices.push(121212)

  let products = ['hola', true]
  products.push(false)

  let mixed: (string | number | boolean)[] = ['hola', true]
  mixed.push(123)


  let numbers = [1, 2, 2, 1, 1, 212]
  numbers.map(item => item * 2)
})()

import { products, addProduct, calcStock } from './product.service'


addProduct({
  title: 'prod1',
  createAt: new Date(1988, 8, 24),
  stock: 5,
  size: 'M'
})

addProduct({
  title: 'prod1',
  createAt: new Date(1988, 8, 24),
  stock: 12,
  size: 'L'
})
console.log(products)

const total = calcStock()
console.log(total)


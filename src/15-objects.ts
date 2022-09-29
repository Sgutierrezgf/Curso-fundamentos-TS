(() => {
  type Sizes = 'M' | 'S' | 'L' | 'XL'
  type Product = {
    title: string,
    createAt: Date,
    stock: number,
    size?: Sizes,
  }

  const products: Product[] = []
  const addProduct = (
    data: Product
  ) => {
    products.push(data)
  }

  addProduct({
    title: 'prod1',
    createAt: new Date(1988, 8, 24),
    stock: 12,
  })

  addProduct({
    title: 'prod1',
    createAt: new Date(1988, 8, 24),
    stock: 12,
    size: 'L'
  })

  console.log(products)
})()

(() => {
  const login = (data: { email: string, password: number }) => {
    console.log(data.email, data.password)
  }

  login({
    email: 'sebas@gmail.com',
    password: 234234,
  })

  type Sizes = 'M' | 'S' | 'L' | 'XL'

  const products: any[] = []
  const addProduct = (
    data: {
      title: string,
      createAt: Date,
      stock: number,
      size?: Sizes,
    }
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

(() => {
  let productPrice = 100
  productPrice = 12
  console.log('productPRice', productPrice)

  let customerAge: number = 28;
  // customerAge = customerAge + '1' //, 281
  customerAge = customerAge + 1 //, 29
  console.log('customerAge', customerAge)

  let productInStock: number
  console.log('productInStock', productInStock)
  if (productInStock > 10) {
    console.log('Is great')
  }

  let discount = parseInt('100')
  console.log('discount', discount)
  if (discount <= 200) {
    console.log('apply')
  } else {
    console.log('not apply')
  }

  let hex = 0xfff
  console.log('hex', hex)
  let hex2 = 0x2ff
  console.log('hex', hex2)
  let hexTotal = hex + '2'
  console.log('total', hexTotal)
  let bin = 0b1010 // 10
  console.log('bin', bin)
})()

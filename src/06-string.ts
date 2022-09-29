(() => {
  let productTitle = 'My amazing product'
  // productTitle = null
  // productTitle = () =>{}
  // productTitle = 123
  productTitle = 'My amazing product change'
  console.log('productTitle', productTitle)

  const productDescription = "I'm bla bla bla bla bla bla"
  console.log('productDescription', productDescription)


  let productPrice = 100
  let isNew: boolean = false

  const summary = `
  it's the info about de product
  Title: ${productTitle}
  Description: ${productDescription}
  Price: ${productPrice}
  isNew: ${isNew}
  `

  console.log('summary', summary)


})()

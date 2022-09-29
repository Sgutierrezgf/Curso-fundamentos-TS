(() => {

  type UserID = string | number

  let userId: UserID



  //Literal types
  type Sizes = 'M' | 'S' | 'L' | 'XL'
  let shirtSize: Sizes
  shirtSize = 'M'
  shirtSize = 'L'
  shirtSize = 'XL'
  shirtSize = 'S'


  function greeting(myText: UserID, size: Sizes) {
    if (typeof myText === 'string') {
      console.log(`string ${myText.toLocaleLowerCase()}`)
    }
  }
  greeting(1111, 'XL')
  greeting(12312, 'L')
})()

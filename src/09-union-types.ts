(() => {
  let userId: string | number
  userId = 1212
  userId = 'sasa'

  function greeting(myText: string | number) {
    if (typeof myText === 'string') {
      console.log(`string ${myText.toLocaleLowerCase()}`)
    } else {
      console.log(`number ${myText.toFixed(1)}`)

    }
  }
  greeting('SEBAS')
  greeting(1212)
})()

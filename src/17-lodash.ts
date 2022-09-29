import _ from 'lodash'


const data = [
  {
    username: 'sebas',
    role: 'admin'
  },
  {
    username: 'vi',
    role: 'seller'
  },
  {
    username: 'yin',
    role: 'seller'
  },
  {
    username: 'salem',
    role: 'customer'
  }
]

const rta = _.groupBy(data, (item) => item.role)

console.log(rta)

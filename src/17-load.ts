import _ from 'lodash'; // Install npm i --save-dev @types/lodash

const data = [
  {
    username: 'elian',
    role: 'admin'
  },
  {
    username: 'victor',
    role: 'seller'
  },
  {
    username: 'valentina',
    role: 'seller'
  },
  {
    username: 'valentina',
    role: 'costumer'
  }
];

const rta = _.groupBy(data, (item) => item.role);
console.log(rta)

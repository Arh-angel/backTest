// import Square from './square.js';

// const square = new Square(2);

// console.log(`Result Square, ${square.area()}`)

import art from 'ascii-art';

art.font('Give me food!!!', 'Doom', (err, render) => {
  if (err) return;
  console.log(render);
});
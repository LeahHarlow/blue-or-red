
 //document.cookie = 'colour=blue; expires=' + new Date(2023, 0, 1).toUTCString();

  // document.cookie = 'timesVisited=3; expires=' + new Date(2025, 0, 1).toUTCString();

console.log(document.cookie.toString().split(';').filter((cookie) => cookie.includes('colour')))

console.log("COOKIE STRING", document.cookie
  .toString()
  .split(';')
  .filter((cookie) => cookie.includes('colour')))

  const randoColour = () => {
    let colour = Math.floor(Math.random(2)) === 1 ? 'blue' : 'red';
    document.cookie = `colour=${colour}`;
    return colour;
  };

//   console.log('RANDOCOLOUR', randoColour())


//   const cookieCheck = () => {
//     if (document.cookie) {
//       let cookieColour = document.cookie
//         .toString()
//         .split(';')
//         .filter((cookie) => cookie.includes('colour'));
//         //console.log("COOKIE COLOUR", cookieColour)
//       console.log(cookieColour.toString().includes('blue') ? 'blue' : 'red');
//     } else {
//       console.log('randoColor')
//     }
//   };

//   //cookieCheck()

//    function getNumber(){
//     let x = document.cookie
//       .toString()
//       .split(';')
//       .filter((cookie) => cookie.includes('timesVisited'))
//       console.log(x)
//       let str = x[0]
//       str = str.split('')
//       let cut=  str.indexOf('=');
//       let num = str.slice(cut+1)
//       if(num.length > 1){
//         num = num.join('');
//       }
//       return num
//    };

// console.log('Get Number', getNumber());


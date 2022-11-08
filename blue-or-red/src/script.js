
document.cookie = 'colour=red; expires=' + new Date(2023, 0, 1).toUTCString();

//console.log(document.cookie.toString().split(';').filter((cookie) => cookie.includes('colour')))

console.log("COOKIE STRING", document.cookie
  .toString()
  .split(';')
  .filter((cookie) => cookie.includes('colour')))


  const cookieCheck = () => {
    if (document.cookie) {
      let cookieColour = document.cookie
        .toString()
        .split(';')
        .filter((cookie) => cookie.includes('colour'));
        console.log("COOKIE COLOUR", cookieColour)
      console.log(cookieColour.toString().includes('blue') ? 'blue' : 'red');
    } else {
      console.log('randoColor')
    }
  };

  cookieCheck()


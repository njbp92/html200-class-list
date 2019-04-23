let colors= [['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'], ['1', '2', '3', '4', '5', '6','7']];

  for (let n=0; n < colors.length; n++) {
    console.log(colors);
       for (let b=0; b < colors[n].length; b++) {
        console.log(colors[n],[b]);
      }
    
  }
  const rainbow = colors.split('[]')
console.log(rainbow);

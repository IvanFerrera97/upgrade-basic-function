const counterWords = [
    'code',
    'repeat',
    'eat',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code',
    'enjoy',
    'upgrade',
    'code'
  ];
  function repeatCounter(param) {
      let counter = 0;
    for (let i = 0; i < param.length; i++) {
        for (let j = 0; j < param[i].length; j++) {
            if (param[i] === param[j]) {
                counter += 1;
                
            }
        }
    }return "Hay " + counter + " repeticiones"
}
console.log(repeatCounter(counterWords));
const nameFinder = [
    'Peter',
    'Steve',
    'Tony',
    'Natasha',
    'Clint',
    'Logan',
    'Xabier',
    'Bruce',
    'Peggy',
    'Jessica',
    'Marc'
  ];
  const finderName = (param, name) => {
    param.forEach(element => {
      if(name === element){
        console.log("Se encontrĂ³ a " + name)
      }      
    });
  }

  finderName(nameFinder, "Clint");
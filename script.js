async function consumingFunc () {
    let response = await fetch('pets.json')
    return response.json();
  }
  
   let data = consumingFunc();
  
  data.then( function f2(result) {
      document.getElementById('test').innerHTML = result[1].name;
  })
import App from './App';


let pokemon = {
  name: 'Charizard',
  name1: 'Mew',
  name2: 'Muk',
  name3: 'Sandshrew'
}

for (let mon in pokemon) {
  if (pokemon.hasOwnProperty(mon)) {
    console.log("Do you like " + pokemon[mon] + "? ")
  }
}

export default App;

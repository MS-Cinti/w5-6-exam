
let incomingData = {
    "title": "The Shawshank Redemption",
    "year": 1994,
    "director": "Frank Darabont",
    "duration": "2h 22min",
    "genre": [
      "Crime",
      "Drama"
    ],
    "rate": 9.3
  }

/*function getTheFirstGenre(myMovie){
    return myMovie.genre[0];
}

console.log(getTheFirstGenre(incomingData));*/
// arrow functionöket const-tal szoktuk
const getTheFirstGenre = myMovie => myMovie.genre[0]; /* automatikus returnölés történik egysoros arrow fn-nál */

console.log(getTheFirstGenre(incomingData));
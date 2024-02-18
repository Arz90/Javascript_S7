//Dado el siguiente array, utiliza .filter() para generar un nuevo array con los streamers que tengan el gameMorePlayed = 'League of legends' y tengan menos de 30 años.

const streamers = [{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'}, {name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, {name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'}, {name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}];

const streamersYogurines = streamers.filter(played => played.gameMorePlayed === 'League of Legends' && played.age < 30 );

console.log('La lista de los yogurines es:');
console.log(streamersYogurines);

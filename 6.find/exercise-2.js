//Dado el siguiente array, usa .find() para econtrar la pelicula del año 2010.

const movies = [{title: 'Madagascar', stars: 4.5, date: 2015},{title: 'Origen', stars: 5, date: 2010},{title: 'Your Name', stars: 5, date: 2016}];

const wantedFilm = 2010;
const film = movies.find((value) => value.date === wantedFilm);

if (film) {
    console.log('Película del año 2010 encontrada:', film.title);
  } 
  

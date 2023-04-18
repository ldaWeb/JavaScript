const numberOfFilms = +prompt('Сколько фильмов вы уже смотрели?', '');

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	private: false,
};

const a = prompt('Один и просмотренных вами фильмов?', ''),
	b = prompt('На сколько оцените его?', ''),
	c = prompt('Один и просмотренных вами фильмов?', ''),
	d = prompt('На сколько оцените его?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);

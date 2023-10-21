const axios = require('axios');
const bname = 'Flower';
const key = 'AIzaSyC5bcbf2cdVxf0OwUPdWBegVueFlRPR9Sg';
let author;
let url;
if (author)
	url = `https://www.googleapis.com/books/v1/volumes?q=${bname}+inauthor:${author}&key=${key}`;
else url = `https://www.googleapis.com/books/v1/volumes?q=${bname}&key=${key}`;

axios(url)
	.then((response) => {
		response.data.items.slice(0, 3).forEach((book) => {
			const r = book.volumeInfo;
			const authors = book.volumeInfo.authors.forEach((c) => {});
			const a = {
				Title: r.title,
				Subtitle: r.subtitle,
			};
		});
	})
	.catch((err) => console.log(err));

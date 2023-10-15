function output(fo) {
	const foo = fo.inputbox.value;
	const axios = require('axios'); // Error here, Require Keyword not defined because of Web Browser Enviroments. Man I wished I would had worked on HTML environements coz JS part was easy and this is the part where Im struggling.
	axios(
		`http://api.brainshop.ai/get?bid=153868&key=rcKonOgrUFmn5usX&uid=1&msg="${foo}"`
	)
		.then((response) => {
			const msg = response.data.cnt; //The Reply from API to statements like Hi or Hello
			console.log(msg);
		})
		.catch((error) => {
			console.error(error);
		});
}
	
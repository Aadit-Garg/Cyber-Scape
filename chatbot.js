const http = require('http');
// Axios and node fetch seem to have a lot of errors, the package which fixed the require issue is Browerify and it seems to create errors for these two packages. So just http.get etc.
http.get(
	`http://api.brainshop.ai/get?bid=153868&key=rcKonOgrUFmn5usX&uid=1&msg="Hello"`,
	(msg) => {
		alert(msg);
	}
);
function output(fo) {
	const foo = fo.inputbox.value;
	// axios(
	// 	`http://api.brainshop.ai/get?bid=153868&key=rcKonOgrUFmn5usX&uid=1&msg="${foo}"`
	// )
	// 	.then((response) => {
	// 		const msg = response.data.cnt; //The Reply from API to statements like Hi or Hello
	// 		alert(msg);
	// 	})
	// 	.catch((error) => {
	// 		console.error(error);
	// 	});
}

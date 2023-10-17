let http = require('http');
const options = {
	host: 'api.brainshop.ai',
	path: `/get?bid=178491&key=QXs21o3tOIO8MBly&uid=178491&msg=Hello`,
};
const url =
	'http://api.brainshop.ai/get?bid=178491&key=QXs21o3tOIO8MBly&uid=178491&msg=Hello';
const req = http.request(options, (res) => {
	console.log(`STATUS: ${res.statusCode}`);
	res.on('data', (chunk) => {
		console.log(`BODY: ${chunk}`);
	});
});
req.on('error', (e) => {
	console.error(`problem with request: ${e.message}`);
});
req.end();
// function output(fo) {
// 	const foo = fo.inputbox.value;
// 	http.get(
// 		{
// 			host: 'api.brainshop.ai',
// 			path: `/get?bid=178491&key=QXs21o3tOIO8MBly&uid=178491&msg=${foo}`,
// 			headers: {
// 				mode: 'no-cors',
// 			},
// 		},
// 		(res) => {
// 			console.log(res);
// 			// alert(res.data);
// 		}
// 	);
// }

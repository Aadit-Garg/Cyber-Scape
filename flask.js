let msg; //The input from the website, like from the submit button

function response() {
	//Key- QXs21o3tOIO8MBl and UID- 178491
	const url = `http://api.brainshop.ai/get?bid=178491&key=QXs21o3tOIO8MBly&uid=178491&msg=${msg}`;
	//The link to fetch data from
	const fetch = require('node-fetch').default;
	//Note: Dont install latest node-fetch, instead install node-fetch@2.6.1 to avoid the "Dynamic Import" error thing
	fetch(url)
		.then((data) => data.json())
		.then((res) => {
			console.log(res); //The entire response from API
			console.log(res.cnt); //The message to display as output
		})
		.catch((err) => {
			console.log(err);
			//Error handling to avoid crashing, useless though since HTML doenst crash but node server does
		});
}
//ALL of this works properly using Node which I have used since I have started javascript. Tried a lot of stuff to use Node in frontend but couldn't.

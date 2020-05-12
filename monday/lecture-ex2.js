const getValue = function() {
	return new Promise((response, rej) => {
			setTimeout(() => {
				response({ value: Math.random() });
			}, Math.random() * 1500);
	});
};

// first part

( async () => {
	// await can only be called in an async function
	const result1 = await getValue();  
	const result2 = await getValue();
	console.log("-- Async/await --------");  
	console.log(`Value 1 is ${result1.value} and value 2 is ${result2.value}`);
	console.log("-- Async/await done! --");
})();

// second part 

let message = "";

const result = getValue()
	.then((res) => {
		message += `Value 1 is ${res.value}`;
		return getValue();
	})
	.then((res) => {	
		message += ` and value 2 is ${res.value}`;
		logIt(message);
	})
	.catch((err) => console.log(err));

const logIt = (message) => {
	console.log("-- Promise.then() -------------");  
	console.log(message);
	console.log("-- Promise.then() done! -------");  
}
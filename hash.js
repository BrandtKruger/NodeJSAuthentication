const bcrypt = require('bcrypt');


async function run() {
	
	const salt = await bcrypt.genSalt(10);
	const hashed = await bcrypt.hash('1234', salt);// 1234 the plain text password

	console.log(salt);
	console.log(hashed);
}

run();

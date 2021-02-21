function f() {
	var a = 1
	let b = 2
	const c = 3

	{
		var a = 100
		let b = 200
		const c = 300

		console.log('a in block scope is', a)
		console.log('b in block scope is', b)
		console.log('c in block scope is', c)
	}

	console.log('a outside of block scope is', a)
	console.log('b outside of block scope is', b)
	console.log('c outside of block scope is', c)
}

f()
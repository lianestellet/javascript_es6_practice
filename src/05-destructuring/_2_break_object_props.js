function printBasicInfo({firstName, secondName, profession}) {
	console.log(firstName + ' ' + secondName + ' - ' + profession)
}

const person = {
	firstName: 'John',
	secondName: 'Smith',
	age: 33,
	children: 3,
  	profession: 'teacher'
}

printBasicInfo(person)
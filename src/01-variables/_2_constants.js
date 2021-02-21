const a = 0;

const b = {
    nome: 'wagner',
    idade: '40'
}

const c = [3, 4, 5]


// Exceções causadas por mudar const
// a = 3;
// b = { nome: 'aaa', idade: '33' }
// c = [ 2, 3, 4]

b.idade = 33;
b.cidade = 'recife'
c.push(6)


console.log(a);
console.log(b);
console.log(c);
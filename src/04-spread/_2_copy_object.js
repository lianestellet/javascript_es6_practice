const user = {
    name: 'Plínio',
    idade: 30
}

const colab = ({ ...user })

console.log('Copy of', user, 'is', colab)
console.log('Are', user, 'and', colab, 'same?', user === colab)
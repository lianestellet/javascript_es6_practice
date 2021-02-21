
const c = {
    person_uid: 'algo11234',
    type: 'collab',
    attributes: {
        idade: 10,
        cidade: 'recife',
        name: 'Eren',
        nickname: 'Titan'
    }
}

const {
    attributes: { name },
    attributes: { nickname },
    attributes,
    person_uid
} = c

const colabMapped = { name, nickname, person_uid }

console.log(colabMapped)
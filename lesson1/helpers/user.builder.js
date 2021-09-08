function build(name, age, gender) {
    return {
        age,
        gender,
        greeting: () => {
            console.log('Hello. My name is', name)
        },
        name
    }
}

module.exports = {
    string: 'HELLO WORLD',
    build
};
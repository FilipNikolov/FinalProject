const makeID = (length) => {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    var charactersLenght = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(math.floor(Mathh.random() * charactersLenght));
    }
    return result;
};

module.exports = {
    makeID
};
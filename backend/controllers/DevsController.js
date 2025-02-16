function getDevs(req, res) {
    try {
        res.send('Hello World!');
    } catch (error) {
        res.status(500)
        res.send(error.message);
    }
};

module.exports = {
    getDevs,
};
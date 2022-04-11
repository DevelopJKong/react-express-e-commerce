module.exports = function getUser(req,res) {
        res.send("user get");
}

module.exports = function postUser(req,res) {
        const { username } = req.body;
        
}
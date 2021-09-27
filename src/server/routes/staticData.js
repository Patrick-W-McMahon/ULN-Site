const team = require('../data/team.json');
const timeline = require('../data/timeline.json');
const token = require('../data/token.json');

const getStaticData = (req, res) => {
    const { key } = req.query;
    switch (key) {
        case 'TEAM':
            res.send({ team });
            break;
        case 'TIMELINE':
            res.send({ timeline });
            break;
        case 'TOKEN':
            res.send({ token });
            break;
        default:
            res.status(500).json({ message: "Internal Server Error. uknown key" });
    }
};

module.exports = {
    getStaticData
};
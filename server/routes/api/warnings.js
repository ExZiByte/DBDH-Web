const express = require('express');
const mongo = require('mongodb');

const router = express.Router();

//Get warnings
router.get('/' , async (req, res) => {
    const members = await loadMembers();
    res.send(await members.find({}).toArray());
});

router.get('/:memberID', async (req, res) => {
    const member = await loadMembers();
    res.send(await member.find({memberId: req.params.memberID}).toArray());
});

async function loadMembers() {
    const password = encodeURIComponent("Jtt5U9TY6ud3Pt8f5r5Wxf8SUmg");
    const client = await mongo.MongoClient.connect(`mongodb://Entity:${password}@165.227.37.165:27018/`, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })

    return client.db('entity').collection('members');
}

module.exports = router;

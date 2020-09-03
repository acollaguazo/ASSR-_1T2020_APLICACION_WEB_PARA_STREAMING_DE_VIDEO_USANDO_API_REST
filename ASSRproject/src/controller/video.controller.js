const dbConnection = require('../conf/database');
const connection = dbConnection();


let getVideos = async (req,res)=>{
await connection.query("select * from video", (err,result)=>{
if (result)
res.send(result);
else
res.status(500).send(err);
});
}

let getUrlVideo =async(req,res)=>{
    var id = req.params.id;
    await connection.query(`select * from video Where id = ${id};` , (err,result)=>{
        if (result)
        res.send(result);
        else
        res.status(500).send(err);
});
}

module.exports = {
    getVideos,
    getUrlVideo
    }
const date =(req,res,next)=>{
    let date = new Date()
    let h= date.getHours()
    if (!(h>=10 && h<=14)) {
        res.send("come back after")
    }
    next()
}

module.exports = date
const express=require('express')
const app=express()


// the above lines are very imp

const statusCodes={
    200:"OK",
    400:"Bad Request",
    500:"Internal Server Error",
    204:"No content"    
}

app.get('/status-info', (req,res)=>{
    const code=parseInt(req.query.code)

    if(!code || !statusCodes[code]){
        return res.status(400).json({
            message:"Invalid status code"
        })
    }
    res.send({
        status:code,
        message:statusCodes[code]
    })
})

//without these lines no use of CA

const PORT=3000

app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
})


let i=require("express")
const t=i()
t.get('/',(req,res)=>{
    res.json(
        {
            user:'yogi',
            age:'22',
        }
    )
})

t.listen(5200,()=>{
    console.log("App is running");
})
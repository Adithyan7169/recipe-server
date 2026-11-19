const jsonServer= require('json-server')
const rpServer=jsonServer.create()
const router=jsonServer.router('db.json')
const middileware=jsonServer.defaults()

const PORT=4000

rpServer.use(middileware)
rpServer.use(router)

rpServer.listen(PORT,()=>{
    console.log(`RP-Server started running at PORT:${PORT} successfully`);
    
})
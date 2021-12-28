const http=require('http') //hon 3m notsl 3ala model esma http wsmynha kmn http 
const { url } = require('inspector')
const server=http.createServer((req,res)=>{  //hon bt5l2 server jded samyna 'server' | (req) wel (res) objects 
   
    res.setHeader('content-type','text/html')
   if (req.url=='/homee'){
    res.statusCode=200
    res.write('welcome to home')
   }else if(req.url=='/about'){
    res.statusCode=200
       res.write('welcome to about')
   }else if(req.url=='/contact'){
    res.statusCode=200
       res.write('welcome to contact')
   }else { 
    res.statusCode=404
      res.write('page not found')
    }
    //  res.write(req.url) // hay bt8ne 3n res.write('fadelll\n')hay lt7ta d8re
     
   // res.write('fadelll\n') //hon btktb sho  bdk ybyn 3l saf7a
 //res.write('welcome hussein\n') //hon btktb sho  bdk ybyn 3l saf7a
   res.end() //hay yale bt5le nas5 3al saf7a ybyn 
}
)
server.listen(3001,()=>{console.log('server is running')}) 
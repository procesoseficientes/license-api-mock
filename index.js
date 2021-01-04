const port = process.env.PORT || 5000
const http = require("http");
  const server = http.createServer(function(req,res){
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({Resultado: 1}));
});
server.listen(port, function(){
  console.log(`server listening on port ${port}`);
});
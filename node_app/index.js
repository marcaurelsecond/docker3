const express = require('express')
const app = express()
const port = 3000
var redis = require('redis')
var client = redis.createClient({
        host: process.env.redis_host
})

console.log("Redis_host", process.env.redis_host)

client.on('error', function (err) {
  console.log('Error ' + err)
})


const KEY = "counter";

client.set(KEY,0)

app.get('/', (req, res) => {

    client.get( KEY, function(err, reply) {

        client.incr(KEY)

        res.send(reply.toString())
      });
    
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
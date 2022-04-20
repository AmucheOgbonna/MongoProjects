const fs = require("fs");
const server = require("http").createServer();

const start = Date.now();
server.on("request", (req, res) => {
  //Solution 1

  // fs.readFile("./HowNodeWorks/joint.txt", (err, data) => {
  //   if (err) console.log(err);
  //   res.end(data);
  //   console.log(Date.now() - start);
  // });

  // Solution 2: Streams
  // const readable = fs.createReadStream("./HowNodeWorks/joint.txt");
  // readable.on("data", (chunk) => {
  //   res.write(chunk);
  //   console.log(Date.now() - start);
  // });
  // readable.on("end", () => {
  //   res.end();
  // });
  // readable.on("error", (err) => {
  //   console.log(err);
  //   res.statusCode = 500;
  //   res.end("FIle not found");
  // });

  // Solution 3: Using Pipe
  const readable = fs.createReadStream("./HowNodeWorks/joint.txt");
  readable.pipe(res); // READABLESOURCE.pipe(WRITABLEDESTINATION)
  console.log(Date.now() - start);
});

server.listen(7001, "127.0.0.1", () => {
  console.log("Listening......");
});

const EventEmitter = require("events");
const http = require("http");

const myEmitter = new EventEmitter();

class Sales extends EventEmitter {
  constructor() {
    super();
  }
}

myEmitter.on("newSale", () => {
  console.log("This is Anthonia Nwuka Stores");
});
myEmitter.on("newSale", () => {
  console.log("New top arrivals in town");
});
myEmitter.on("newSale", (quantity) => {
  console.log(`There are ${quantity} in number`);
});
myEmitter.emit("newSale", 9);

///////////////////////////////////////

const server = http.createServer();

server.on("request", (req, res) => {
  console.log(" Request received");
  res.end("Request received");
});

server.on("request", (req, res) => {
  console.log("Another Request received");
});
server.on("Close", (req, res) => {
  console.log("Server closed");
});

server.listen(7000, "127.0.0.1", () => {
  console.log("Waiting for responses...");
});

const fs = require("fs");

const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === "/") {
    res.setHeader("content-type", "text/html");
    res.write("<html>");
    res.write("<head><title>Enter Message</title></head>");
    res.write(
      "<body><form action='/message' method='POST'><input type='text' name='message'><button type='submit'>Send</button></form></body>"
    );
    res.write("</html>");
    return res.end();
  }

  if (url === "/message" && method === "POST") {
    const body = [];
    req.on("data", (chumk) => {
      console.log(chumk);
      body.push(chumk);
    });

    req.on("end", () => {
      const parseBody = Buffer.concat(body).toString();
      const message = parseBody.split("=")[1];
      fs.writeFileSync("Text.txt", message, (error) => {
        console.log(error);
      });
    });

    res.statusCode = 302;
    res.setHeader("Location", "/");
    return res.end();
  }

  res.setHeader("content-type", "text/html");
  res.write("<html>");
  res.write("<head><title>NodeJs</title></head>");
  res.write("<body><h1>Welcome to the nodeJS</h1></body>");
  res.write("</html>");
  res.end();
};

module.exports = requestHandler;

const http = require('http');
const PORT_1 = 7000;

const meanPhrases = ["Negative comment", "Nope"];
const nicePhrases = ["Positive Comment", "Yup"];
// => is another way of saying function
const handleRequest1 = (request, response) => {
    response.end(meanPhrases[Math.floor(Math.random() * meanPhrases.length)]);
};

const server_1 = http.createServer(handleRequest1);
// remember the backtick, that's on line 11
server_1.listen(PORT_1, function() {
    console.log(`Server listening on port: ${PORT_1}.`);
});

const PORT_2 = 7500;
// => is another way of saying function
const handleRequest2 = (request, response) => {
    response.end(nicePhrases[Math.floor(Math.random() * nicePhrases.length)]);
};

const server_2 = http.createServer(handleRequest2);
// remember the backtick, that's on line 11
server_2.listen(PORT_2, function() {
    console.log(`Server listening on port: ${PORT_2}.`);
});
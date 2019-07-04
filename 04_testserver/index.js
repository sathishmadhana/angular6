var express = require("express");
var cors = require("cors");
var fs = require("fs");
var app = express();

app.use(cors());

app.get("crminfo", (req, resp) => {
    var customer = {};
    console.log("in crm");
    customer.name = 'sathish';
    customer.password = 'pass';
    resp.end(JSON.stringify(customer));
});

console.log('Listening...');
app.listen(5020);
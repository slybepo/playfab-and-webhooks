handlers.hello = function(args) {
var contentBody = {
    "content": "Hello " + currentPlayerId+ " ! " // your text
};
var url = "";// the webhook url
var method = "post";
var contentType = "application/json";
var headers = {};
var responseString =  http.request(url,method,JSON.stringify(contentBody),contentType,headers);
}

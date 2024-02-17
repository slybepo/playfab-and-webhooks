var contentBody = {
    "content": "Hello " + currentPlayerId + " ! " //add your text there 
};
var url = "";
var method = "post";
var contentType = "application/json";
var headers = {};
var responseString =  http.request(url,method,JSON.stringify(contentBody),contentType,headers);

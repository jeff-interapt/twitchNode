const request = require("request");
const async = require("async");
var accessToken = '';
const options = {
    url: 'https://id.twitch.tv/oauth2/token',
    json:true,
    body: {
    client_id: 'w90oqmu9u0of2vsh0xnv6qxivn8bko',
    client_secret: '548agyhmyp8eca5cc7xvyi6jcsn2t8',
    grant_type: 'client_credentials'
    }
};






request.post(options, (err,res,body)=>{
    if(err){
        return console.log(err);
    }
    console.log('Status: ${res.statusCode}');
    console.log(body.access_token);
    return  accessToken = body.access_token;
    
});




const gameOptions = {
    url: 'https://api.twitch.tv/helix/games/top',
    json:true,
    client_id: 'w90oqmu9u0of2vsh0xnv6qxivn8bko',
    Authorization: 'Bearer ' + accessToken,
    timeout: 5000
}
if(!accessToken){
    console.log("No Token");
}else{
request.get(gameOptions,(err,res,body) => {
    if(err){
        return console.log(err);
    }
    console.log('Status: ${res.statusCode}');
    console.log(body);
});

};
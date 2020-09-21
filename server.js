const request = require("request");
const async = require("async");
var accessToken = '';


function gameRequest(accessToken){
    setTimeout(() => {
    const gameOptions = {
        url: 'https://api.twitch.tv/helix/games/top',
        method: 'GET',
        headers:{
            'Client-ID': 'w90oqmu9u0of2vsh0xnv6qxivn8bko',
            'Authorization': 'Bearer ' + accessToken
        }
    }
    if(!accessToken){
        console.log("No Token");
    }else{
        console.log(gameOptions);
    
    const gameRequest = request.get(gameOptions,(err,res,body) => {
        if(err){
            return console.log(err);
        }
        
        console.log('Status: ${res.statusCode}');
        console.log(JSON.parse(body));
    });
    
    };
    
    },2000)
    }
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
    gameRequest(body.access_token);
    
});



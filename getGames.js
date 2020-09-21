
function getGames(accessToken){

const gameOptions = {
    url: 'https://api.twitch.tv/helix/games/top',
    json:true,
    client_id: 'w90oqmu9u0of2vsh0xnv6qxivn8bko',
    Authorization: 'Bearer ' + accessToken,
    timeout: 5000
}

request.get(gameOptions,(err,res,body) => {
    if(err){
        return console.log(err);
    }
    console.log('Status: ${res.statusCode}');
    console.log(body);
});
};
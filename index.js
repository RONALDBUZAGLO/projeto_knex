const database = require('./database');


async function  testeTransacao(){

    try{
        await database.transaction(async trans => {
            await database.insert({nome: "Qualquer nome"}).table("estudios");
            await database.insert({nome: "Pixerelia"}).table("estudios");
            await database.insert({nome: "Mojang"}).table("estudios");
            await database.insert({nome: "Gearbox"}).table("estudios");
        })
    }catch(arr){
        console.log(err);
    }
    
    

}

testeTransacao();

//relacionamento M para M
// database.select()
//     .table("games_estudios")
//     .innerJoin("games","games.id","games_estudios.game_id")
//     .innerJoin("estudios","estudios_id","games_estudios.estudios_id")
//     .where("games.id",8)
//     .then(data=>{
//         console.log(data);
//     }).catch(err=>{
//         console.log(err);
//     });

//relacionamento 1 para M
// database.select(['games.*','estudios.nome as estudio_nome'])
//     .table("games")
//     .innerJoin("estudios","estudios.game_id","games.id")
//     .then(data=>{
//         var estudiosGamesArray = data;
//         var game = {
//             id: 0,
//             nome: "",
//             estudios: [],
//         }
//         game.id = data[0].id;
//         game.nome = data[0].nome;

//         data.forEach(estudio => {
//             game.estudios.push({nome: estudio.estudio_nome});
//         });
//         console.log(game);

//     }).catch(err=>{
//         console.log(err);
//     });

//RELACIONAMENTO 1 PARA 1
// database.select(['games.*','estudios.nome as estudio_nome'])
//     .table("games")
//     .innerJoin("estudios","estudios.game_id","games.id")
//     .then(data=>{
//         console.log(data);
//     }).catch(err=>{
//         console.log(err);
//     });

// database.select(['games.id','estudios.id as est_id','games.nome as game_nome','estudios.nome as estudios_nome'])
//     .table("games")
//     .innerJoin("estudios","estudios.game_id","games.id")
//     .then(data=>{
//         console.log(data);
//     }).catch(err=>{
//         console.log(err);
//     });


//INSERTS ASSOCIADOS
// database.insert({
//     nome: "Blizzard",
//     game_id: 5
// }).table("estudios").then(data=>{
//     console.log(data);
// }).catch(err =>{
//     console.log(err);
// })



// database.select().table("games").orderBy("preco","asc"/*'asd'*/).then(data=>{
//     console.log(data);
// }).catch(err=>{
//     console.log(err);
// });//desc//asc

//UPDATE
// database.where({id:5})
//     .update({preco:30})
//     .table("games")
//     .then(data=>{
//         console.log(data);
//     }).catch(arr=>{
//         console.log(arr);
//     });

//DELETE
// database.where({id:3}).delete().table("games").then(data=>{
//     console.log(data);
// }).catch(err=>{
//     console.log(err);
// });

//WHERE
// var query = database.where({nome: "Mists of Noyah"}).table("games");
// console.log(query.toQuery());

//WHERE SELECT
// var query = database.select(['id','preco']).where({nome: "Mists of Noyah"}).table("games");
// console.log(query.toQuery());

//WHERE RAW
// database.select(["id","preco"])
//     .whereRaw("nome = 'Mists of Noyah' OR preco > 50")
//     .table("games").then(data=>{
//         console.log(data);
//     }).catch(err=>{
//         console.log(err);
//     });

//NESTED QUERIES
/*database.insert({nome:"Mists of Noyah",preco:25}).into("games").then(data=>{
    database.select("id","preco").table("games").then(data =>{
        console.log(data);
    }).catch(err=>{
        console.log(err);
    });
    console.log(data);
}).catch(err => {
    console.log(err);
})*/

//SELECT
// database.select("id","preco").table("games").then(data =>{
//     console.log(data);
// }).catch(err=>{
//     console.log(err);
// });


//INSERT
/*var dados = [
    {
        nome : "LOL",
        preco : 30.56
    },
    {
        nome: "Game of Thrones",
        preco: 59.84
    },
    {
        nome: "WOW",
        preco: 26.96
    }
]


database.insert(dados).into("games").then(data=>{
    console.log(dados);
}).catch(err=>{
    console.log('Erro ao gravar no banco de dados: '+err);
});*/

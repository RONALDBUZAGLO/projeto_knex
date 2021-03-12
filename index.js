const database = require('./database');

//NESTED QUERIES
database.insert({nome:"Mists of Noyah",preco:25}).into("games").then(data=>{
    database.select("id","preco").table("games").then(data =>{
        console.log(data);
    }).catch(err=>{
        console.log(err);
    });
    console.log(data);
}).catch(err => {
    console.log(err);
})




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

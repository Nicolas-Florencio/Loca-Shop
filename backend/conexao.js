import mongoose from "mongoose";

export function conectarBanco() 
{
    const URL_BANCO = "mongodb://localhost:27017/LocaShop";

    mongoose.connection.on("open", () => {
        console.log("conectado com sucesso ao MongoDB.");
    });

     mongoose.connection.on("error", (erro) => {
        console.log("Erro na conexão com o MongoDB:", erro);
    });
    
    const conexao = mongoose.connect(URL_BANCO);
    return conexao;
};


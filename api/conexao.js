import mongoose from "mongoose";

export function conectarBanco() 
{
    const URL_BANCO = "mongodb://localhost:27017/LocaShop";

    mongoose.connection.on("open", () => {
        console.log("conectado com sucesso ao MongoDB.");
    });

    const conexao = mongoose.connect(URL_BANCO);
    return conexao;
};


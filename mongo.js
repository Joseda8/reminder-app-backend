const mongodb = require("mongodb");
const MongoClient = require("mongodb").MongoClient;

const db_mongo = "mongodb+srv://joseda8:joseda8@cluster0.hdfou.mongodb.net/BattleCounter?retryWrites=true&w=majority";
const dbName = "GenesisHealthCheck";
const dbCollectionName = "notes";

function do_query(query, info, dataCallback){

    MongoClient.connect(db_mongo, function(err, db) {
        if (err) throw err;
        
        var dbo = db.db(dbName);

        switch(query) {

            case "FIND_ALL":                    
                dbo.collection(dbCollectionName).find({}).toArray(function(err, result) {
                    if (err) throw err;
                    dataCallback(result);
                    db.close();
                });
                break;

            case "NEW_NOTE":
                dbo.collection(dbCollectionName).insertOne(info, (error, result) => {
                    if(error){dataCallback(error);}
                    else{dataCallback(result.insertedId.toString());}
                });
                break;

            case "REMOVE_NOTE":
                dbo.collection(dbCollectionName).deleteOne({_id: new mongodb.ObjectID(info)}, (error, result) => {
                    if(error){dataCallback(error);}
                    else{dataCallback(200);}
                });
                break;

            default:
                dataCallback("Consulta no encontrada");
          }

      });

}


module.exports = {
    do_query
};
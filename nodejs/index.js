/*const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('mydb.sqlite');

db.serialize(function() {
  db.run("CREATE TABLE lorem (info TEXT)");
  var stmt = db.prepare("INSERT INTO lorem VALUES (?)");
  for (var i = 0; i < 10; i++){
    stmt.run("Kovalchuk" + i);
  }
  stmt.finalize();

  db.serialize(function() {
    db.run("INSERT INTO users (name) VALUES ('John')");
  });

  db.each("Select rowid AS id, info FROM lorem", function(err, row){
    console.log(row.id+ ": " + row.info);
  });
});


db.close();
*/
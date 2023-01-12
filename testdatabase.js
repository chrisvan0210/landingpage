const sqlite3 = require('sqlite3');
const { open } = require('sqlite');
// this is a top-level await 
(async () => {
    // open the database
    const db = await open({
      filename: './database.sqlite',
      driver: sqlite3.Database
    }); 
  await db.migrate({ migrationsPath:'./migrations',force: true});
    const result = await db.get('SELECT * FROM Admin');
    console.log(result);
    const result2 = await db.get('SELECT * FROM Information');
    console.log(result2);
    await db.close();
})()

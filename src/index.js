const db = require('./database');

(async () => {
  try {
    await db.poolConnect;

    const request = db.pool.request();

    const result = await request
      .input('Name', db.sql.VarChar, 'Édipo Juan')
      .input('YearsOld', db.sql.Int, 31)
      .query('SELECT @Name AS Name, @YearsOld AS YearsOld');

    const { recordset } = result;

    console.dir(recordset);
  } catch (error) {
    console.log(`Ops! ${error}`);
    console.error('Check "./src/config"');
  } finally {
    db.pool.close();
  }
})();

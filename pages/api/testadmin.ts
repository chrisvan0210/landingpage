// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import sqlite3 from 'sqlite3'
import { open } from 'sqlite'

type Data = {
  adm: object,
  pageInfo: object
}

export default function Admin(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
 
  // this is a top-level await 
  const getAdmin = async () => {
      // open the database
      const db = await open({
        filename: './database.sqlite',
        driver: sqlite3.Database
      }); 
    await db.migrate({ migrationsPath:'./migrations',force: true});
      const result = await db.get('SELECT * FROM Admin');
      const result2 = await db.get('SELECT * FROM Information');
      res.status(200).json({
        adm: result,
        pageInfo: result2
      })
      await db.close();
  }
  getAdmin();
  
}

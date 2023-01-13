import React, { useState,useEffect } from 'react'
import { GetStaticProps, GetStaticPaths, GetServerSideProps, NextApiRequest ,NextApiResponse} from 'next'
import sqlite3 from 'sqlite3'
import { open } from 'sqlite'
import { useRouter } from 'next/router'

interface DBdata {
    result:{
        username:string;
        password:string;
    }
}

function Adminfb88({result}:DBdata) {
    const [isLogin,setIsLogin] = useState(true)
    const router = useRouter()
   
    useEffect(() =>{if(!isLogin) router.push('login')},[])

    return (
        <>
        <pre>{JSON.stringify(result,null,4)}</pre>
        <div>admin</div>
        </>
        
    
    )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
        const db = await open({
        filename: './database.sqlite',
        driver: sqlite3.Database
      }); 
    //   await db.migrate({ migrationsPath:'./migrations',force: true});
      const result = await db.get('SELECT * FROM Admin');
      const result2 = await db.get('SELECT * FROM Information');
      await db.close();

    return {
        props: {result},
      }
  }


export default Adminfb88

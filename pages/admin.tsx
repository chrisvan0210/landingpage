import React, { useState,useEffect } from 'react'
import { GetStaticProps, GetStaticPaths, GetServerSideProps, NextApiRequest ,NextApiResponse} from 'next'
import sqlite3 from 'sqlite3'
import { open } from 'sqlite'
import { useRouter } from 'next/router'



function admin() {
    const [isLogin,setIsLogin] = useState(false)
    const router = useRouter()
   
    useEffect(() =>{if(!isLogin) router.push('login')},[])

    return (
        <div>admin</div>
    
    )
}

export const getServerSideProps: GetServerSideProps = async (context) => {


    return {
        props: {},
      }
  }


export default admin

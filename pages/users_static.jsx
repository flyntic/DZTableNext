
import TableUsers from "../components/tableUsers"
import {useState} from 'react';

export default function UsersStatic( {propsUsers}){
   
    return (<>
        <h1>Таблица статических пользователей</h1>
        <TableUsers Users={propsUsers}/>
        </>);
  }

export function getStaticProps(){
    const propsUsers=[
        {id:1,name:"iqwope",   address:"sdasd"},
        {id:2,name:"i452qwope",address:"s242dasd"}
    ];
   
    return {props:{propsUsers}}
  }

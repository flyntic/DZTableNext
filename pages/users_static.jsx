
import TableUsers from "../components/tableUsers"
import UserActions from "../components/UserActions";
import {useState,useEffect} from 'react';

export default function UsersStatic( {propsUsers}){
   const [Users,setUsers]=useState(propsUsers),       
          Actions= UserActions(Users,setUsers) ;
          console.log(Actions);
    return (<>
        <h1>Таблица статических пользователей</h1>
        <TableUsers Users={Users} 
                   Actions={Actions}                  
           />
       </>);
  }

export function getStaticProps(){
    const propsUsers=[
        {id:1,name:"iqwope",   address:"sdasd"},
        {id:2,name:"i452qwope",address:"s242dasd"}
    ];
   
    return {props:{propsUsers}}
  }

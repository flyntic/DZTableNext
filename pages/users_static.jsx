
import TableUsers from "../components/tableUsers"
<<<<<<< HEAD
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
=======
import {useState} from 'react';

export default function UsersStatic( {propsUsers}){
   
    return (<>
        <h1>Таблица статических пользователей</h1>
        <TableUsers Users={propsUsers}/>
>>>>>>> dba8acd2d78088f32a47e010737cee0657ecd905
        </>);
  }

export function getStaticProps(){
    const propsUsers=[
<<<<<<< HEAD
        {id:1, name:"iqwope",   address:"sdasd"},
        {id:2, name:"i452qwope",address:"s242dasd"}
=======
        {id:1,name:"iqwope",   address:"sdasd"},
        {id:2,name:"i452qwope",address:"s242dasd"}
>>>>>>> dba8acd2d78088f32a47e010737cee0657ecd905
    ];
   
    return {props:{propsUsers}}
  }

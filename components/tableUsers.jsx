import { UserColumns } from "./UserColumns";
import {User} from "./user";
<<<<<<< HEAD

export default function TableUsers({Users,Actions})
{    console.log(Users);
    if(Users && Users[0]) 
      return (<table>   
          <UserColumns user={Users[0]}/>  
          {Users.map((user)=> 
             <User key={user.id}  user={user} 
                   Actions={Actions}
                  
                   
            />)}                     
=======
export default function TableUsers({Users})
{    console.log(Users);
    if(Users) 
      return (<table>   
          <UserColumns user={Users[0]}/>  
          {Users.map((user,index)=><User key={index}  user={user}/>)}                     
>>>>>>> dba8acd2d78088f32a47e010737cee0657ecd905
      </table>);
    
      return <><span>Пользователей нет</span></>;
}

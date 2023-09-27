import { UserColumns } from "./UserColumns";
import {User} from "./user";
export default function TableUsers({Users})
{    console.log(Users);
    if(Users) 
      return (<table>   
          <UserColumns user={Users[0]}/>  
          {Users.map((user,index)=><User key={index}  user={user}/>)}                     
      </table>);
    
      return <><span>Пользователей нет</span></>;
}

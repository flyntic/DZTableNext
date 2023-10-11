import { UserColumns } from "./UserColumns";
import {User} from "./user";


export default function TableUsers({Users,Actions})
{   
    if(Users && Users[0]&&Array.isArray(Users)) 
      return (<table>   
          <UserColumns user={Users[0]}  Actions={Actions}/>  
          {Users.map((user)=> 
             <User key={user.id}  user={user} 
                   Actions={Actions}
            />)}                     

      </table>);
    
      return <><span>Пользователей нет</span></>;
}

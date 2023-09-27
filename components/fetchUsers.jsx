import { useEffect, useState } from 'react';
import {User} from './user';
import {UserColumns } from "./UserColumns";
import Spinner from './Spinner';


export function FetchUsers() {
  const
    [users, setUsers] = useState(null),
    [error, setError] = useState(null);

  useEffect(() => {
    async function f() {
      try {
        setError(null);
        const
          res = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!res.ok) throw new Error('fetch error');
        setUsers(await res.json());
      } catch (err) {
        setError(err);
      }
    }
    f();
  }, []);
console.log(users);

if (error) return <h2 style={{ color: 'red' }}>{error.toString()}</h2>;
if (users)
{ 
  return(
    <>
      <UserColumns user={users[0]}/>    
      { users.map(user=><User key={user.id}  user={user}/>)}    
    </>
    );
} 
return <Spinner/>;
};

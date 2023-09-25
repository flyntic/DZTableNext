import { useEffect, useState } from 'react';
import {User,UserColumns} from './user';
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


if (error) return <h2 style={{ color: 'red' }}>{error.toString()}</h2>;
if (users)
{ 
  return <>{users.map(user=><User user={user} />)}</>;
} 
return <Spinner/>;
}

export function Columns()
{ 
  return UserColumns().map(col=><th>{col}</th>);
  //User.arguments.map(col=><th>{col}</th>);
}
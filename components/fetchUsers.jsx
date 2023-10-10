import { useEffect, useState } from 'react';
import Spinner from './Spinner';
import TableUsers from './tableUsers';


export default function FetchUsers() {
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
  console.log(users);
<<<<<<< HEAD
=======
  //var _users=users.map((user,index)=>{key:index,user});
  //console.log(_users);
>>>>>>> dba8acd2d78088f32a47e010737cee0657ecd905
  return (<TableUsers Users={users}/>);
} 
return <Spinner/>;
}

export function UserColumns({ user,Actions }) {
  let cols = [];

  if(!user) return <> </>;
  
  Object.keys(user).forEach(k=>cols.push(k));
     
  console.log(cols);
 
  return (
    <>
     {cols.map((col,index) => 
     <th key={index}>
        <input type="button" value={col} onClick={(evt,index)=>{Actions.SetFilter(index);}}/>
     </th>)}
    </>
  );

}


export function UserColumns({ user }) {
  let cols = [];
  if(!user) return <> </>;
  
  Object.keys(user).forEach(k=>cols.push(k));
     
  console.log(cols);
 
  return (
    <>
     {cols.map((col,index) => <th key={index}>{col}</th>)}
    </>
  );

}


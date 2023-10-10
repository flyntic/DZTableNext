export function UserColumns({ user }) {
  let cols = [];
<<<<<<< HEAD
  if(!user) return <> </>;
  
=======
>>>>>>> dba8acd2d78088f32a47e010737cee0657ecd905
  Object.keys(user).forEach(k=>cols.push(k));
     
  console.log(cols);
 
  return (
    <>
     {cols.map((col,index) => <th key={index}>{col}</th>)}
    </>
  );

}


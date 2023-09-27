
export function UserColumns({ user }) {
  var cols = [];
  for (var i in user) {
    if (user.hasOwnProperty(i)) {
      cols.push({key:cols.length,value:i});
    }
  }
 
  return (
    <>
     {cols.map((col, index) => <th key={index}>{col.value}</th>)}
    </>
  );

}

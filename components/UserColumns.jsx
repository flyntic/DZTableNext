/*
 <td> {id}</td>
       <td> <h3>{name}</h3></td>
       <td ClassName="UserName">{username}</td>
       <td> 📧<a href={`mailto:${email}`}>{email}</a></td>
       <td> 📞<a href={`tel:${phone}`}>{phone}</a></td>
       <td> 🌐<a href={`http://${website}`}>{website}</a></td>
       <td title={zipcode}><a href={`https://maps.google.com/maps?ll=${lat},${lng}`}>{street},{suite},{city}</a></td>
       <td> <b>{cname}</b><br />{catchPhrase}<br />{bs}</td>
*/

export function UserColumns({ user }) {
  var cols = [];
  for (var i in user) {
    if (user.hasOwnProperty(i)) {
      cols.push(i);
    }
  }
  console.log(cols);
  return (
    <>
     {cols.map(col => <th>{col}</th>)}
    </>
  );

}

export function User({user}) 
{
  let cols=[ ];
    for (var i in user) {
      if (user[i]) {
        cols.push({colname:i,value:user[i]});
      }
    }
  //console.log(cols);
  return (
    <>
    <tr>
        { 
          cols.map((i)=> <td ClassName={i.colname} >{i.value}</td>)
        }      
      </tr> 
    </>
  );
};

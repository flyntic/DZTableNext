function ToStringObj(obj)
{
  let str="";

  if(obj!==0)  
   { 
     if(( Object.keys(obj)==0) || (Object.keys(obj)[0]==0 ))
     {
        str=obj;
     }
     else 
      {Object.keys(obj).forEach(k=> str=str.concat(k,":",obj[k]," "));
        
      }
    }
  return str;
 }

export function User({user}) 
{
  let cols=[ ];
  if(user)
      Object.keys(user).forEach(k => 
        {
          let value=ToStringObj(user[k]);
          cols.push({colname:k, value:value});
         } );
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

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


export function User({user,Actions}) 
{
  let cols=[ ];
  let index=0;
  const indexEdit=Actions.GetIndexEdit();
  if(user==null) return <></>;
  const keys= Object.keys(user);

  for (let i=0;i<keys.length;i++) 
        {
          let value=ToStringObj(user[keys[i]]);    
          console.log(value);      
          cols.push({index:i, colname:keys[i], value:value});
         } ;

  // console.log(Actions);   
  if (user.id==indexEdit)
  return (
    <>
    <tr>
      {
         cols.map((i)=> { if(i.index!=0)
          {  <td><input type="text" value={user[i.colname]} class="editing"
                               onChange={(evt)=>{user[i.colname]=evt.target.value;Actions.Save(user)}}/> </td>     } 
             else  <td ClassName={i.colname} >{i.value}</td>
              })
            }
        <td>
           <input type="button" title="Сохранить"  value="Сохранить" onClick={() =>   Actions.SetIndexSave(1) }/>
        </td>  
        <td>
           <input type="button" title="Отменить"  value="Отменить" onClick={() =>  Actions.SetIndexSave(-1) }/>
        </td>  
      </tr> 
    </>
  );
  else

  return (
    <>
    <tr>
      
        { 
           cols.map((i)=> <td ClassName={i.colname} >{i.value}</td>)
        } 
        <td>
          <input type="button" title="Удалить" value="Удалить" onClick={(evt,val=user.id) =>  Actions.SetIndexDel(user.id) }/>
        </td>     
        <td>
          <input type="button" title="Редактировать"  value="Редактировать" onClick={(evt,val=user.id) =>  Actions.SetIndexEdit(user.id)}/>
        </td>  
      </tr> 
    </>
  );
     

};

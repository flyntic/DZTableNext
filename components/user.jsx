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
  const indexEdit=Actions.GetIndexEdit();
  if(user==null) return <></>;
  else
  Object.keys(user)?.forEach(k => 
        {
          let value=ToStringObj(user[k]);
          cols.push({colname:k, value:value});
         } );

   console.log(Actions);   
  if (user.id==indexEdit)
  return (
    <>
    <tr>
        { 

           cols.map(
              (i)=> 
                   <td><input type="text" value={user[i.colname]} class="editing"
                     onChange={(evt)=>{user[i.colname]=evt.target.value;Actions.Save(user)}}/> </td>
           )
        } 
        <td>
           <input type="button" title="Сохранить"  value="Сохранить" onClick={() =>   Actions.SetIndexSave(user.id) }/>
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

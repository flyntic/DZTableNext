function ToStringObj(_obj,edit,save)
{
  let obj=_obj;  

  if(obj!==0)  
   { 
     if(( Object.keys(obj)==0) || (Object.keys(obj)[0]==0 ))
     {
      if (!edit)  return obj;
      return  <input type="text" value={obj} class="editing"
                     onChange={(evt)=>{obj=save(evt.target.value);}}/>
     }
     else 
      {
        let keys= Object.keys(obj);
        if (!edit)
         return (
          <>{
            keys.map((i)=>{
              return <div>{i}:{obj[i]}</div>
             })
            }</>
         );
        else 
        return (
          <>{
            keys.map((i)=>{
              return <div>
                        <div>{i}:</div>
                        <input type="text" value={obj[i]} class="editing"
                                  onChange={(evt)=>{obj[i]=save(evt.target.value,i);}}/>
                      </div>
             })
            }</>
         );

      }
    }
 
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
          let value=ToStringObj(user[keys[i]],(user.id!=0) && (user.id==indexEdit),
                               (obj,n=0)=>{if (n==0) {user[keys[i]]=obj;Actions.Save(user);return user[keys[i]];}
                                              user[keys[i]][n]=obj;Actions.Save(user);return user[keys[i]][n];
                                           });    
          console.log(value);      
          cols.push({index:i, colname:keys[i], value:value});
         } ;

 
  if (user.id==indexEdit)
  return (
    <>
    <tr>
        { cols.map((i)=> 
        { 
           return  <td ClassName={i.colname}  >{i.value}</td>
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

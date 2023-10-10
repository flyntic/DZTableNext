import {useState,useEffect} from 'react';

export default function UserActions(Users,setUsers)
{
    const
    [indexSave,setIndexSave]=useState(0),
    [indexEdit,setIndexEdit]=useState(-1),
    [indexDel,setIndexDel]=useState(-1),         
    [userEdit,setUserEdit]=useState(),
    Actions={
        GetIndexEdit:()=>{return indexEdit;},
        SetIndexDel: function(i){console.log("dellll "+i);setIndexDel(i);},
        SetIndexEdit:function(i){console.log("edit "+i);setIndexEdit(i);},
        SetIndexSave:function(i){console.log("save "+i);setIndexSave(i);},
        Save:function (_user)
        {
            const _Users=[...Users];
            _Users[_Users.indexOf(u=>u.id==_user.id)]=_user; 
            setIndexEdit(_user.id);
            setUsers(_Users); 
            console.log("edit"+userEdit)
        }
    };

    useEffect(() => {
        function f() {
        if (indexDel > -1) { 
           setUsers(Users.filter((us)=>us.id!=indexDel )); 
           setIndexDel(-1);
        }
     }
    f();
    },  [indexDel]);

    useEffect(() => {
        function f() {
          console.log("index"+indexEdit);
          const _Users=[...Users];
          setUsers(_Users); 
          if (indexEdit!=-1)
              { 
                const user=_Users.filter(us=>us.id==indexEdit)[0]
                //console.log(user)
                setUserEdit(user)
                console.log(userEdit)
            }
          else  setUserEdit(null);
    } 
    f();
    }, [indexEdit]);

    useEffect(() => {
    function f() {
        if (indexSave==-1)
        { const index=Users.indexOf(u=>u.id==userEdit.id);
          Users[index]=userEdit; 
          console.log("Отмена");
        }
        else    console.log("Сохранение");
        const _Users=[...Users];
        setUsers(_Users); 
        setIndexEdit(-1);
    }
    f();
    }, [indexSave]);

    return (Actions);
}
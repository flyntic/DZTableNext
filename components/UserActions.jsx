import {useState,useEffect} from 'react';
function Compare(a,b,i)
{
  if (i>0)
  {
    if(a[i]>b[i]) return 1;
    if(a[i]==b[i]) return 0;
    if(a[i]<b[i]) return -1;
  }
  if (i<0)
  {
    if(a[i]>b[i]) return -1;
    if(a[i]==b[i]) return 0;
    if(a[i]<b[i]) return 1;
  }
  return 0;
}
export default function UserActions(Users,setUsers)
{
    const
    [indexSave,setIndexSave]=useState(0),
    [indexEdit,setIndexEdit]=useState(-1),
    [indexDel,setIndexDel]=useState(-1),         
    [userEdit,setUserEdit]=useState(),
    [filter,setFilter]=useState(0),
    Actions={
        GetIndexEdit:function (){return indexEdit;},
        SetIndexDel: function(i){console.log("dellll "+i);setIndexDel(i);},
        SetIndexEdit:function(i){console.log("edit "+i);setIndexEdit(i);},
        SetIndexSave:function(i){console.log("save "+i);setIndexSave(i);},
        SetFilter:   function(i){if (filter==i)setFilter(-1*i); else setFilter(i);},
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
          //const _Users=[...Users];
          setUsers(Users); 
          if (indexEdit!=-1)
              { 
                const user=Users.filter(us=>us.id==indexEdit)[0]
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
      //  const _Users=[...Users];
        setUsers(Users); 
        setIndexEdit(-1);
    }
    f();
    }, [indexSave]);

    useEffect(() => {
        function f() {
            if (filter>0)
            { //const index=Users.indexOf(u=>u.id==userEdit.id);
             // Users[index]=userEdit; 
             // console.log("Отмена");
             setUsers(Users.sort(
                (a,b)=>{return Compare(a,b,filter);}));
            }
            else    console.log("Сохранение");
          //  const _Users=[...Users];
            setUsers(Users); 
            setIndexEdit(-1);
        }
        f();
        }, [filter]);

    return (Actions);
}
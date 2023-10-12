import {useState,useEffect} from 'react';
function CompareOb(a,b,i)
{ 
  
  const key=((i)>0)?Object.keys(a)[i-1]:Object.keys(a)[-(i+1)];  
  
  i=(i>0) ? 1 : -1;
 
    if(a[key]>b[key]) return i;
    if(a[key]==b[key]) return 0;
    if(a[key]<b[key])   return -i;
 
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
            setIndexSave(0);
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
            if(Users && Users[0]&&Array.isArray(Users)) 
            {
                const _Users=[...Users];;
                setUsers(_Users); 
                if (indexEdit!=-1)
                    { 
                        const user=Object.assign({}, Users.filter(us=>us.id==indexEdit)[0]);
                        setUserEdit(user)
                       
                    }
            }
        }
    f();
    }, [indexEdit]);

    useEffect(() => {
    function f() {
        
        if (indexSave==0)
         return;      
        const _Users=[...Users];

        if (indexSave==-1)
        { 
          const _Users=Users.map(u=>{ if (u.id==userEdit.id) return userEdit; return u; });
          setUsers(_Users); 
          console.log(userEdit);          
        }
        else{
            const _Users=[...Users];
            setUsers(_Users); 
        }
        
        
        setIndexEdit(-1);
    }
    f();
    }, [indexSave]);

    useEffect(() => {
        function f() {
            if(Users && Users[0]&&Array.isArray(Users)) 
            {
                const _Users= [...Users];
                _Users.sort((a,b)=>{return CompareOb(a,b,filter);});
                setUsers(_Users);
                console.log("Сортировка 1055 ",Users);
            }
            

             setIndexEdit(-1);
        }
        f();
        }, [filter]);

    return (Actions);
}

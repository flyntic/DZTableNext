/*
import { useEffect, useState } from 'react';
import 
const
  API_URL = 'https://jsonplaceholder.typicode.com/users',
  config = {
    API_URL,
    columns: [
      { title: 'ID', getVal: obj => obj.id },
      { title: 'Name', getVal: ({ name }) => name, setVal: name => ({ name }) },
      { title: 'Email', getVal: ({ email }) => email, setVal: email => ({ email }) },
      { title: 'Address', getVal: ({ address: { street, suite, city } }) => `${city}, ${street} ${suite}`, },
      { title: 'Website', getVal: ({ website }) => website, setVal: website => ({ website }) },
      { title: 'Phone number', getVal: ({ phone }) => phone },
    ]
   
  };

  
function GenTable({ data, columns}) {
  return <table className={style.gentable}>
    <thead>
      <tr>
        {columns.map(({ title }, index) =>
          <th
            key={title}
            >
            {title}
          </th>)}
      </tr>
    </thead>
    <tbody>
      {data.map(obj => <Fragment key={obj.id}>
        {String(obj.id) === String(editedId)
          ? <>{children}</>
          : <tr key={obj.id}>
            {columns.map(({ title, getVal }) => <td key={title}>{getVal(obj)}</td>)}
          </tr>}
      </Fragment>
      )}
    </tbody>
    <tfoot>
      {!editedId && <>{children}</>}
    </tfoot>
  </table>;
}


function Form({ columns, values, setValues }) {
  return <tr>
    {columns.map(({ title, setVal }, index) =>
      <td key={title}>
        {setVal
          ? <input value={values[index]} onInput={evt => setValues(old => old.with(index, evt.target.value))} />
          : '...'
        }
      </td>)}
  </tr>;
}


function MainJsonSource({ config: { fetcher, columns, genObj, API_URL } }) {
  const
    [data, setData] = useState(null),
    [values, setValues] = useState(columns.map(() => '-'));

  return <div>
    <div style={{ position: 'absolute', fontSize: 'xxx-large' }}>
    </div>
    {data &&
      <GenTable data={data} columns={columns} >
        <Form columns={columns} values={values} setValues={setValues} />
      </GenTable>}

  </div>;
}

export default function JsphPage(){
  console.log(config);
  return  <MainJsonSource config={config} />;
}
*/
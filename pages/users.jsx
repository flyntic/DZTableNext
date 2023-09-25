import {FetchUsers,Columns} from "../components/fetchUsers";
export default function Users(){
    return <>
        <h1>Таблица пользователей</h1>
        <table>
        <Columns/>
        <FetchUsers/>
        </table>
        </>;
  }
export function User({ user }) 
{
const  
{ id, name, username, email,
    address: { street, suite, city, zipcode, geo: { lat, lng } },
    phone, website,
    company: {
      name: cname,
      catchPhrase,
      bs
    }
  } = user;
  return (
    <>
      <tr>
      <td> <legend>#{id} {username}</legend> </td>
       <td> <h3>{name}</h3></td>
       <td> <span> 📧<a href={`mailto:${email}`}>{email}</a>📞<a href={`tel:${phone}`}>{phone}</a></span></td>
       <td> <span>🌐<a href={`http://${website}`}>{website}</a></span></td>
       <td> <span title={zipcode}><a href={`https://maps.google.com/maps?ll=${lat},${lng}`}>{street},{suite},{city}</a></span></td>
       <td> <span><b>{cname}</b><br />{catchPhrase}<br />{bs}</span> </td>
      </tr>
    </>
  );
};

export function UserColumns() 
{const cols=[ 
   "name", "username", "email",
    "address",
    "phone", "website",
    "company"];
    return cols;
  
}
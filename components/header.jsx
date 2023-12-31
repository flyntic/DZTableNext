import Link from 'next/link';
//import styles from '../ ./styles/global.css';

const pages = [
  { href: '/', name: 'Home' },
  { href: '/users', name: 'Users' },
  { href: '/users_static', name: 'Users from Static' },
];


export default function Header() {
  return <header>
    <nav >
      <ul>
        {pages.map(({ href, name }) =>
          <li key={href}>
            <Link href={href}>{name}</Link></li>)}
      </ul>
    </nav>
  </header>;
}
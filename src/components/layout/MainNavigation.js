import styles from './MainNavigation.module.css';
import { NavLink } from 'react-router-dom';

const MainNavigation = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>Good Quotes</div>
      <nav className={styles.nav}>
        <ul>
          <li>
            <NavLink to='/quotes' activeClassName={styles.action}>
              All Quotes
            </NavLink>
          </li>
          <li>
            <NavLink to='/new-quotes' activeClassName={styles.action}>
              Add a Quotes
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;

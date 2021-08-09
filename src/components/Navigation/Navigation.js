import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";
const Navigation = () => (
  <nav>
    <ul className={styles.list}>
      <li>
        <NavLink
          exact
          to="/"
          className={styles.link}
          activeClassName={styles.activeLink}
        >
          HOME
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/movies"
          className={styles.link}
          activeClassName={styles.activeLink}
        >
          Movies
        </NavLink>
      </li>
    </ul>
  </nav>
);
export default Navigation;

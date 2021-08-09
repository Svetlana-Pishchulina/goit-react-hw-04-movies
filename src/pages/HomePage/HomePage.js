import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import Api from "../../servises/movies-api";
import styles from "./HomePage.module.css";

const HomePage = () => {
  const location = useLocation();
  const [list, setList] = useState([]);

  useEffect(() => {
    Api.fatchTrending().then((list) => {
      setList(list);
    });
  }, []);

  return (
    <div className={styles.homeContainer}>
      <h1>Trending today</h1>
      <ul>
        {list.map(({ title, id, name }) => (
          <li key={id}>
            {/* <Link to={`movies/${id}`}>{title ?? name}</Link> */}
            <Link to={{ pathname: `movies/${id}`, state: { from: location } }}>
              {title ?? name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;

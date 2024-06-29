import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";
export default function MainNavigation() {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            {/* navLink is replacement of Link with addn feature */}
            <NavLink
              to='/'
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              // style={({ isActive }) => ({
              //   textAlign: isActive ? "center" : 'left',
              // })}
              end
              // end is boolean with shows the url should end with /(in this case) and  then the classname would be applied
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/products'
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Products
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

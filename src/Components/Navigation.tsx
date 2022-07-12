import { NavLink } from "react-router-dom";
const Navigation = () => {
  return (
    <div className="navigation">
      <NavLink exact to="/" activeClassName="nav-action">
        Accueil
      </NavLink>
      <NavLink exact to="a-propos" activeClassName="nav-action">
        A Propos
      </NavLink>
    </div>
  );
};
export default Navigation;

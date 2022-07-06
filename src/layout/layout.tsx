import { Fragment } from "react";
import Navigation from "../Components/Navigation";
import Logo from "../Components/Logo"
const layout = ({ children }: any) => {
  return (
    <Fragment>
      <header>
        <Navigation />
        <Logo/>
      </header>
      <main>{children}</main>
    </Fragment>
  );
};

export default layout;

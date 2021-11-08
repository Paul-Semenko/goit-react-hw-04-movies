import Navigation from "./Navigation";

import s from "./NavBar.module.css";

const AppNavBar = () => {
  return (
    <header className={s.Header}>
      <Navigation />
    </header>
  );
};

export default AppNavBar;

import { Link } from "react-router-dom";
import { AppRouter } from "./providers/router";
import './styles/index.scss'
import { classNames } from "shared/helpers/classNames/classNames";
import { useTheme } from "./providers/ThemeProvider";

export const App = () => {
  const { theme } = useTheme();
  return (
    <div className={classNames('app', [theme])} >
      <Link to='/'>Главная</Link>
      <Link to='/frontend'>Frontend</Link>
      <AppRouter />
    </div >
  );
};

import {AppRouter} from "app/prodivers/router";
import {useTheme} from "app/prodivers/ThemeProvider";
import {Link} from "react-router-dom";
import './styles/index.scss';
import {classNames} from "shared/lib/classNames/classNames";

export const App = () => {
    const {theme, toggleTheme} = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>Change theme</button>
            <Link to={'/'}>Main page</Link>
            <Link to={'/about'}>About page</Link>
            <AppRouter />
        </div>
    );
};

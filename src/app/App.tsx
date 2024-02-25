import {AppRouter} from "app/prodivers/router";
import {useTheme} from "app/prodivers/ThemeProvider";
import './styles/index.scss';
import {classNames} from "shared/lib";
import {Navbar} from "widgets/Navbar";

export const App = () => {
    const {theme, toggleTheme} = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>Change theme</button>
            <Navbar />
            <AppRouter />
        </div>
    );
};

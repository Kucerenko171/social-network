import {AppRouter} from "app/prodivers/router";
import {useTheme} from "app/prodivers/ThemeProvider";
import './styles/index.scss';
import {classNames} from "shared/lib";
import {Navbar} from "widgets/Navbar";
import {Sidebar} from 'widgets/Sidebar';

export const App = () => {
    const {theme} = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <Navbar />
          <div className="content-page">
            <Sidebar />
            <AppRouter />
          </div>
        </div>
    );
};

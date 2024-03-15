import {AppRouter} from "app/prodivers/router";
import {useTheme} from "app/prodivers/ThemeProvider";
import './styles/index.scss';
import {Suspense} from "react";
import {classNames} from "shared/lib";
import {Navbar} from "widgets/Navbar";
import {Sidebar} from 'widgets/Sidebar';

export const App = () => {
    const {theme} = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback="">
                <Navbar />
                <div className="content-page">
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
};

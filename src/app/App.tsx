import {AboutPage} from "pages/AboutPage";
import {MainPage} from "pages/MainPage";
import {Suspense} from "react";
import {Link, Route, Routes} from "react-router-dom";
import './styles/index.scss';
import {useTheme} from "app/prodivers/ThemeProvider";
import {classNames} from "shared/lib/classNames/classNames";

export const App = () => {
    const {theme, toggleTheme} = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>Change theme</button>
            <Link to={'/'}>Main page</Link>
            <Link to={'/about'}>About page</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={'/'} element={<MainPage/>}/>
                    <Route path={'/about'} element={<AboutPage/>}/>
                </Routes>
            </Suspense>
        </div>
    );
};
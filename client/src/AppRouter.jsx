import React, {Component} from 'react';
import {authRoutes, publicRoutes} from "./routes";
import {Route, Routes,  Redirect} from 'react-router-dom'

const AppRouter = () => {

    const isAuth = false

    return (
        <Routes>
            {
                isAuth &&
                authRoutes.map(({path, Component}) =>
                    <Route key={path} path={path} element={Component} exact/>
                )
            }

            {
                publicRoutes.map(({path, Component}) =>
                    <Route key={path} path={path} element={Component} exact/>
                )
            }
        </Routes>
    );
};

export default AppRouter;
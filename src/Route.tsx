import React from 'react';

import { useSelector } from 'react-redux';
import { RootState } from './store/ducks/rootReducer'

import {
    RouteProps as ReactRouteProps,
    Route as ReactRoute,
    Redirect,
} from 'react-router-dom';


interface RouteProps extends ReactRouteProps {
    isPrivate?: boolean;
    component: React.ComponentType;
}


const Route: React.FC<RouteProps> = ({
    isPrivate = false,
    component: Component,
    ...rest
}) => {
    const user = useSelector((state: RootState) => state.User.data)
    const keys = Object.keys(user).length

    if (!keys && isPrivate) {
        return <Redirect to="/login" />
    }

    if (keys && !isPrivate) {
        return <Redirect to="/" />
    }

    return (
        <ReactRoute
            {...rest}
            component={Component}
        />
    )
};

export default Route;
import React, {Fragment} from 'react';
import {useSelector} from 'react-redux';
import {Route, Redirect} from 'react-router';

const ProtuctedRoute = ( {component : Component, ...rest} ) => {

    const {isAuthenticated, loading, user} = useSelector(state => state.auth);

    return (
        <Fragment>
            {loading === false && (
                <Route
                {...rest} 
                render = { props => {
                    if(isAuthenticated === false) {
                        return <Redirect to='/login'/>
                    }
                    return <Component {...props} />
                }}
                />
            )}
            
        </Fragment>
    )
};

export default ProtuctedRoute

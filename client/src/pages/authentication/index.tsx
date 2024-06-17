import { useAuth0 } from '@auth0/auth0-react';

import AuthenticatedHeader from './authenticatedHeader';
import UnauthenticatedHeader from './unauthenticatedHeader';

import './authentication.css';

function Authentication() {
    const { isLoading, isAuthenticated, error, user, loginWithRedirect, logout } =
        useAuth0();

    if (isLoading) {
        return <div>Loading...</div>;
    }
    if (error) {
        return <div>Oops... {error.message}</div>;
    }

    if (isAuthenticated) {
        return (
            <AuthenticatedHeader logout={logout} />
        );
    } else {
        return (
            <UnauthenticatedHeader loginWithRedirect={loginWithRedirect} />
        );
    }
}

export default Authentication;
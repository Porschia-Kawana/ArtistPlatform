import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Navigate } from 'react-router-dom';
import ReactLoading from 'react-loading';

import Authentication from './pages/authentication';

import './App.css';

function App(props: { public?: boolean, children: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; }) {
    const { isAuthenticated, isLoading } = useAuth0();


    if (!isLoading) {
        if (!isAuthenticated && !props.public) {
            return <Navigate to="/" />;

        }
        if (isAuthenticated && props.public) {
            return <Navigate to="/portfolio" />;
        }
    }

    // const [data, setData] = React.useState("");
    // React.useEffect(() => {
    //     fetch("/api")
    //         .then((res) => {
    //             if (!res.ok) {
    //                 setError(res.status);
    //                 setErrorMessage(res.statusText);
    //             }
    //             return res.json();
    //         })
    //         .then((data) => {
    //             setData("");
    //         });
    // }, []);


    return (
        <div className={`App ${isAuthenticated ? 'App-authenticated' : 'App--unauthenticated'}`}>
            <Authentication />
            <div>
                {isLoading ?
                    <ReactLoading type='spinningBubbles' color="#000" /> :
                    <>{props.children}</>
                }
            </div>
        </div>
    );
}

export default App;

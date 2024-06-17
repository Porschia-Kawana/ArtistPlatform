import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import ReactCurvedText from "react-curved-text";
import image from "../../image.avif";
import nz from "../../nz.png";

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
            <div className='App__header__logout'>
                <div className='App__header__logout__title'>Artist Exchange Platform</div>
                <div className='App__header__logout__button__group'>
                    <div className='App__header__logout__button__border'>
                        <button className='App__header__logout__button' onClick={() => console.log("Route to Account")}>
                            My Account
                        </button>
                    </div>
                    <div className='App__header__logout__button__border'>
                        <button className='App__header__logout__button' onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                            Log out
                        </button>
                    </div>
                </div>
            </div>
        );
    } else {
        return (
            <div className='App__header__login'>
                <button className='App__header__login__button' onClick={() => loginWithRedirect()}>Log in</button>
                <div className='App__header__login__title'>
                    <ReactCurvedText
                        width={630}
                        height={274}
                        cx={320}
                        cy={233}
                        rx={244}
                        ry={180}
                        startOffset={0}
                        reversed={true}
                        text='Artist Exchange Platform'
                        textProps={{ "style": { "fontSize": "57" } }}
                        textPathProps={{ "fill": "#ffffff" }}
                        tspanProps={{ "dy": "-6" }}
                        ellipseProps={undefined}
                        svgProps={{ "style": { "transform": "rotate(0deg)" } }} />
                    <div>
                        <div className='App__header__login__image__center'>
                            <img src={image} />
                        </div>
                    </div>
                </div>
                <div className='App__header__login__image__left'>
                    <img src={nz} />
                </div>
                <div className='App__header__login__image__right'>
                    <img src={nz} />
                </div>
            </div>
        );
    }
}

export default Authentication;
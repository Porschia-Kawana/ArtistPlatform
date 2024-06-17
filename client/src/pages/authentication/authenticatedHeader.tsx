function AuthenticatedHeader(props: { logout: (arg0: { logoutParams: { returnTo: string; }; }) => void; }) {
    return (
        <div className='AuthenticatedHeader'>
            <div className='AuthenticatedHeader__title'>Artist Exchange Platform</div>
            <div className='AuthenticatedHeader__button__group'>
                <div className='AuthenticatedHeader__button__border'>
                    <button className='AuthenticatedHeader__button' onClick={() => console.log("Route to Account")}>
                        My Account
                    </button>
                </div>
                <div className='AuthenticatedHeader__button__border'>
                    <button className='AuthenticatedHeader__button' onClick={() => props.logout({ logoutParams: { returnTo: window.location.origin } })}>
                        Log out
                    </button>
                </div>
            </div>
        </div>
    );
}

export default AuthenticatedHeader;
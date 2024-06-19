import App from "../../App";

function LandingPage() {
    return (
        <App public={true}>
            <div className='App__content'>
                Artist Exchange Platform is an app for creatives in Aotearoa to share, collaborate, organise, make announcements etc.
                If you're an artist, an aspiring artist or an art enthusiast, here is a platform that seeks to create community.
                <p>(...WIP BIO)</p>
            </div>
            <footer className='App__footer'></footer>
        </App>
    );
}

export default LandingPage;

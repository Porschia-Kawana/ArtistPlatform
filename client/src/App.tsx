import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

import Authentication from './pages/authentication';
import ErrorComponent from './pages/error';

import './App.css';

function App() {
  const { isAuthenticated } = useAuth0();

  const [data, setData] = React.useState("");
  const [error, setError] = React.useState<number>();
  const [ErrorMessage, setErrorMessage] = React.useState<string>("");

  React.useEffect(() => {
    fetch("/api")
      .then((res) => {
        if (!res.ok) {
          setError(res.status);
          setErrorMessage(res.statusText);
        }
        return res.json();
      })
      .then((data) => {
        setData("");
      });
  }, []);


  return (
    <div className="App">
      <header className="App__header">
        <Authentication />
      </header>
      <div>
        {isAuthenticated ?
          <></>
          :
          (<>{!error ? (
            <div className='App__bio'>
              Artist Exchange Platform is an app for creatives in Aotearoa to share, collaborate, organise, make announcements etc.
              If you're an artist, an aspiring artist or an art enthusiast, here is a platform that seeks to create community.
              <p>(...WIP BIO)</p>
            </div>
          ) : <ErrorComponent status={error} message={ErrorMessage}></ErrorComponent>
          }
          </>)
        }
      </div>
      {!isAuthenticated && <footer className='App__footer'></footer>}
    </div>
  );
}

export default App;

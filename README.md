**Sincere Systems test task**


React, Redux, Bootstrap, SASS were used for development. A Store with a nested reducer is created in the src folder in the root store.js file.

The index.js file in the reducers folder initializes the initial state of the store data. + The reducer itself.

The components folder contains all View components (App, Footer, Header, Login, Logo, Main, News, Profile).

The App component is a container for all components, in which the store is connected using the Provider, and the BrowserRouter connects the routing.

In the Login Component in the local state, the username and password are stored, which are sent to the store after clicking the 'Login' button. Implemented saving login and password in localStorage.

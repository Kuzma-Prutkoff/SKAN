import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Layout from "./Layout.jsx";
import NoMatch from './NoMatch.jsx';
import Main from './Main.jsx';
import RequireAuth from './RequireAuth.jsx';
import Logout from './Logout.jsx';
import LoginForm from './LoginForm.jsx';
import SearchForm from './SearchForm.jsx';
import SearchResults from './SearchResults.jsx';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Main />} />
          <Route path="request" element={
                <RequireAuth>
                  <SearchForm />
                </RequireAuth>    
                } />
          <Route path="login" element={<LoginForm />} />
          <Route path="logout" element={<Logout />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

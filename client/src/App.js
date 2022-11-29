import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import LandingPage from './pages/Landing';
import About from './pages/About';
import Login from './pages/Login';
// import Community from './pages/Community';
// import Feeling from './pages/Feeling';
// import Dashboard from './pages/Dashboard';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Routes>
          <Route path='/about' element={<Navbar />} />
          <Route path='/login' element={<Navbar />} />
        </Routes>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          {/* <Route path="/community" element={<Community />} /> */}
          {/* <Route path="/comments" element={<Feeling />} /> */}
          {/* <Route path="/dashboard" element={<Dashboard />} /> */}

        </Routes>
        <Routes>
          <Route path='/about' element={<Footer />} />
          <Route path='/login' element={<Footer />} />
        </Routes>
      </Router>

    </ApolloProvider>
  );
}

export default App;

import React from 'react';
import { Layout } from 'antd';
import Navbar from './components/Navbar/Navbar';
import 'antd/dist/antd.css';

const App = () => {

  return (
    <div className='App'>
      <Layout>
        <Navbar />
      </Layout>
    </div>
  )
}

export default App;

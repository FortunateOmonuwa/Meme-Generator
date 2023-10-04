import { useState } from 'react'

import './styles/styles.css';
import Header from './Custom_Components/Header';
import Form from './custom_components/Meme';
function App() {

  return (
    <div className='container'>
      <Header/>
      <Form/>
    </div>
  )
}

export default App

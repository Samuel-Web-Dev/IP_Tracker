import React, { Component } from 'react'
import './App.css'

import PostList from './component/PostList'

class App extends Component {
  render() {
    return (
      <div className='App'>
         <PostList />
      </div>
    )
  }
}

export default App
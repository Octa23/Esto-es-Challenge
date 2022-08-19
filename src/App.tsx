import React from 'react'
import styled from '@emotion/styled'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import ProjectCreator from './pages/ProjectCreator'
import ProjectEditor from './pages/ProjectEditor'

function App () {
  return (
    <StyledDiv className="App">
      <header>
        <img src={'/assets/images/logo.png'} />
      </header>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/new" element={<ProjectCreator />} />
          <Route path="/project/edit/:id" element={<ProjectEditor />} />
        </Routes>
      </BrowserRouter>
    </StyledDiv>
  )
}

export default App

const StyledDiv = styled.div`
  min-height: 100vh;
  & > header {
    background-color: #fff;
    display: flex;
    box-shadow: inset 0px -1px 0px #d9d9d9;
    padding: 4px 16px;
    @media (min-width: 900px) {
      padding: 10px 50px;
    }
  }
`

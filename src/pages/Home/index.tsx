import styled from '@emotion/styled'
import React from 'react'
import { Link } from 'react-router-dom'
import ProjectList from '../../components/ProjectList'

interface ButtonProps {
  isButton: boolean
}

const Home = () => {
  return (
    <>
      <StyledDiv>
        <h2>My projects</h2>
        <StyledLink to="/project/new">
          <StyledButton isButton={false}>
            <span>+</span>Add project
          </StyledButton>
        </StyledLink>
      </StyledDiv>
      <ProjectList />
    </>
  )
}

export default Home

const StyledLink = styled(Link)`
  text-decoration: none;
`
const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  background-color: #fff;
  justify-content: space-between;
  margin-bottom: 12px;
  box-shadow: inset 0px -1px 0px #d9d9d9;
  padding: 4px 16px;
  @media (min-width: 900px) {
    padding: 10px 50px;
  }
`
export const StyledButton = styled.button<ButtonProps>`
  background: #f5222d;
  cursor: pointer;
  border-radius: 4px;
  width: max-content;
  display: flex;
  align-items: center;
  gap: 5px;
  border: none;
  padding: ${props => props.isButton ? '8px 16px' : '5px 12px'};
  color: #fff;
  font-size: 16px;
  font-family: "Roboto", sans-serif;
  > span {
    font-size: 20px;
  }
`

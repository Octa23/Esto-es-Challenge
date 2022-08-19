import React from 'react'
import { BiArrowBack } from 'react-icons/bi'
import styled from '@emotion/styled'
import { Link } from 'react-router-dom'
const BackButton = () => {
  return (
    <StyledLink to="/">
      <p>
        <BiArrowBack />
        Back
      </p>
    </StyledLink>
  )
}

export default BackButton

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #000000a6;
  p {
    display: flex;
    align-items: center;
    gap: 5px;
    svg {
      font-size: 30px;
    }
  }
`

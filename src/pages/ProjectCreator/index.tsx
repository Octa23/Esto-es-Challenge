import styled from '@emotion/styled'
import React from 'react'
import BackButton from '../../components/BackButton'
import ProjectForm from '../../components/Forms/ProjectForm'

const ProjectCreator = () => {
  return (
    <>
      <StyledDiv>
        <BackButton/>
        <h2>Add project</h2>
      </StyledDiv>
      <ProjectForm />
    </>
  )
}

export default ProjectCreator

export const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  background-color: #fff;
  gap: 10px;
  margin-bottom: 12px;
  box-shadow: inset 0px -1px 0px #d9d9d9;
  padding: 4px 16px;
  @media (min-width: 900px) {
    padding: 10px 50px;
  }
`

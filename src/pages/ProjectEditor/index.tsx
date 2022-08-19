import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import BackButton from '../../components/BackButton'
import ProjectForm from '../../components/Forms/ProjectForm'
import { RootState } from '../../redux/store'
import { StyledDiv } from '../ProjectCreator'

const ProjectEditor = () => {
  const { id } = useParams()
  const { projects } = useSelector((state: RootState) => state.projects)
  const project = projects.find((project) => project.id.toString() === id)

  return (
    <>
      <StyledDiv>
        <BackButton />
        <h2>Edit Project</h2>
      </StyledDiv>
      {project ? <ProjectForm project={project} /> : <h2>No project found</h2>}
    </>
  )
}

export default ProjectEditor

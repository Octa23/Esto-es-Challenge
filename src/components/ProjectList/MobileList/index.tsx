import styled from '@emotion/styled'
import React from 'react'
import { Project } from '../../../redux/slices/projectsSlice'
import MobileListItem from './MobileListItem'

interface Props {
  projects: Project[];
  page: number;
  MAX_PROJECTS_PER_PAGE: number;
}

const MobileList = ({ projects, page, MAX_PROJECTS_PER_PAGE }:Props) => {
  return (
    <StyledList>
    {projects.map((project, index) =>
      index >= (page - 1) * MAX_PROJECTS_PER_PAGE &&
      index < page * MAX_PROJECTS_PER_PAGE
        ? (
        <MobileListItem key={project.id} project={project} />
          )
        : null
    )}
  </StyledList>
  )
}

export default MobileList

const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  li {
    padding: 8px 16px;
    background: #ffffff;
    box-shadow: inset 0px -1px 0px #d9d9d9;
    display: flex;
    flex-direction: column;
    gap: 7px;
  }
`

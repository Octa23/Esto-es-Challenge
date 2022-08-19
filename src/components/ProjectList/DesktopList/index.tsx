import styled from '@emotion/styled'
import React from 'react'
import { Project } from '../../../redux/slices/projectsSlice'
import DesktopListItem from './DesktopListItem'

interface Props {
  projects: Project[];
  page: number;
  MAX_PROJECTS_PER_PAGE: number;
}

const DesktopList = ({ projects, page, MAX_PROJECTS_PER_PAGE }: Props) => {
  return (
    <StyledList>
      <li>
        <span>Project info</span>
        <span>Project Manager</span>
        <span>Assigned to</span>
        <span>Status</span>
        <span>Action</span>
      </li>
      {projects.map(
        (project, index) =>
          index >= (page - 1) * MAX_PROJECTS_PER_PAGE &&
          index < page * MAX_PROJECTS_PER_PAGE && (
            <DesktopListItem key={project.id} project={project} />
          )
      )}
    </StyledList>
  )
}

export default DesktopList

const StyledList = styled.ul`
  margin: auto;
  border-radius: 5px 5px 0 0;
  overflow: hidden;
  padding: 32px 50px 0 50px;
  li {
    padding: 8px 16px;
    background: #ffffff;
    box-shadow: inset 0px -1px 0px #d9d9d9;
    display: grid;
    grid-template-columns: repeat(3, 1fr) repeat(2, 120px);
    align-items: center;
    > span {
      font-weight: bold;}
    > *:last-child{
      justify-self: end;
    }
  }
`

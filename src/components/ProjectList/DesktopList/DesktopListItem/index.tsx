import styled from '@emotion/styled'
import React from 'react'
import { Project } from '../../../../redux/slices/projectsSlice'
import BasicMenu from '../../../Menu'

interface Props {
  project: Project;
}

const DesktopListItem = ({ project }: Props) => {
  return (
    <li>
      <ProjectData>
        <div>
          <h3>{project.name}</h3>
          <span>Creation date: {project.createdAt}</span>
        </div>
      </ProjectData>
      <UserData>
        <img src={`https://i.pravatar.cc/150?u=${project.projectManajer}`} />
        <p>{project.projectManajer}</p>
      </UserData>
      <UserData>
        <img src={`https://i.pravatar.cc/150?u=${project.assignedTo}`} />
        <p>{project.assignedTo}</p>
      </UserData>
      <StyledStatus>{project.status}</StyledStatus>
      <BasicMenu project={project} />
    </li>
  )
}

export default DesktopListItem

const StyledStatus = styled.p`
color: #595959;
background-color: #F5F5F5;
border: 1px solid #D9D9D9;
border-radius: 4px;
width: max-content;
padding: 0px 8px;
`

const ProjectData = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  > div {
    display: flex;
    flex-direction: column;
  }
  h3 {
    font-weight: 400;
    line-height: 1.5;
    color: #000000a6;
  }
  span {
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    color: #00000073;
  }
  svg {
    font-size: 2rem;
    cursor: pointer;
    color: #000000d9;
  }
`
const UserData = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  p {
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    color: #000000a6;
  }
  img {
    width: 30px;
    height: 30px;
    border-radius: 50%;
  }
`

import styled from '@emotion/styled'
import React from 'react'
import { Project } from '../../../../redux/slices/projectsSlice'
import BasicMenu from '../../../Menu'

interface Props {
  project: Project;
}

const MobileListItem = ({ project }: Props) => {
  return (
    <li>
      <ProjectData>
        <div>
          <h3>{project.name}</h3>
          <span>Creation date: {project.createdAt}</span>
        </div>
        <BasicMenu project={project} />
      </ProjectData>
      <UserData>
        <img src={`https://i.pravatar.cc/150?u=${project.assignedTo}`} />
        <p>{project.assignedTo}</p>
      </UserData>
    </li>
  )
}

export default MobileListItem

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

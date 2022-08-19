import styled from '@emotion/styled'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import useWindowDimensions from '../../hooks/useWidth'
import { RootState } from '../../redux/store'
import Pagination from '../Pagination'
import DesktopList from './DesktopList'
import MobileList from './MobileList'

const ProjectList = () => {
  const { projects } = useSelector((state: RootState) => state.projects)
  const [page, setPage] = useState(1)
  const width = useWindowDimensions()
  const MAX_PROJECTS_PER_PAGE = width > 900 ? 11 : 8
  const pages = projects
    ? Math.ceil(projects.length / MAX_PROJECTS_PER_PAGE)
    : 0
  return projects.length > 0
    ? (
    <>
      {width < 900
        ? (
        <MobileList
          MAX_PROJECTS_PER_PAGE={MAX_PROJECTS_PER_PAGE}
          page={page}
          projects={projects}
        />
          )
        : (
        <DesktopList
          MAX_PROJECTS_PER_PAGE={MAX_PROJECTS_PER_PAGE}
          page={page}
          projects={projects}
        />
          )}
      <Pagination pages={pages} page={page} setPage={setPage} />
    </>
      )
    : (
    <StyledMessage>No projects found</StyledMessage>
      )
}

export default ProjectList

const StyledMessage = styled.div`
  text-align: center;
  font-size: 1.5rem;
  font-weight: bold;
  color: #666;
`

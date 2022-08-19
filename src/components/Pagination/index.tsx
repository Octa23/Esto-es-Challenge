import React from 'react'
import { StyledButton } from '../../pages/Home'
import { BiArrowBack } from 'react-icons/bi'
import styled from '@emotion/styled'

interface Props {
  pages: number;
  setPage: (page: number) => void;
  page: number;
}

const Pagination = ({ pages, setPage, page }: Props) => {
  return (
    <StyledPagination>
      {page > 1
        ? (
        <StyledButton isButton={false} onClick={() => setPage(page - 1)}>
          <BiArrowBack />
        </StyledButton>
          )
        : null}
      <span>Page {page}</span>
      {page < pages
        ? (
        <StyledButton isButton={false} onClick={() => setPage(page + 1)}>
          <BiArrowBack />
        </StyledButton>
          )
        : null}
    </StyledPagination>
  )
}

export default Pagination

const StyledPagination = styled.div`
  display: flex;
  margin-block: 10px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  button:last-child {
    transform: scaleX(-1);
  }
`

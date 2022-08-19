import * as React from 'react'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import { BiDotsVerticalRounded, BiEdit, BiTrashAlt } from 'react-icons/bi'
import styled from '@emotion/styled'
import { useDispatch } from 'react-redux'
import { Project, projectRemove } from '../redux/slices/projectsSlice'
import { Divider } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

interface Props {
  project: Project;
}

export default function BasicMenu ({ project }: Props) {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleEdit = (id: number) => {
    setAnchorEl(null)
    navigate(`/project/edit/${id}`)
  }
  const handleDelete = (id: number) => {
    setAnchorEl(null)
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(projectRemove(id))
      }
    })
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <StyledMenu>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <BiDotsVerticalRounded />
      </Button>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 0,
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 27,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0
            }
          }
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <StyledMenuItem onClick={() => handleEdit(project.id)}>
          <BiEdit />
          <span>Edit</span>
        </StyledMenuItem>
        <Divider />
        <StyledMenuItem onClick={() => handleDelete(project.id)}>
          <BiTrashAlt />
          Delete
        </StyledMenuItem>
      </Menu>
    </StyledMenu>
  )
}
const StyledMenu = styled.div`
svg {
    font-size: 2rem;
    cursor: pointer;
    color: #000000d9;
  }`

const StyledMenuItem = styled(MenuItem)`
  display: flex;
  width: 180px;
  gap: 10px;
  align-items: center;
  line-height: 1;
  svg {
    font-size: 20px;
  }
`

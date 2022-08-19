/* eslint-disable camelcase */
import React from 'react'
import { useForm } from 'react-hook-form'
import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  TextField
} from '@mui/material'
import { yupResolver } from '@hookform/resolvers/yup'
import styled from '@emotion/styled'
import { SignUpSchema } from './Schema'
import {
  Project,
  projectAdd,
  projectUpdate
} from '../../../redux/slices/projectsSlice'
import { useDispatch } from 'react-redux'
import { StyledButton } from '../../../pages/Home'
import { useNavigate } from 'react-router-dom'

const ProjectManajers = ['John Doe', 'Jane Doe', 'Jack Doe']
const AssignedTo = ['Tania Green', 'Holly Green', 'Karen Green']

interface Props {
  project?: Project;
}

const ProjectForm = ({ project }: Props) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({ mode: 'all', resolver: yupResolver(SignUpSchema) })

  const onSubmit = (data: Project) => {
    project
      ? dispatch(projectUpdate({ ...project, ...data })) && navigate('/')// Construye un objeto con los datos del proyecto y pisa la informacion con la informacion del formulario donde coincida la key
      : dispatch(projectAdd(data))
  }

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit as any)}>
      <TextField
        error={!!errors.name?.message}
        helperText={errors.name?.message as string}
        label="Nombre"
        defaultValue={project?.name || ''}
        {...register('name')}
      />
      <TextField
        error={!!errors.description?.message}
        helperText={errors.description?.message as string}
        label="Description"
        defaultValue={project?.description || ''}
        {...register('description')}
      />
      <FormControl>
        <InputLabel error={!!errors.projectManajer?.message}>
          Project Manajer
        </InputLabel>
        <Select
          MenuProps={{
            disableScrollLock: true
          }}
          defaultValue={project?.projectManajer || ''}
          error={!!errors.projectManajer?.message}
          label="Project Manajer"
          {...register('projectManajer')}
        >
          {ProjectManajers.map((person) => (
            <MenuItem key={person} value={person}>
              {person}
            </MenuItem>
          ))}
        </Select>
        <FormHelperText error>
          {errors.projectManajer?.message as string}
        </FormHelperText>
      </FormControl>
      <FormControl>
        <InputLabel error={!!errors.assignedTo?.message}>
          Assigned to
        </InputLabel>
        <Select
          MenuProps={{
            disableScrollLock: true
          }}
          defaultValue={project?.assignedTo || ''}
          error={!!errors.assignedTo?.message}
          label="Assigned to"
          {...register('assignedTo')}
        >
          {AssignedTo.map((person) => (
            <MenuItem key={person} value={person}>
              {person}
            </MenuItem>
          ))}
        </Select>
        <FormHelperText error>
          {errors.assignedTo?.message as string}
        </FormHelperText>
      </FormControl>
      <FormControl>
        <InputLabel error={!!errors.status?.message}>Status</InputLabel>
        <Select
          MenuProps={{
            disableScrollLock: true
          }}
          defaultValue={project?.status || ''}
          error={!!errors.status?.message}
          label="Status"
          {...register('status')}
        >
          <MenuItem value={'Enabled'}>Enabled</MenuItem>
          <MenuItem value={'Disabled'}>Disabled</MenuItem>
        </Select>
        <FormHelperText error>
          {errors.status?.message as string}
        </FormHelperText>
      </FormControl>
      <StyledButton isButton>
        {project ? 'Edit project' : 'Create project'}
      </StyledButton>
    </StyledForm>
  )
}

const StyledForm = styled.form`
  background-color: #fff;
  max-width: 664px;
  margin: 0 auto;
  padding: 32px 40px;
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  gap: 15px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);
  p {
    font-size: 1rem;
  }
`

export default ProjectForm

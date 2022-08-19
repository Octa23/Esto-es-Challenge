import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import ToastAlert from '../../components/ToastAlert'

export interface Project {
  id: number;
  name: string;
  description: string;
  projectManajer: string;
  assignedTo: string;
  status: string;
  createdAt?: string;
}

const initialState = {
  projects:
    (JSON.parse(localStorage.getItem('projects') as string) as Project[]) ||
    ([] as Project[])
}

export const projectSlice = createSlice({
  name: 'project',
  initialState,
  reducers: {
    projectAdd: (state, action: PayloadAction<Project>) => {
      state.projects.push({
        ...action.payload,
        createdAt: new Date().toLocaleString(),
        id: Math.floor(Math.random() * 10000)
      })
      ToastAlert('Project created')
      localStorage.setItem('projects', JSON.stringify(state.projects))
    },
    projectRemove: (state, action: PayloadAction<number>) => {
      state.projects = state.projects.filter(
        (project) => project.id !== action.payload
      )
      ToastAlert('Project removed')
      localStorage.setItem('projects', JSON.stringify(state.projects))
    },
    projectUpdate: (state, action: PayloadAction<Project>) => {
      state.projects = state.projects.map((project) =>
        project.id === action.payload.id ? action.payload : project
      )
      ToastAlert('Project updated')
      localStorage.setItem('projects', JSON.stringify(state.projects))
    }
  }
})

// Action creators are generated for each case reducer function
export const { projectAdd, projectRemove, projectUpdate } =
  projectSlice.actions

export default projectSlice.reducer

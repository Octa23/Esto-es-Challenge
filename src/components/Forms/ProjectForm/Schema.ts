import * as Yup from 'yup'

export const SignUpSchema = Yup.object({
  name: Yup.string().required('Required'),
  description: Yup.string().required('Required'),
  projectManajer: Yup.string().required('Required'),
  assignedTo: Yup.string().required('Required'),
  status: Yup.string().required('Required')
})

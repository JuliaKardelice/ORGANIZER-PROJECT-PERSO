export interface TodosState {
    id: number,
    title: string
    description?: string
    completed: boolean,
    createdAt: string,
   updatedAt?: string,
    //dueDate?: string // ISO format (ex: '2025-05-08T12:00:00Z')
  
   /// priority?: 'low' | 'medium' | 'high'
  tags?: string[]

  }
export const TodosAttributes : TodosState = {
  id: 0,
  title: '',
  description: '',
  createdAt: '',
  updatedAt: '',
  completed: false
}
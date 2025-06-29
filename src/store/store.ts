import { create } from 'zustand';

interface Todo {
  id: number,
  title: string,
  completed: boolean
}
interface TodoState {
  todos: Todo[],
  isLoading: boolean,
  errors: string[],
  fetchTodos: () => void
}
export const useTodoStore = create<TodoState>()((set) =>({
  todos: [],
  isLoading: false,
  errors:[],
  fetchTodos: async () =>{
    const response = await fetch('')
    const data = await response.json() as Todo[]
    set({todos: data})
  }
}))
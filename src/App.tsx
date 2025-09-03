
import {useSelector } from 'react-redux'
import './App.css'
import TodoList from './component/todoList'
import { useAppDispatch, useAppSelector } from './hook'
import { clearData, fetchTodo } from './slices/testSlice';


function App() {
  const dispatch = useAppDispatch()
  // const x = useSelector((state: any)=> state.test)
  const dataStore = useAppSelector((state)=> state.test)

  console.log(dataStore)
  return (
    <>

    <button
    onClick={() => {
      dispatch(fetchTodo())
    }}
    >
      {dataStore.loading ? "loading ..." : "fetch todo "}
    </button>

    <div>
      {dataStore.data?.title}
    </div>
    <button onClick={() => dispatch(clearData())}>clear</button>
    </>
  )
}

export default App

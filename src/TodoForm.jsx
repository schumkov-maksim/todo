import { Button, TextField } from "@mui/material";


function TodoForm({text, setText, listTodo, setListTodo}){

  function addTodo(item){
   let a=[...listTodo,item]
    setListTodo(a);
    setText("");
  }

  return (
    <>
      <TextField label="Tippen Sie Todo" sx={{width:"450px"}} variant="standard"  value={text} onChange={(e)=>setText(e.target.value)}  />
      <Button variant="contained" onClick={()=>addTodo(text)}>Add</Button>
     
    </>
    )
}
export default TodoForm;
import { Check,  DeleteForever} from "@mui/icons-material";
import "./style.css";
import { Typography } from "@mui/material";
import { useState } from "react";

function Todo({text, listTodo, setListTodo}) {
const[isthrow, setThroth]= useState(false);
    function deleteItem(text){
        let a= listTodo.filter(el=> el!==text);
        setListTodo(a);
        console.log(a);
        text="";
    }

    return(
        <><div className="todo">
        <Typography variant="h6"className={isthrow? "throw": ""} >{text}</Typography>
        <div>
    <DeleteForever sx={{cursor:"pointer"}} onClick={()=>deleteItem(text) }/>
    <Check onClick={()=>setThroth(!isthrow)}/>
        </div>
    </div>
        </>
    )
}
export default Todo;
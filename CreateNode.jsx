import React, { useState } from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Header from "./Header";
import Footer from "./Footer";
import CreateNode from "./CreateNode";
import Note from "./Note";
const App=()=>{
  const[addItem,setAddItem]=useState([]);
  const addNote=(note)=>{
    setAddItem((prevData)=>{
      return[...prevData,note];
    })

  }
  const onDelete=(id)=>{
    setAddItem((oldData)=>
    oldData.filter((currElem,index)=>{
      return index!=id;
    })
    )
  }
  return(
    <>
      <Header />
      
      <CreateNode passNote={addNote} />
      {addItem.map((val,index)=>{
        return <Note
        key={index}
        id={index}
        title={val.title}
        content={val.content}
        deleteItem={onDelete}
         />
      })
      }
      <Footer />
    </>
    
  );
}
export default App;

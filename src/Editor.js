import './Editor.css'
import Header from './Header';
import { useContext, useEffect, useState } from 'react'
import { screenContext } from './App';


const Editor = (props) => {

    const [fullscreen, ] = useContext(screenContext);
    const [rows, setRows] = useState(3 + Math.floor(window.innerHeight/70))
    
    useEffect(() => {
        if(fullscreen.editor){
            if(window.innerHeight > 500){
                setRows(rows => Math.floor(rows/470*window.innerHeight))
            }
        } else {
            setRows(3 + Math.floor(window.innerHeight/70))
        }

    }, [fullscreen])
    

    return (
        <div id='editor-container'>
            <Header card="editor" />
            <textarea id="editor"
            rows={rows}
            value={props.edit}
            onChange={e => props.setEdit(e.target.value)}
            ></textarea>
        </div>
    )
  };

export default Editor
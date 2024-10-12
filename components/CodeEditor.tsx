"use client"

import React from 'react'
import {Resizable} from "re-resizable"
import AceEditor from "react-ace";

function CodeEditor() {
  return (
    <Resizable
        className="bg-slate-500"
        minHeight={200}
        minWidth={300}
    
    >
        <div>
            <AceEditor
                value = "function() { return 'Hello World' }"
                name="UNIQUE_ID_OF_DIV"
                fontSize={16}
                showGutter={false}
                wrapEnabled={true}
                showPrintMargin={false}
                highlightActiveLine={false}
                className="ace-editor-container"
            />
        </div>
    </Resizable>
  )
}

export default CodeEditor
"use client"

import React from 'react'
import {Resizable} from "re-resizable"
import AceEditor from "react-ace";

//languages
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/mode-css";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/mode-typescript";

//themes
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/theme-terminal";
import "ace-builds/src-noconflict/theme-twilight";

interface CodeEditorProps {
  onCodeChange: (code: string) => void
  language: string
  theme: string
  icon: string
  background?: string
  currentPadding?: string
}

function CodeEditor({ onCodeChange, language, theme, icon, background, currentPadding }:CodeEditorProps) {
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
                theme='monokai'
                mode={language.toLowerCase()}
                showGutter={false}
                wrapEnabled={true}
                showPrintMargin={false}
                highlightActiveLine={false}
                editorProps={{ $blockScrolling: true }}
                className="ace-editor-container w-full"
            />
        </div>
    </Resizable>
  )
}

export default CodeEditor
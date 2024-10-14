"use client"

import React, { useEffect, useState } from 'react'
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
  const [width, setWidth] = useState(1000);
  const [height, setHeight] = useState<number | null>(500);


  // @ts-ignore
  const handleResize = (evt, direction, ref, pos) => {
    const newHeight = ref.style.height;
    setHeight(parseInt(newHeight, 10));
  };

  const updateSize = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  
  return (
    <Resizable
        className="resize-container relative bg-slate-500"
        minHeight={200}
        minWidth={300}
        maxWidth={800}
        defaultSize={{
          width: width,
          height: height || 500
        }}
        onResize={handleResize}
    
    >
        <div className='code-block'>
          <div className='code-title h-14 px-4 flex items-center justify-between bg-black bg-opacity-80'>
            <div className='dots flex items-center gap-1'>
              <div className='w-3 h-3 rounded-full bg-red-500'></div>
              <div className='w-3 h-3 rounded-full bg-yellow-500'></div>
              <div className='w-3 h-3 rounded-full bg-green-500'></div>
            </div>

            <div className='input-control w-full'>
              <input type="text" className='w-full text-[hsla(0,0%,100%,.6)] outline-none font-medium text-center bg-transparent' />
            </div>
            <div className='icon flex items-center justify-center p-1 bg-black bg-opacity-30 rounded-sm'>
              <img src={icon} alt={icon} className='w-5 h-5' />
            </div>

          </div>
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
                className="ace-editor-container"
            />
        </div>
    </Resizable>
  )
}

export default CodeEditor
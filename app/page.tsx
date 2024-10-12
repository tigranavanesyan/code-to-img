"use client"

import CodeEditor from "@/components/CodeEditor";
import LanguageSelector from "@/components/LanguageSelector";
import { languages } from "@/utils/utilities";
import { useState } from "react";

export default function Home() {
  const [language, setLanguage] = useState(languages[0].name)
  return (
    <div className=" h-[100vh] flex flex-col items-center justify-between">
      {/* <header 
        className="mt-6 flex gap-6 w-[940px] p-5 fixed top-0 left-1/2 translate-x-[-50%] z-10 bg-[#191919] rounded border border-[#3C3C3C] shadow-md"
      >
        <LanguageSelector language={language} setLanguage={setLanguage} seActiveIcon={() => {}}/>
      </header> */}
      <main className="code-editor-ref">
        <CodeEditor language={language} onCodeChange={() => {}} theme="monokai" icon="javascript" background="#0d0d0d"/>
      </main>
    </div>
  );
}

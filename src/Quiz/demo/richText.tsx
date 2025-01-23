import React from "react";
import Quiz from "../index";

const App: React.FC = () => {
  return <>
    <Quiz title="这是一条包含富文本关键词的题目。" keyword="关键词" annotations="strong" />
  </>
}

export default App;

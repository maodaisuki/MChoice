import React from "react";
import Quiz from "../index";

const App: React.FC = () => {
  return <>
    <Quiz title="这是一条包含音频的题目。" audio='https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3' />
  </>
}

export default App;

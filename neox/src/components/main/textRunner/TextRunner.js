import React, { useState, useEffect } from "react";

function TextRunner() {
  const [text, setText] = useState("");
  const [isBack, setIsBack] = useState(false);
  const [index, setIndex] = useState(0);
  const fullText = "What You Dream!";

  useEffect(() => {
    const intervalId = setTimeout(() => {
      if (index <= fullText.length - 1 && !isBack) {
        setText((prevText) => prevText + fullText[index]);
        setIndex((prevIndex) => prevIndex + 1);
      } else {
        setIsBack(true);
      }
      if (isBack && index >= 0) {
        let sliced = text.slice(0, index - 1);
        setText(sliced);
        setIndex((prevIndex) => prevIndex - 1);
      }
      if (index <= 0 && isBack) {
        setIsBack(false);
        setIndex(0);
      }
    }, 200);

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId);
  }, [text, isBack, index]);

  return <div>{text ? text : "W"}</div>;
}

export default TextRunner;

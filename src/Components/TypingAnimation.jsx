import React, { useEffect, useState } from 'react';

const TypingAnimation = ({ words }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const typingText = document.querySelector('.typing-text');

    function displayText() {
      const information = words[index];
      typingText.textContent = '';
      for (let i = 0; i < information.length; i++) {
        setTimeout(() => {
          typingText.textContent += information[i];
          if (i === information.length - 1) {
            setTimeout(() => {
              clearText();
            }, 3000); 
          }
        }, 100 * i);
      }
    }

    function clearText() {
      for (let i = typingText.textContent.length; i >= 0; i--) {
        setTimeout(() => {
          typingText.textContent = typingText.textContent.slice(0, i);
        }, 50 * (typingText.textContent.length - i));
      }
      
      setTimeout(() => {
        setIndex((prevIndex) => (prevIndex + 1) % words.length);
      }, 1000); 
    }

    displayText();
  }, [index, words]); 

  return (
    <span className="typing-text" style={{ color: '#a61aed', fontSize:"40px"}}></span>
  );
};

export default TypingAnimation;

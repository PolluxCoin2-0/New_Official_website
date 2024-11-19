'use client';

import { useState, useEffect } from 'react';

const Typewriter = () => {
  const words = ["BUILD,", "CONNECT", "THRIVE"];
  const [currentWord, setCurrentWord] = useState('');
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const type = () => {
      const word = words[index];
      if (isDeleting) {
        setCurrentWord(word.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);

        if (charIndex === 0) {
          setIsDeleting(false);
          setIndex((prevIndex) => (prevIndex + 1) % words.length);
        }
      } else {
        setCurrentWord(word.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);

        if (charIndex === word.length) {
          setIsDeleting(true);
        }
      }
    };

    const typingInterval = setTimeout(type, 100);

    return () => clearTimeout(typingInterval); // Clean up timeout when component is unmounted or rerendered
  }, [charIndex, isDeleting, index, words]);

  return (
    <div className="w-full h-full flex justify-center items-center">
      <h1 id="typewriter" className="text-4xl font-bold">
        {currentWord}
      </h1>
    </div>
  );
};

export default Typewriter;

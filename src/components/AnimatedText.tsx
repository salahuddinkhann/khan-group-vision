
import { useState, useEffect } from 'react';

interface AnimatedTextProps {
  words: string[];
  typingSpeed?: number;
  delayBetween?: number;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ 
  words, 
  typingSpeed = 150,
  delayBetween = 2000
}) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingDelay, setTypingDelay] = useState(typingSpeed);

  useEffect(() => {
    let timer: number | undefined;
    
    if (isDeleting) {
      // Deleting is a bit faster than typing
      setTypingDelay(typingSpeed / 2);
      
      if (currentText === '') {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
        // Pause before typing the next word
        setTypingDelay(delayBetween / 4);
      } else {
        timer = setTimeout(() => {
          setCurrentText(currentText.slice(0, -1));
        }, typingDelay) as unknown as number;
      }
    } else {
      setTypingDelay(typingSpeed);
      const word = words[currentWordIndex];
      
      if (currentText === word) {
        // Pause at the end of the word before deleting
        setTypingDelay(delayBetween);
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, typingDelay) as unknown as number;
      } else {
        timer = setTimeout(() => {
          setCurrentText(word.slice(0, currentText.length + 1));
        }, typingDelay) as unknown as number;
      }
    }
    
    return () => clearTimeout(timer);
  }, [currentText, currentWordIndex, isDeleting, words, typingSpeed, delayBetween, typingDelay]);

  return (
    <span className="typing-animation relative">
      {currentText}
      <span className="absolute -right-1 animate-pulse">|</span>
    </span>
  );
};

export default AnimatedText;

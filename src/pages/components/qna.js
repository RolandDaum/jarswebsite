import React, { useState } from 'react';
import cross from '../assets/cross.png';

export default function Qna({ qnaIndex }) {
  const QnA = [
    {
      Q: 'Welches Paket sollte ich nehmen?',
      A:
        'Am besten nehmen Sie gar kein Paket von uns und beauftragen uns erst gar nicht. Lmao ich weiß nicht, was die Antwort ist.',
    },
    {
      Q: 'Welche Fragen soll ich hier beantworten?',
      A:
        'Hier werden keine Antworten gesucht, sondern nur gefunden. Jars ist die Lösung von allem. Neben 42 natürlich.',
    },
    {
      Q: 'Warum bin ich hier?',
      A:
        'Du bist hier, um eine Antwort auf das Leben zu bekommen. Jedoch ist dies eine Frage, bei welcher viele sagen würden, dass sie viele Antworten hat. Doch können wir Ihnen versichern, dass die Antwort 42 ist.',
    },
    {
      Q: 'Sollte ich Jars mein Geld geben?',
      A:
        'Sie sollten Jars auf jeden Fall Ihr Geld geben. Bei uns ist es in einem exzellenten Firmen Design angelegt.',
    },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const toggleAnswer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div class="flex flex-col w-full bg-secondary-default rounded m-2 p-5">
      <div onClick={toggleAnswer} class="flex flex-row justify-between items-center hover:cursor-pointer">
        <h1 class="mr-20 text-text font-bodonimt text-3xl">{QnA[qnaIndex].Q}</h1>
        <img
          src={cross}
          style={{ transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)' }}
          class=" h-7 "
        />
      </div>

      {isOpen && (
        <p class="px-10 font-bodonimt text-text text-xl">{QnA[qnaIndex].A}</p>
      )}
    </div>
  );
}

import React, { createContext, useContext, useState, ReactNode } from 'react';

export type CursorType = 'default' | 'project' | 'video' | 'image' | 'contact' | 'drag';

interface CursorContextType {
  cursorType: CursorType;
  cursorText: string;
  setCursor: (type: CursorType, text?: string) => void;
  resetCursor: () => void;
}

const CursorContext = createContext<CursorContextType | undefined>(undefined);

export const CursorProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cursorType, setCursorType] = useState<CursorType>('default');
  const [cursorText, setCursorText] = useState<string>('');

  const setCursor = (type: CursorType, text?: string) => {
    setCursorType(type);
    if (text) {
      setCursorText(text);
    } else {
      switch (type) {
        case 'project':
          setCursorText('VIEW PROJECT →');
          break;
        case 'video':
          setCursorText('PLAY');
          break;
        case 'image':
          setCursorText('VIEW');
          break;
        case 'contact':
          setCursorText("LET'S TALK");
          break;
        case 'drag':
          setCursorText('DRAG');
          break;
        default:
          setCursorText('');
      }
    }
  };

  const resetCursor = () => {
    setCursorType('default');
    setCursorText('');
  };

  return (
    <CursorContext.Provider value={{ cursorType, cursorText, setCursor, resetCursor }}>
      {children}
    </CursorContext.Provider>
  );
};

export const useCursor = () => {
  const context = useContext(CursorContext);
  if (!context) {
    throw new Error('useCursor must be used within a CursorProvider');
  }
  return context;
};

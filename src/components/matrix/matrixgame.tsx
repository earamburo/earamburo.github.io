import React, { useEffect, useRef, useState } from 'react';
import { python_code_block } from './matrix_code';

// Type definitions for Pyodide
interface PyodideInterface {
  runPythonAsync(code: string): Promise<any>;
  globals: {
    set(name: string, value: any): void;
    get(name: string): any;
  };
}

// Extend Window interface
declare global {
  interface Window {
    loadPyodide?: (config: { indexURL: string }) => Promise<PyodideInterface>;
  }
}

export const MatrixGame = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [inputValue, setInputValue] = useState<string>('');
  const [inputDisabled, setInputDisabled] = useState<boolean>(true);
  const outputRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const pyodideRef = useRef<PyodideInterface | null>(null);
  const resolveInputRef = useRef<((value: string) => void) | null>(null);
  const gameRunningRef = useRef<boolean>(false);

  // Append text to output
  const appendOutput = (text: string): void => {
    if (outputRef.current) {
      outputRef.current.textContent += text;
      outputRef.current.scrollTop = outputRef.current.scrollHeight;
    }
  };

  // Custom input function for Python
  const customInput = (prompt: string): Promise<string> => {
    return new Promise((resolve) => {
      appendOutput(prompt);
      resolveInputRef.current = resolve;
      if (inputRef.current) {
        inputRef.current.focus();
      }
    });
  };

  // Custom print function for Python
  const customPrint = (...args: any[]): void => {
    appendOutput(args.join(' ') + '\n');
  };

  // Initialize Pyodide
  useEffect(() => {
    const initPyodide = async (): Promise<void> => {
      try {
        // Check if loadPyodide is available
        if (!window.loadPyodide) {
          throw new Error('Pyodide script not loaded. Make sure the CDN script is in your HTML.');
        }

        // Load Pyodide from CDN
        const pyodide = await window.loadPyodide({
          indexURL: "https://cdn.jsdelivr.net/pyodide/v0.25.0/full/"
        });
        
        pyodideRef.current = pyodide;
        
        if (outputRef.current) {
          outputRef.current.textContent = 'Python environment loaded! Starting game...\n\n';
        }
        
        setIsLoading(false);
        setInputDisabled(false);
        
        // Start the game
        runGame();
      } catch (error) {
        if (outputRef.current) {
          outputRef.current.textContent = 'Error loading Python environment: ' + error;
        }
        setIsLoading(false);
      }
    };

    // Check if script is already loaded
    if (window.loadPyodide) {
      initPyodide();
    } else {
      // Load Pyodide script
      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/pyodide/v0.25.0/full/pyodide.js';
      script.async = true;
      script.onload = () => initPyodide();
      script.onerror = () => {
        if (outputRef.current) {
          outputRef.current.textContent = 'Failed to load Pyodide script from CDN.';
        }
        setIsLoading(false);
      };
      document.body.appendChild(script);

      return () => {
        // Cleanup
        if (script.parentNode) {
          script.parentNode.removeChild(script);
        }
      };
    }
  }, []);

  // Run the Python game
  const runGame = async (): Promise<void> => {
    if (gameRunningRef.current || !pyodideRef.current) return;
    gameRunningRef.current = true;

    // Set up custom input/print - add to global scope
    pyodideRef.current.globals.set('custom_input', customInput);
    pyodideRef.current.globals.set('custom_print', customPrint);

    // Your Python game code
    const pythonCode = python_code_block

    try {
      await pyodideRef.current.runPythonAsync(pythonCode);
    } catch (error) {
      appendOutput('\n\nError running game: ' + error);
    } finally {
      gameRunningRef.current = false;
    }
  };

  // Handle input submission
  const handleSubmit = (): void => {
    if (!resolveInputRef.current || inputDisabled) return;
    
    appendOutput(inputValue + '\n');
    
    const resolve = resolveInputRef.current;
    resolveInputRef.current = null;
    resolve(inputValue);
    
    setInputValue('');
  };

  // Handle Enter key press
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  // Restart game
  const handleRestart = (): void => {
    if (outputRef.current) {
      outputRef.current.textContent = '';
    }
    setInputValue('');
    gameRunningRef.current = false;
    runGame();
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>🎮 The Matrix - Python Text Adventure 🎮</h1>
      
      <div style={styles.gameArea}>
        <div 
          ref={outputRef} 
          style={styles.output}
        >
          {isLoading ? 'Loading Python environment... Please wait...' : ''}
        </div>
        
        <div style={styles.inputArea}>
          <input
            ref={inputRef}
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            disabled={inputDisabled}
            placeholder="Type your response here..."
            style={styles.input}
          />
          <button 
            onClick={handleSubmit} 
            disabled={inputDisabled}
            style={styles.button}
          >
            Submit
          </button>
          <button 
            onClick={handleRestart}
            style={styles.button}
          >
            Restart
          </button>
        </div>
      </div>

      <div style={styles.info}>
        <h3 style={styles.infoTitle}>About This Game</h3>
        <p>This is a Python text-based adventure game running entirely in your browser using Pyodide (Python compiled to WebAssembly).</p>
        <p><strong>How to play:</strong> Type your responses in the input box and press Submit or Enter. Follow the prompts to navigate through the Matrix-themed story!</p>
      </div>
    </div>
  );
};

// Styles object
const styles: { [key: string]: React.CSSProperties } = {
  container: {
    maxWidth: '900px',
    margin: '0 auto',
    padding: '20px',
    fontFamily: "'Courier New', monospace",
    color: '#00ff00',
  },
  title: {
    textAlign: 'center',
    marginBottom: '20px',
    color: '#00ff00',
    textShadow: '0 0 10px #00ff00',
  },
  gameArea: {
    background: '#000',
    border: '2px solid #00ff00',
    borderRadius: '8px',
    padding: '20px',
    boxShadow: '0 0 20px rgba(0, 255, 0, 0.3)',
  },
  output: {
    whiteSpace: 'pre-wrap',
    fontFamily: "'Courier New', monospace",
    fontSize: '14px',
    lineHeight: '1.6',
    minHeight: '400px',
    maxHeight: '600px',
    overflowY: 'auto',
    marginBottom: '15px',
    padding: '10px',
    background: '#0a0a0a',
    border: '1px solid #003300',
    borderRadius: '4px',
    color: '#00ff00',
  },
  inputArea: {
    display: 'flex',
    gap: '10px',
    alignItems: 'center',
    position: 'relative',
    zIndex: 10,
  },
  input: {
    flex: 1,
    background: '#0a0a0a',
    border: '1px solid #00ff00',
    color: '#00ff00',
    padding: '10px',
    fontFamily: "'Courier New', monospace",
    fontSize: '14px',
    borderRadius: '4px',
    outline: 'none',
    pointerEvents: 'auto',
    position: 'relative',
    zIndex: 10,
  },
  button: {
    background: '#003300',
    border: '1px solid #00ff00',
    color: '#00ff00',
    padding: '10px 20px',
    fontFamily: "'Courier New', monospace",
    fontSize: '14px',
    cursor: 'pointer',
    borderRadius: '4px',
    transition: 'all 0.3s',
    pointerEvents: 'auto',
    position: 'relative',
    zIndex: 10,
  },
  info: {
    marginTop: '20px',
    padding: '15px',
    background: '#001a00',
    border: '1px solid #003300',
    borderRadius: '4px',
    fontSize: '12px',
    lineHeight: '1.6',
  },
  infoTitle: {
    marginBottom: '10px',
    color: '#00ff00',
  },
};

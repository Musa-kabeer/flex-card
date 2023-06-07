import { useState } from 'react';
import './index.css';

function App() {
  const [steps, setSteps] = useState(0);
  const [isCancel, setIsCancel] = useState(false);

  const messages = [
    'Learn React ⚛️',
    'Apply for jobs 💼',
    'Invest your new income 🤑',
  ];

  // HANDLERS
  const handleNext = () => {
    if (steps >= 0 && steps <= 1) {
      setSteps((prev) => prev + 1);
    } else {
      setSteps(0);
    }
  };

  const handlePrevious = () => {
    if (steps <= 2) {
      setSteps((prev) => prev - 1);
    }

    if (steps === 0) {
      setSteps(2);
    }
  };

  const handleCancel = () => {
    setIsCancel(!isCancel);
  };

  return (
    <>
      <button className="close" onClick={handleCancel}>
        &times;
      </button>
      {isCancel && (
        <div className="steps">
          <div className="numbers">
            <div className="active">1</div>
            <div className={steps >= 1 ? 'active' : ''}>2</div>
            <div className={steps >= 2 ? 'active' : ''}>3</div>
          </div>

          <p className="message">{messages[steps]}</p>

          <div className="buttons">
            <button
              style={{ backgroundColor: '#7950f2', color: '#fff' }}
              onClick={handlePrevious}
            >
              Previous
            </button>
            <button
              style={{ backgroundColor: '#7950f2', color: '#fff' }}
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default App;

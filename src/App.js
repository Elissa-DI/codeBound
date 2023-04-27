import './App.css';
import { useState } from 'react'

function App() {
  const [rating, setRating] = useState(0);

  const handleClick = (value) => {
    setRating(value);
  };
  return (
    <div className="App">
      <div className='container'>
        <div className='heading'>
          <h2>Customer survey</h2>
        </div>
         <div className='question'>
           <p>How are you stisfied by our serveice</p>
         </div>
         <div className='rate'>
           {[1, 2, 3, 4, 5].map((value) => (
              <button
                 key={value}
                 className={value <= rating ? 'selected' : ''}
                 onClick={() => handleClick(value)}>
                   ★
              </button>
      ))}
         </div>
         <div>
          <button>Prev</button>
          <button>Next</button>
         </div>
      </div>
    </div>
  );
}

export default App;

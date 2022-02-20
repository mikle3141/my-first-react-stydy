import React from 'react'
import './styles/App.css'

function App() {
  return (
    <div className="App">
        <dif className="post">
            <div className="post__content">
                <strong>1. Javascript</strong>
                <div>
                    JavaScript - язык программирования
                </div>
            </div>
            <div className="post__btns">
                <button>Удалить</button>
            </div>
        </dif>
        <dif className="post">
            <div className="post__content">
                <strong>1. Javascript</strong>
                <div>
                    JavaScript - язык программирования
                </div>
            </div>
            <div className="post__btns">
                <button>Удалить</button>
            </div>
        </dif>
    </div>
  );
}

export default App;

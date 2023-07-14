import { useState } from "react"


function App() {
    const [display, setDisplay] = useState('0')
    const [result, setResult] = useState('0')

    const buttons = [

        { id: 'one', value: '1'},
        { id: 'two', value: '2'},
        { id: 'three', value: '3'},
        { id: 'four', value: '4'},
        { id: 'five', value: '5'},
        { id: 'six', value: '6'},
        { id: 'seven', value: '7'},
        { id: 'eight', value: '8'},
        { id: 'nine', value: '9'},
        { id: 'zero', value: '0'},
        { id: 'decimal', value: '.'},
        { id: 'clear', value: 'C'},
        { id: 'add', value: '+'},
        { id: 'substract', value: '-'},
        { id: 'multiply', value: '*'},
        { id: 'divide', value: '/'},
        { id: 'equals', value: '='},

    ]

    const calculate = (event) => {
        const button = event.target.id;

        if ( button == 'clear') {
            setResult('0');
            setDisplay('0');
        } else if ( button == 'equals' ) {
            setResult('0');
            setDisplay(eval(display));
        } else if (
            button == 'substract'
        ) {
            setResult(event.target.innerHTML);
         if (display[display.length - 1] != event.target.innerHTML)
        setDisplay(display + event.target.innerHTML);
      } else if (
        button == 'add' ||
        button == 'multiply' ||
        button == 'divide' 
      ) {
        setResult(event.target.inenrHTML)
        if (
            display[display.length- 1] == '-' ||
            display[display.length - 1] == '+' ||
            display[display.length - 1] == '*' ||
            display[display.length - 1] == '/' 
         ) {
            if (
                display[display.length - 2] == '-' ||
                display[display.length - 2] == '+' ||
                display[display.length - 2] == '*' ||
                display[display.length - 2] == '/' 

            )
            setDisplay(display.slice(0, -2) + event.target.innerHTML)
        else 
            setDisplay(display.slice(0, -1) + event.target.innerHTML)
        }
        else
        setDisplay(display + event.target.innerHTML)
      }
      else if (
        result == '+' ||
        result == '-' ||
        result == '*' ||
        result == '/'
      ) {
        if (button == 'decimal') {
          setResult('0' + event.target.innerHTML)
          setDisplay(display + '0' + event.target.innerHTML)
        } else {
          setResult(event.target.innerHTML)
          setDisplay(display + event.target.innerHTML)
        }
      }
      
      else if (result == '0' && button != 'decimal') {
        setResult(event.target.innerHTML)
        setDisplay(event.target.innerHTML)
      }
      else if (button == 'decimal' && result.includes('.') == true)
      setResult(result + '')
      else {
        setResult(result + event.target.innerHTML)
        setDisplay(display + event.target.innerHTML)
      }
    }


  return (
    <>
    <div id="display-container" className="display-container">
        <div className="dots">
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
        </div>
        <div id="display">{display}</div>
        <div id="result">{result}</div>
    </div>
    <div id="button-container">
        {
            buttons.map((item, i)=> (
                <button key={i} id={item.id} className="button" onClick={calculate}>
                    {item.value}
                </button>
            ))
        }
    </div>
  </>)
}

export default App
import React,{useState} from 'react';
// import Navbar from '../components/Navbar';

export default function Form1(props) {
    
    const handleUpClick = () =>{
        let newText = text.toUpperCase();
        textFunc(newText);
        props.showAlert("String convertd into uppercase","success")
    }

    const handleLoClick = () =>{
        let newText = text.toLowerCase();
        textFunc(newText);
    }

    const handleClearClick = () =>{
        textFunc('');
    }

    const handleCopyClick = () =>{
        let currentText = document.getElementById('Box1') 
        currentText.select();
        navigator.clipboard.writeText(currentText.value)
    }

    const handleOnChange = (eventVal) =>{
        textFunc(eventVal.target.value)
    }

    const [text,textFunc] = useState('');

    return (
        <>
        <div className='container'>
            <div className="mb-3">
            <label htmlFor="Box1" className="form-label"><h3>{props.heading}</h3></label>
            <textarea className={`form-control text-${props.mode === 'light'?'black':'white'} bg-${props.mode === 'light'?'white':'black'}`} value={text} id="Box1" onChange={handleOnChange} rows="8" ></textarea>
            </div>

            {/* TO GET BUTTON LIKE MODE COLOR */}
            {/* <button className={`btn border-2 btn-${Navbar.mode}`} onClick={handleUpClick}>UpperCase</button>
            <button className={`btn border-2 btn-${Navbar.mode}`} onClick={handleLoClick}>LowerCase</button>
            <button className={`btn border-2 btn-${Navbar.mode}`} onClick={handleClearClick}>Clear Text</button>
            <button className={`btn border-2 btn-${Navbar.mode}`} onClick={handleCopyClick}>Copy Text</button> */}

            <button className="btn border-2 btn-dark mx-2" onClick={handleUpClick}>UpperCase</button>
            <button className="btn border-2 btn-dark mx-2" onClick={handleLoClick}>LowerCase</button>
            <button className="btn border-2 btn-dark mx-2" onClick={handleClearClick}>Clear Text</button>
            <button className="btn border-2 btn-dark mx-2" onClick={handleCopyClick}>Copy Text</button>

        </div>
        <div className="container my-4">
            <h1>Text Detail</h1>
            <p> {text.split(" ").length} words {text.length} characters</p>
            <p>your text read in {text.split(" ").length * 0.008}</p>

            <h2>Text Summery</h2>
            <p> {text === '' ?'Enter some text':text} </p>
        </div>
        </>
    )
}

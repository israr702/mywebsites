import React,{useState} from 'react'

const Text = (props) => {
  const [text, setText] = useState('write some thing')
  const upCase =()=>{
    let newText = text.toUpperCase();
    setText(newText)
  }
  const loCase =()=>{
    let newText = text.toLowerCase();
    setText(newText)
  }
  const onChange=(e)=>{
    setText(e.target.value)
  }
  return (
    <>
      <div className='container' style={{color: props.mode=== 'dark'?'white':'black'}}>
      <h1> Enter Text Here</h1>
    <div className='container mb-3' > 
        <textarea className="form-control"style={{backgroundColor: props.mode ==='dark'?'grey':'white', color:props.mode ==='dark'?'white':'black'}}  value={text} onChange={onChange} id="text" rows="8"></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={upCase}>Uppercase</button>
      <button className="btn btn-primary mx-2" onClick={loCase}>Lowercase</button>
    </div>
    <div className="container" style={{color:props.mode ==='dark'?'white':'black'}}>
      <h1>Text summary</h1>
      <p>{text.split(' ').length} Total Words and {text.length} Characters</p>
      <p>{text.split ('.').length} Total Sentence and {text.split(/\r?\n|\r/).length} Paragraph</p>
      <p>In ({0.008 * text.split(' ').length}) Minutes you can Read</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </>
  )
}

export default Text

import './Box.css'
function DecodeBox(){
    return(<>
    <div className="container">
        <div className="head">
            <h1>Paste your Lingo</h1>
        </div>
        <div className="textBoxContainer">
            <textarea rows={1} column={40} className='textBox' placeholder='Paste your email, memo or your performance review here...' />
        </div>
        <div className="btnContainer">
            <button id='btn1'>Detect BS</button>
            <button id='btn2'>Make it Human</button>
        </div>
        <div className="examples">
            <h2>Example phrases to try:</h2>
            <p>
            -We need to circle back and touch base on this. <br />
            -What's our action plan to leverage our core competency? <br />
            -That's just low-hanging fruit. Let's think outside the box and find some synergy. <br /></p>
        </div>
    </div>
        </>)
}
export default DecodeBox
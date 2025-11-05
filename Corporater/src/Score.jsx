import './progressbar.css'
function Score({meterScore , jargonArr}){
    const meterStyle={'--progress':`${meterScore}%`}

   const j = jargonArr.map((jargonObject) => (
  
    // 2. We can use a property like 'suggestion' as the key
    <li key={jargonObject.suggestion}>
    
      {/* 3. Now, we access the properties we want to display! */}
      <strong>{jargonObject.suggestion}</strong>
      <p><em>{jargonObject.scorn}</em></p>
      
    </li>
  ));

    return(
        <div className="container">
            <div className="head">
                <h1>
                    Your score
                </h1>
            </div>
            <div className="meter">
                <div className="mintitle">
                <h3>BS-o-meter:{meterScore}%</h3>
                <h3>{100 - meterScore}% Human</h3>
                </div>
     
                <div className="bar" style={meterStyle}>
                </div>
            </div>
            <div className="mintitle">
                    <h2>
                        Jargon Jar
                    </h2>
            </div>
            <div className="jagronJar">
                <div className="mintitle">
                </div>
                <div className="jar">
                   <ul>{j}</ul>
                </div>
            </div>

        </div>
    )
}
export default Score
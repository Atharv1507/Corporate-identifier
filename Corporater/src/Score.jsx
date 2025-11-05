import './progressbar.css'
function Score({meterScore}){
    const meterStyle={'--progress':`${meterScore}%`}
    return(
        <div className="container">
            <div className="head">
                <h1>
                    Your score
                </h1>
            </div>
            <div className="meter">
                <div className="mintitle">
                <h3>BS-o-meter</h3>
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
                    <p>No corporate jargon found. 100% human </p>
                </div>
            </div>

        </div>
    )
}
export default Score
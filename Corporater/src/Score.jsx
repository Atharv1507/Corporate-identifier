import './progressbar.css'
function Score(){
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
                <h3>100% Human</h3>
                </div>
    
                <div className="bar">
                </div>
            </div>
            <div className="mintitle">
                    <h2>
                        Jagron Jar
                    </h2>
            </div>
            <div className="jagronJar">
                <div className="mintitle">
                </div>
                <div className="jar">
                    <p>No corporate jagron found. 100% human </p>
                </div>
            </div>

        </div>
    )
}
export default Score
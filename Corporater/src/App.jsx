import Header from "./Header"
import Footer from "./Footer"
import Score from "./Score"
import DecodeBox from "./DecodeBox"
 import buzzwords from'./assets/jsonData/buzzwords.json'
import { useState } from "react"

function App() {


  const [text,setText]= useState('')
  const[scanResults,setScanResults]=useState({score:0 ,matches:[]})
  const[meterScore,setMeterScore]=useState(0);
  
  const humanize=()=>{
    let humanizedText=text;
    for(const jargon in buzzwords){
      const suggestion=buzzwords[jargon].suggestion

      const regEx=new RegExp(jargon ,'gi')

      humanizedText=humanizedText.replace(regEx,suggestion)
    }
    setText(humanizedText)
  }

  const handle_detect=()=>{
    const lowerText=text.toLowerCase()
    let detected_j=[]
    let score=0;
    const jargonArr=[]
    for(const jargon in buzzwords){
      if(lowerText.includes(jargon)){
        jargonArr.push(jargon)
        detected_j.push(buzzwords[jargon])
        score+=buzzwords[jargon].level
      }
    }
    setScanResults({score:score,matches:detected_j})
    console.log(jargonArr)
    
    if(score==0){
      setMeterScore(0
      )
    }

    else if(score<=2){
      setMeterScore(25)
    }
    else if(score<=4){
      setMeterScore(50)
    }

    else if(score<=6)
      setMeterScore(75)
  
    else{
      setMeterScore(100)
    }
  }


  return (
    <>
     <Header></Header>
     <DecodeBox textVal={setText} humanize={humanize} ChangedText={text} handle_detect={handle_detect}></DecodeBox>
      <Score meterScore={meterScore}></Score>
     <Footer/>
    </>
  )
}

export default App

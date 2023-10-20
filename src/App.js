import React from 'react'
import './App.css'
const App = () => {

  const[clock,setClock]=React.useState("")

  setInterval(time, 1000);

function time(){
let time=new Date().toLocaleTimeString()
setClock(time)
  }

  return (
    <div className='outerclock'>
      <div className='clock'>{clock}</div>
    </div>
  )
}

export default App


// import React from 'react'
// import './App.css'
// const App = () => {

// const[hour,setHour]=React.useState("00")
// const[min,setMin]=React.useState("00")
// const[sec,setsec]=React.useState("00")
// const[am,setAm]=React.useState("AM")

//  setInterval(time, 1000);
  
//  function time(){
//   let time=new Date()
//   let hours=zero(time.getHours())
//   let mins=zero(time.getMinutes())
//   let secs=zero(time.getSeconds())

//   setHour(hours)
//   setMin(mins)
//   setsec(secs)
  
// if(hour>12){
//   setAm("PM")
// }
//   function zero(n){
//     return n<10?"0"+n:n
//   }
//     }


//   return (
//     <div className='whole'>
//       <h1>Digital Clock</h1>
//       <div className='container'>
//         <span>{hour}</span>
//         <span>:</span>
//         <span>{min}</span>
//         <span>:</span>
//         <span>{sec}</span>
//         <span> {am}</span>
//       </div>
//     </div>
//   )
// }

// export default App


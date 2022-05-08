import React, { forwardRef } from "react"
import axios from "axios"

const PrintComponent = forwardRef((props, ref) => {
  return (
    <div ref={ref}>
      <h1>RaBa Here!</h1>
      <br />
      <h2>Hydrogen</h2>
    </div>
  )
})

export default PrintComponent

//Experiment with the node api
// var data2
// axios.post("localhost:3000/books", { K: "Letter is K" }).then((res) => {
//   console.log(data)
// })

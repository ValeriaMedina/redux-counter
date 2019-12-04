import React from 'react'

function CounterWrapper(props) {
  return (
    <div>
      This is the Counter Container
    <div
        style={{
          display: "flex",
          border: "1px solid black",
          justifyContent: "space-around",
          alignItems: "center",
          width: "100px",
          height: "80px",
          marginTop: "5px",
          marginLeft: "10px"
        }}
      >
        {props.children}
      </div>
      <br />
      <br />
      <hr />
    </div>
  )
}

export default CounterWrapper
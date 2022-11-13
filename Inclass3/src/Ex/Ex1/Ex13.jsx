import React from 'react'
import MyButton2 from './MyButton2'


function render({second}) {
  return (
    <main>
    <h1 style={{color: "red"}}>Ex1.3</h1>
        <MyButton2/>
        <MyButton2 text = {second.text} disabled={second.disabled} />
    </main>
  )
}

render({
    second: {
        text: "Second Button",
        disabled: true,
    }
})
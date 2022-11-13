import React from 'react'
import MyButton from '../Ex0/MyButton'
import MyList from './Mylist'

const appState = {
    text: "My Button",
    disabled: true,
    items: ["First", "Second", "Third"],
}

export default function Ex12(props) {
  return (
    <main>
        <h1 style={{color: "red"}}>Ex1.2</h1>
        <MyButton text={props.text} disabled={props.disabled} />
        <MyList items={props.items} />
    </main>
  )
}

Ex12(appState);

setTimeout(() => {
    appState.disabled = false;
    appState.items.push("Fourth");

    Ex12(appState);
}, 1000)



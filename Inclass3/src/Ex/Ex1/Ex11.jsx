import React from 'react'

class MyComponent extends React.Component{
    state = {
        first: false,
        second: true,
    }
    render() {
        const {first, second} = this.state;
        return (
            <main>
                <h1 style={{color: "red"}}>Ex1</h1>
                <section>
                    <button disabled={first}>First</button>
                </section>
                <section>
                    <button disabled={second}>Second</button>
                </section>
            </main>
          )
    }
}

export default MyComponent;
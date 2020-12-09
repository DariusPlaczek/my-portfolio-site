import React from 'react'

function Home(props) {

    const styles = {
        zIndex: props.styles
    }

    return (
        <div className={`home-container ${props.animation}`} style={styles}>
            <h1>About Me</h1>
        </div>
    )
}

export default Home

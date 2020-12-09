import React from 'react'

function Home(props) {

    const styles = {
        zIndex: props.styles
    }

    return (
        <div className={`home-container ${props.animation}`} style={styles}>
            <h6>About Me</h6>
        </div>
    )
}

export default Home

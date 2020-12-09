import React from 'react'

function ReactPortfoio(props) {

    const styles = {
        zIndex: props.styles
    }

    return (
        <div className={`react-container ${props.animation}`} style={styles}>
            <h1>React</h1>
        </div>
    )
}

export default ReactPortfoio

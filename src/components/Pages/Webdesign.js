import React from 'react'

function Webdesign(props) {

    const styles = {
        zIndex: props.styles
    }

    return (
        <div className={`webdesign-container ${props.animation}`} style={styles} >
            <h1>Webdesign</h1>
        </div>
    )
}

export default Webdesign

import React from 'react'


function Links(props) {
    const { linkName, classes, onClick, id } = props;

    return (
      <div className={`links ${classes}`} onClick={onClick} >
        <div id={id} >{ linkName }</div>
      </div>
    )
}

export default Links

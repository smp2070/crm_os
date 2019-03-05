import React from 'react';

const backdrop = (props) => (
    <React.Fragment>
        {props.show && <div className="backdrop" onClick={props.clicked}></div>}
    </React.Fragment>
);

export default backdrop;
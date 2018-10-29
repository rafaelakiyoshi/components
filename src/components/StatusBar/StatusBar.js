import React from 'react';
import './StatusBar.css';

const StatusBar = (props) => {
    console.log(props)

    if (props.position == 'up') {
        return (
            <h1 className={props.status}>Status</h1>
        )
    } else if (props.position == 'down') {
        return (
            <h1 className={`${props.status}Down`}>Status</h1>
        )
    } else {
        return (
            <div>EROR</div>
        )
    }
}

export default StatusBar
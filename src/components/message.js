import React from 'react';

function Message(props){
    return(
        <div>
        <h3>
            Value is: {props.counter}
        </h3>
        </div>
    )
}

export default Message;
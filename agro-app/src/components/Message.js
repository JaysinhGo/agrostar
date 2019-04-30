import React from 'react';
import './../css/Message.css'

const Message = (props)=>{
    return(
        <div className={`msg left-align msg-${props.type}`}>
            <div className="col s12 m6 l6">
                <blockquote>{props.message}</blockquote>
            </div>
        </div>
    )
}

export default Message;

// color: #9c221e;  info
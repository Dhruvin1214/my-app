import React from 'react'

export default function Alert1(props) {

    const capitalize = () =>{
        let text = props.alertMsg.type.toLowerCase();
        return text.charAt(0).toUpperCase() + text.slice(1);
    }

  return (
    props.alertMsg && <div class={`alert alert-${props.alertMsg.type} alert-dismissible fade show`} role="alert">
        <strong>{capitalize(props.alertMsg.type)}: {props.alertMsg.msg} </strong>
    </div>
  )
}

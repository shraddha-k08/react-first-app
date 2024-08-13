import React from 'react';

export default function Alert(props) {
    const capitalize = (word) => {
        if (!word) return ''; // Handle case when `word` is null or undefined
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    };

    // Check if `props.alert` exists before rendering
    if (!props.alert) {
        return null;
    }

    return (

        <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
  <strong>{capitalize(props.alert.type)}</strong>: {capitalize(props.alert.msg)}
  <button type="button" className="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
</div>
    );
}

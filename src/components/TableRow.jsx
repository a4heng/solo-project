import React from 'react';

const TableRow = (props) => {
    return ( 
    <tbody>
        <tr>
            <th><span>From @</span>{props.msg.username}</th>
    <th>{props.msg.message} <div id="span">{new Date(props.msg.date).toDateString()}
    </div> 
    </th>
        </tr>
    </tbody>
    );
}
 
export default TableRow;
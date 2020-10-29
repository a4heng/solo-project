import React from 'react';
import TableRow from './TableRow.jsx';

const Table = (props) => {
    let msgList = props.messageList.map((msg, index)=>{
        return <TableRow key={index} msg={msg} />
    })
    return (
    <div>
        <table>
            <thead>
                <tr>
                    <th>Username</th>
                    <th>Message</th>
                </tr>
            </thead>
            {msgList}
        </table>
    </div> 
    );
}
 
export default Table;
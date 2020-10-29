import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import * as actions from "../actions/actions"
import MsgForm from './msgForm.jsx';
import Table from './Table.jsx';

const Messages = (props) => {
    useEffect(()=>{
        props.fetchAllMessages()
    },[])
    return (
    <div className="container">
        <MsgForm/>
        <div className="table-div">
            <Table {...props}/>
        </div>
    </div>
    );
}
const mapStateToProps = (state) => ({
    messageList : state.messageReducer.list
})
const mapActionToProps = {
    fetchAllMessages : actions.fetchAll
}


export default connect(mapStateToProps, mapActionToProps)(Messages);
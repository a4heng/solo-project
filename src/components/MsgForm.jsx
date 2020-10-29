import React from 'react';
import Form from './Form.jsx'

const initialFormValue = {
    username: '',
    message: ''
}

const MsgForm = (props) => {
    const {
        values,
        setValues,
        handleInput
    } = Form(initialFormValue)
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("submit")
    }
    return (
        <div className="form-box"> 
            <form autoComplete='off' onSubmit={handleSubmit}>
                <input type='text' id='username' name='username' placeholder="Username" value={values.username} onChange={handleInput}/>
                <input type='text' id='msg' name='message' placeholder="Message" value={values.message} onChange={handleInput}/>
                <input className='submit' type="submit" className="submitMsg"/>
            </form>
        <button onClick={function(){window.alert('clicked')}}>tester</button>
        </div>
    );
}

// class MsgForm extends React.Component{
//     constructor(props){
//         super(props);
//         this.state = {
//             username: '',
//             message: ''
//         }
//     }
//     handleSubmit(e){
//         e.preventDefault();
//         console.log(values);
//     }
//     handleInput(e) {
//         console.log("hello")
//         const {name , value} = e.target
//         this.setState({
//             ...state,
//             name : value
//         })
//     }
//      render(){
//         return <div className="form-box"> 
//             <form autoComplete='off' onSubmit={this.handleSubmit.bind(this)}>
//                 <input type='text' id='username' name='username' placeholder="Username" value={this.state.username} onChange={this.handleInput.bind(this)}/>
//                 <input type='text' id='msg' name='msg' placeholder="Message" value={this.state.message} onChange={this.handleInput.bind(this)}/>
//                 <input type="submit" className="submitMsg"/>
//             </form>
//             <button onClick={()=>console.log("hello")}>tester</button>
//         </div>
//     }
// }
export default MsgForm ;

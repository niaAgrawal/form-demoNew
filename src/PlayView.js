import React from 'react';
import {s} from './Battle.css'


class PlayView extends React.Component{
    constructor (props){
        super(props);
        this.state = {
            username: ''
        }
        this.formhandleSubmit = this.formhandleSubmit.bind(this);
        this.senddata = this.senddata.bind(this);
    }

    senddata(e){
        e.preventDefault ();
        this.props.onSubmit(
            this.props.id,
            this.state.username
        );
    }
    formhandleSubmit (e){
        
        this.setState({
            username : e.target.value
        })
    }
    render (){
        return (
            <div className="battleChild">
                <form onSubmit={this.senddata}>
                    <label htmlFor='username'>{this.props.label}</label>
                    <br/>
                    <input 
                        placeholder="github username"
                        type="text"
                        value={this.state.username}
                        onChange={this.formhandleSubmit}
                    />
                    <br/>
                    <button type='submit' disabled={!this.state.username}>Submit</button>
                </form>
            </div>
        )
    }
}

export default PlayView;
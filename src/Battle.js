import React from 'react';
import {s} from './Battle.css'
import PlayView from './PlayView';

class Battle extends React.Component{
    constructor (props){
        super(props);
        this.state = {
            playerOne : '',
            playerOneImg : '',
            playerTwo: '',
            playerTwoImg: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit (id, username){
        this.setState((currState)=>{
            if(id == 1 ){
                return ( {
                    playerOne : username,
                    playerOneImg : 'https://github.com/'+ username +'.png?size=200'
                })
            }else{
                return ( {
                    playerTwo : username,
                    playerTwoImg : 'https://github.com/'+ username +'.png?size=200'
                })
            }
        });
    }
    
    render (){
        const playOne = '1';
        const playTwo = '2';
        const playerDisplay = (play) => {
            let obj ={};
            if(play == 1){
                obj.playname = this.state.playerOne;
                obj.playerImg = this.state.playerOneImg
            }else{
                obj.playname = this.state.playerTwo;
                obj.playerImg = this.state.playerTwoImg
            }
            return(
                <div>
                   <h3>{obj.playname}</h3> 
                    <img src={obj.playerImg} />
                </div>
            )
        }
        // test data tylermcginnis
        return (
            <div className='battleWrapper'>
                {this.state.playerOne == '' ?
                    <PlayView
                        id = '1'
                        label = 'Player One'
                        onSubmit ={this.handleSubmit}
                    />
                : <div style={{width:'500px',margin:'20'}}>{ playerDisplay(playOne)}</div>
                }
                {this.state.playerTwo == '' ?
                    <PlayView
                        id = '2'
                        label = 'Player Two'
                        onSubmit ={this.handleSubmit}
                    />
                :<div style={{width:'500px',margin:'20'}}>{ playerDisplay(playTwo)}</div>
                }
            </div>
        )
    }
}

export default Battle;
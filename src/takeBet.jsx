import * as React from "react";

export default class TakeBet extends React.Component{
    state = {
        txid:''
    }
    constructor(props){
        super(props);
        this.takeBet = this.takeBet.bind(this)
    }

    takeBet = async()=>{
        const value = await this.props.betInfo.contract.methods.betAmount().call()
        const transaction = await this.props.betInfo.contract.methods.takeBet()
            .send({from:this.props.account,value,gas:6000000})
        this.props.transactionCompleted(transaction.transactionHash)

    }
    render(){
        if(!this.state.txid) {
            return (<button onClick={this.takeBet}>TakeBet</button>)
        }
        else{
            return ;
        }
    }
}



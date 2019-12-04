import React from "react";
import { connect } from "react-redux";

import CounterWrapper from '../components/counterWrapper'
import Button from '../components/button'
import CounterNumber from '../components/counterNumber'

import { increment, decrement, aumentar, reducir } from "../redux/actions";

class Counter extends React.Component {    
    handleIncrement = () => {
        this.props.increment();
    };

    handleDecrement = () => {
        this.props.decrement();
    };

    handleAumentar = () => {
        this.props.aumentar();
    };

    handlereducir= () => {
        this.props.reducir();
    };


    render() {
        console.log('this.props on Counter Container: ', this.props)
        return (
            <CounterWrapper>
                <Button onClick={this.handleDecrement} text="-" />
                <CounterNumber color="blue" text={this.props.count} />
                <Button onClick={this.handleIncrement} text="+" />
            </CounterWrapper>
        );
    }
}

class Counter2 extends React.Component{
    handleAumentar = () => {
        this.props.aumentar();

    };
}


function mapStateToProps(state) {
    return {
        count: state.count,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        increment: () => dispatch(increment()),
        decrement: () => dispatch(decrement()),
        aumentar: () => dispatch(aumentar()),
        reducir: () => dispatch(reducir())
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter);
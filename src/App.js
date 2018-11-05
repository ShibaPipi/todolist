import React, {Component} from "react";
import {CSSTransition} from 'react-transition-group';
import "./style.css";

class App extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            show: true,
        };
        this.handleToggle = this.handleToggle.bind(this);
    }

    render() {
        return (
            <React.Fragment>
                <CSSTransition
                    in={this.state.show}
                    timeout={1000}
                    classNames="fade"
                    unmountOnExit
                    onEntered={(el)=>{el.style.color="blue"}}
                    appear={true}
                >
                    <div>hello</div>
                </CSSTransition>
                <button onClick={this.handleToggle}>toggle</button>
            </React.Fragment>
        )
    }

    handleToggle() {
        this.setState(() => ({
            show: !this.state.show
        }))
    }
}

export default App;
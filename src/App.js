import React, {Component} from "react";
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import "./style.css";

class App extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            list: [],
        };
        this.handleAddItem = this.handleAddItem.bind(this);
    }

    render() {
        return (
            <React.Fragment>
                <TransitionGroup>
                    {
                        this.state.list.map((item, index) => {
                            return (
                                <CSSTransition key={index} timeout={1000} classNames="fade" unmountOnExit
                                    onEntered={(el) => {
                                        el.style.color = "blue"
                                    }}
                                    appear={true}
                                >
                                    <div>{item}</div>
                                </CSSTransition>
                            )
                        })
                    }
                </TransitionGroup>
                <button onClick={this.handleAddItem}>toggle</button>
            </React.Fragment>
        )
    }

    handleAddItem() {
        this.setState((prevState) => {
            return {
                list: [...prevState.list, "item"],
            }
        })
    }
}

{/*<CSSTransition*/
}
{/*in={this.state.show}*/
}
{/*timeout={1000}*/
}
{/*classNames="fade"*/
}
{/*unmountOnExit*/
}
{/*onEntered={(el) => {*/
}
{/*el.style.color = "blue"*/
}
{/*}}*/
}
{/*appear={true}*/
}
{/*>*/
}
{/*<div>hello</div>*/
}
{/*</CSSTransition>*/
}
export default App;
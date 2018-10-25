import React, {Component} from "react";
import TodoItem from "./TodoItem";
import Test from "./Test";
import "./style.css";

class TodoList extends Component {

    constructor(props) {
        super(props);
        // 当组件的 props 或者 state 发生改变的时候，render 函数就会重新执行
        this.state = {
            inputValue: "",
            list: [],
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleBtnClick = this.handleBtnClick.bind(this);
        this.handleItemDelete = this.handleItemDelete.bind(this);
    }

    render() {
        return (
            <React.Fragment>
                <div>
                    <label htmlFor="insertArea">输入内容</label>
                    <input id="insertArea" className="input" type="text" value={this.state.inputValue}
                           onChange={this.handleInputChange}/>
                    <button onClick={this.handleBtnClick}>提交</button>
                </div>
                <ul>
                    {this.getTodoItem()}
                </ul>
                <Test content={this.state.inputValue}/>
            </React.Fragment>
        )
    }

    getTodoItem() {
        return this.state.list.map((item, index) => {
            return (
                <TodoItem key={index} content={item} index={index} deleteItem={this.handleItemDelete}/>
            )
        })
    }

    handleInputChange(e) {
        const {value} = e.target;
        this.setState(() => ({
            inputValue: value,
        }));
    }

    handleBtnClick() {
        this.setState((prevState) => ({
            list: [...prevState.list, prevState.inputValue],
            inputValue: "",
        }));
    }

    handleItemDelete(index) {
        this.setState((prevState) => {
            const list = [...prevState.list];
            list.splice(index, 1);
            return {list}
        });
    }
}

export default TodoList
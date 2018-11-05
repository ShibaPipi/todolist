import React, {Component} from "react";
import TodoItem from "./TodoItem";
import axios from "axios";
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

    // 组件在第一次挂载到页面之前的时候会被执行
    componentWillMount() {
        // console.log("componentWillMount");
    }

    // 组件被更新之前的时候会被自动执行，需要返回一个 bool 值
    shouldComponentUpdate() {
        // console.log("shouldComponentUpdate");
        return true;
        // return false;
    }

    // 组件被更新之前，它会自动执行，但是他在 shouldComponentUpdate 之后执行
    // 如果 shouldComponentUpdate 返回 true，执行，false 不执行
    componentWillUpdate() {
        // console.log("componentWillUpdate");
    }

    // 组件更新完成之后，他会被执行
    componentDidUpdate() {
        // console.log("componentDidUpdate");
    }

    // 当一个组件从父组件接收了参数，只要父组件的 render 函数被执行了，子组件的改生命周期函数就会被执行，即：
    // 如果这个组件第一次存在于父组件中，不会执行
    // 如果这个组件已经存在于父组件中，才会执行
    componentWillReceiveProps() {
        // console.log("componentWillReceiveProps");
    }

    render() {
        // console.log("render");
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
            </React.Fragment>
        )
    }

    // 组件在第一次挂载到页面之后的时候会被执行
    componentDidMount() {
        axios.get('/api/todolist')
            .then((res) => {
                // alert(res.data);
                this.setState(() => (
                    {
                        list: [...res.data],
                    }
                ))
            })
            .catch(() => {
                alert("error");
            });
    }

    getTodoItem() {
        return this.state.list.map((item, index) => {
            return (
                <TodoItem key={item} content={item} index={index} deleteItem={this.handleItemDelete}/>
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
            // 展开运算符
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

    // 当这个组件即将从页面中被剔除时会被执行
    componentWillUnmount() {
        console.log("componentWillUnmount");
    }
}

export default TodoList;
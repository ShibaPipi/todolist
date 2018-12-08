import React from "react";
import 'antd/dist/antd.css';
import {Input, Button, List} from "antd";
import {connect} from "react-redux";
import {getAddItemAction, getDeleteItemAction, getInputChangeAction} from "./store/actionCreators";

const TodoList = (props) => {
    const {inputValue, changeInputValue, handleClick, list, handleDelete} = props;

    return (
        <div style={{marginTop: "10px", marginLeft: "10px"}}>
            <div>
                <Input
                    value={inputValue}
                    placeholder="todo info"
                    style={{width: "300px", marginRight: "10px"}}
                    onChange={changeInputValue}
                />
                <Button type="primary" onClick={handleClick}>提交</Button>
            </div>
            <List
                style={{marginTop: "10px", width: "300px"}}
                bordered
                dataSource={list}
                renderItem={(item, index) => (<List.Item onClick={() => {handleDelete(index)}}>{item}</List.Item>)}
            />
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        inputValue: state.inputValue,
        list: state.list,
    }
};

// store.dispatch props
const mapDispatchToProps = (dispatch) => {
    return {
        changeInputValue(e) {
            const action = getInputChangeAction(e.target.value);
            dispatch(action);
        },

        handleClick() {
            const action = getAddItemAction();
            dispatch(action);
        },

        handleDelete(listIndex) {
            const action = getDeleteItemAction(listIndex);
            dispatch(action);
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
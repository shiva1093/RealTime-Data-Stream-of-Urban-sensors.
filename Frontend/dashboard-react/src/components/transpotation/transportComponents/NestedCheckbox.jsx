import React from "react";
import ReactDOM from "react-dom";
import treeData from '../data.json'
import { TreeSelect } from 'antd';
import 'antd/dist/antd.css';

const SHOW_PARENT = TreeSelect.SHOW_PARENT;

class NestedCheckbox extends React.Component {
    state = {
        value: ['0-0-0'],
    };
    onChange = (value,label,extra) => {
        this.setState({ value });
        var busName = [];
        var busNamesArray = [];
        var uniqueNames = [];
        var busNamesAll =[];
        if(value == 'All'){
            console.log('onChange ', value);   /* If the user selects ALL from the dropdown*/
            busNamesArray= [
                {
                    'busName': value
                }
            ];
        }else if(extra.allCheckedNodes.length >= 1){
            extra.allCheckedNodes.forEach((nodes) => {

                if(!nodes.children) /* Only If the parent has no children (ONLY THE DIRECTION NAME of the BUS) */
                {
                    var parentBusName = nodes.node.props.parent;
                    var busDirection = nodes.node.props.value;
                    console.log(parentBusName);
                    console.log(busDirection);
                    busName.push(parentBusName);
                }else {
                    //console.log(nodes) // prints correct value
                    var parentBusName = nodes.node.props.parent;
                    if(parentBusName){
                        console.log("BusName"+parentBusName)
                        busName.push(parentBusName);
                    }else{
                        //console.log( nodes)
                        nodes.children.forEach((parentHasChild) => {
                            var parentHasChild = parentHasChild.node.props.parent;
                            console.log('parent has child'+ parentHasChild)
                            busName.push(parentHasChild);
                        })
                    }

                }

                busName.join();
                uniqueNames =  busName.filter((val,id,array) => array.indexOf(val) == id); // To remove the duplicate names
                busNamesArray= uniqueNames



            });

        }
        console.log(busNamesArray)
        this.props.busDirection(busNamesArray);
    };
    onSelect = (value,node,extra) => {
        //console.log('onSelect ', value);
        //console.log('onSelect-node ', node);

    };
    render() {
        const tProps = {
            treeData,
            value: this.state.value,
            onChange: this.onChange,
            treeCheckable: true,
            showCheckedStrategy: SHOW_PARENT,
            searchPlaceholder: 'Please select',
            onSelect: this.onSelect,
            filterTreeNode: true,
            style: {
                width: 300,
            },
        };
        return <TreeSelect {...tProps} />;
    }
}

export default NestedCheckbox
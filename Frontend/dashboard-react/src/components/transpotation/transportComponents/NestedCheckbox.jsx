import React from "react";
import ReactDOM from "react-dom";
import treeData from '../data.json'
import { TreeSelect } from 'antd';
import 'antd/dist/antd.css';
var inArray = require('in-array');
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
        if(value == 'All'){
            var valueToPush = []; // or "var valueToPush = new Object();" which is the same
            console.log('onChange ', value);   /* If the user selects ALL from the dropdown*/
            valueToPush["busName"] = value[0];
            valueToPush["busDirection"] = null;
            busName.push(valueToPush);
            busNamesArray = busName
        }else if(extra.allCheckedNodes.length >= 1){
            extra.allCheckedNodes.forEach((nodes) => {

                if(!nodes.children) /* Only If the parent has no children (ONLY THE DIRECTION NAME of the BUS) */
                {
                    var parentBusName = nodes.node.props.parent;
                    var busDirection = nodes.node.props.value;
                    var valueToPush = []; // or "var valueToPush = new Object();" which is the same
                    valueToPush["busName"] = parentBusName;
                    valueToPush["busDirection"] = busDirection;
                    console.log(parentBusName);
                    console.log(busDirection);
                    busName.push(valueToPush);
                    console.log(busName);
                  //  alert('NodesHasnoChilderen')
                }else {
                    //console.log(nodes) // prints correct value
                    var parentBusName = nodes.node.props.parent;
                    var valueToPush = []; // or "var valueToPush = new Object();" which is the same
                    if(parentBusName){
                        console.log("BusName"+parentBusName)
                        valueToPush["busName"] = parentBusName;
                        valueToPush["busDirection"] = null;
                        busName.push(valueToPush);
                      //  alert('else')
                    }else{
                        //console.log( nodes)
                      //  alert('elseif')
                        nodes.children.forEach((parentHasChild) => {
                            var parentHasChild = parentHasChild.node.props.parent;
                            var valueToPush = []; // or "var valueToPush = new Object();" which is the same
                            var flag = 1;
                            console.log('parent has child'+ parentHasChild)
                          //  valueToPush["busName"] = parentHasChild;
                            for(var i =0;i<busName.length;i++)
                            {
                                console.log(busName)
                                if(busName[i]['busName'] === parentHasChild)
                                {
                                    flag = 0;

                                }
                            }
                            if(flag == 1){
                                valueToPush["busName"] = parentHasChild;
                                valueToPush["busDirection"] = null;
                                busName.push(valueToPush);
                            }
                           // console.log(busName)
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
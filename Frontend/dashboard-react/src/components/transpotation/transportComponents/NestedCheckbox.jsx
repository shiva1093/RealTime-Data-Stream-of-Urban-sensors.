import React from "react";
import ReactDOM from "react-dom";
import treeData from '../data.json'
/*import bus from './transportJson/bus.json'
import train from './transportJson/train.json'
import tram from './transportJson/tram.json'
import ubahn from './transportJson/ubahn.json'*/
import bus from './transportJson/bus_sample.json'
import train from './transportJson/train_sample.json'
import tram from './transportJson/tram_sample.json'
import ubahn from './transportJson/ubahn_sample.json'

import { TreeSelect } from 'antd';
import 'antd/dist/antd.css';
const SHOW_PARENT = TreeSelect.SHOW_PARENT;

class NestedCheckbox extends React.Component {
    state = {
        value: [],
    };
    onChange = (value,label,extra) => {
        this.setState({ value });
        var busName = [];
        var busNamesArray = {};
        var uniqueNames = [];
        if(value == 'all'){
            var valueToPush = {}; // or "var valueToPush = new Object();" which is the same
            //console.log('onChange ', value);   /* If the user selects ALL from the dropdown*/
            valueToPush.transportLine = value[0];
            valueToPush.direction = null;
            busName.push(valueToPush);
            busNamesArray = busName
        }else if(extra.allCheckedNodes.length >= 1){
            extra.allCheckedNodes.forEach((nodes) => {

                if(!nodes.children) /* Only If the parent has no children (ONLY THE DIRECTION NAME of the BUS) */
                {
                    var parentBusName = nodes.node.props.parent;
                    var busDirection = nodes.node.props.value;
                    var valueToPush = {}; // or "var valueToPush = new Object();" which is the same
                    valueToPush.transportLine = parentBusName;
                    valueToPush.direction = busDirection;
                   /* console.log(parentBusName);
                    console.log(busDirection);*/
                    busName.push(valueToPush);
                    //console.log(busName);
                  //  alert('NodesHasnoChilderen')
                }else {
                    //console.log(nodes) // prints correct value
                    var parentBusName = nodes.node.props.parent;
                    var valueToPush = {}; // or "var valueToPush = new Object();" which is the same
                    if(parentBusName){
                      //  console.log("BusName"+parentBusName)
                        valueToPush.transportLine = parentBusName;
                        valueToPush.direction = null;
                        busName.push(valueToPush);
                      //  alert('else')
                    }else{
                        //console.log( nodes)
                      //  alert('elseif')
                        nodes.children.forEach((parentHasChild) => {
                            var direction = parentHasChild.node.props.value; /* need to be refractored */
                            var parentHasChild = parentHasChild.node.props.parent;
                            var valueToPush = {}; // or "var valueToPush = new Object();" which is the same
                            var flag = 1;
                          //  console.log('parent has child'+ parentHasChild)
                          //  valueToPush["busName"] = parentHasChild;
                            for(var i =0;i<busName.length;i++)
                            {
                                //console.log(busName)
                                if(busName[i]['transportLine'] === parentHasChild)
                                {
                                    flag = 0;

                                }
                            }
                            if(flag == 1){
                                valueToPush.transportLine = parentHasChild;
                                valueToPush.direction = direction; /* need to be refractored */
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
       // console.log(busNamesArray)
        this.props.busDirection(busNamesArray);
    };
    onSelect = (value,node,extra) => {
        //console.log('onSelect ', value);
        //console.log('onSelect-node ', node);

    };
    render() {
        if(this.props.transportName === 'bus'){
            var treeData = bus;
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
        }else if(this.props.transportName === 'train'){
            var treeData = train;
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
        }else if(this.props.transportName === 'tram'){
            var treeData = tram;
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
        }else {
            var treeData = ubahn;
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
}

export default NestedCheckbox
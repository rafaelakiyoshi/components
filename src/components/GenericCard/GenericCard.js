import React, { Component } from 'react';
import { Card, Row, Col } from 'antd';
import { Spin } from 'antd';
import './GenericCard.css';
let template = null;

class GenericCard extends Component {
    constructor(props){
        super(props);
        this.state = {
            loading: false
        }
    }
    handleColumns(row) {
        let columns = []
        for (var i = 0; i < 23; i++) columns.push([1, 0]);
        for (let column of row) {
            let position = column.initialColumn - 1;
            let size = column.finalColumn - column.initialColumn;
            columns[position] = [size, column.component];
            for (let x = position + 1; x <= size + position - 1; x++) {
                columns[x] = 0;
            }
        }
        return columns;
    }
    
    templateHandler() {;
        template = this.props.template;
        for(let row of template.rows){
            for(let column of row){
                if(column.import){
                    if(column.import === 'component'){
                        let TagName = require(`../${column.componentName}/${column.componentName}`).default;
                        column.attributes[column.prop] = this.props[column.prop]
                        column.component = <TagName {...column.attributes}>{column.prop}</TagName>
                    } else {
                        let TagName = require('antd')[column.componentName]
                        column.attributes[column.prop] = this.props[column.prop]
                        column.component = <TagName {...column.attributes}>{column.prop}</TagName>
                    }
                } else {
                    const TagName = column.componentName
                    column.component = <TagName {...column.attributes}>{this.props[column.prop]}</TagName>
                }
            }
        }

    }
    render() {
        this.templateHandler();
        if(this.state.loading === true) {
            return (
                <div className='generic-card-container'>
                    <Card className='generic-card'>
                       < Spin className='loading'/>
                    </Card>
                </div>
            )
        } else {

            return (
                <div className='generic-card-container'>
                    <Card bordered={false} className='generic-card' style={template.styles}>
                        {template.rows.map((row, index1) => {
                            return (
                                <Row key={index1} className='row-generic-card'>
                                    {this.handleColumns(row).map((column, index2) => {
                                        return (
                                            <Col key={index2} span={column[0]}>{column[0] > 1 ? column[1] : <div></div>}</Col>
                                            )
                                        })}
                                </Row>
                            )
                        })}
                        
                    </Card>
                </div>
            )
        }
    }
}
export default GenericCard;
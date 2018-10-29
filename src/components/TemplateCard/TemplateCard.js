import React from 'react';
import GridLayout from 'react-grid-layout';
import { Card } from 'antd';
import PropTypes from 'prop-types';
import './TemplateCard.css';

export default class TemplateCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            template: null
        }
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if(nextProps !== prevState) {
            for(let item of nextProps.template.rows) {
                if(item.import) {
                    if(item.import === 'component') {
                        let TagName = require(`../${item.componentName}/${item.componentName}`).default;
                        item.attributes[item.prop] = nextProps[item.prop];
                        item.component = <TagName {...item.attributes}>{item.prop}</TagName>
                    } else {
                        let TagName = require('antd')[item.componentName];
                        item.attributes[item.prop] = nextProps[item.prop];
                        item.component = <TagName {...item.attributes}></TagName>
                    }
                } else {
                    const TagName = item.componentName;
                    item.component = <TagName {...item.attributes}>{nextProps[item.prop] ? nextProps[item.prop] : item.content}</TagName>
                }
            }
            return {
                template: nextProps.template
            };
        } else return null;
    }

  render() {
    return (
        <div className='generic-card-container'>
            {this.state.template && 
            <Card className='generic-card' style={this.state.template.styles}>
                <GridLayout 
                    className="generic-card" 
                    layout={this.state.template.rows} 
                    cols={this.props.cols || 12} 
                    rowHeight={this.props.rowHeight || 15} 
                    width={this.props.width || 220} 
                    margin={this.props.margin || [0,0]}>
                    
                    {this.state.template.rows.map(item => {
                        return (
                            <div key={item.i}>{item.component}</div>
                        )
                    })}
                </GridLayout>
            </Card>
        }
        </div>
    )
  }
}

TemplateCard.propTypes = {
    template: PropTypes.object.isRequired,
    cols: PropTypes.number,
    rowHeight: PropTypes.number,
    width: PropTypes.number,
    margin: PropTypes.array,
}
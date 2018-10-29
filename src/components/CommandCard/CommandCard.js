import React, { Component } from 'react';
import { Card, Row, Col } from 'antd';
import PropTypes from 'prop-types';
import TagList from '../TagList/TagList';
import './CommandCard.css';

class CommandCard extends Component {
    constructor(props) {
        super(props);
        this.statusHandler = this.statusHandler.bind(this);
    }
    
    statusHandler(){
        if(this.props.accuracy > 80) {
            return 'StatusGreen';
        } else if (this.props.accuracy <= 80 && this.props.accuracy > 40){
            return 'StatusYellow';
        } else {
            return 'StatusRed';
        }
    }
    
    render () {
    const status = this.statusHandler();
    return (
      <div className='CommandCardContainer'>
        < Card className="CommandCard">
            <h1 className={status}>Status</h1>

             <Row>
                <Col className='firstColumn' span={16}>
                    <h4 className='CommandCardTitle'>{this.props.command}</h4>
                </Col>
                <Col span={8}>
                    <h4 className='CommandCardAccuracy'>Accuracy</h4>
                    <h4 className='CommandCardAccuracyValue'>{this.props.accuracy}%</h4>
                
                </Col>
            </Row>
                <TagList languages={this.props.languages}/>

            <div className='CommandCardActionsContainer'>
                <h5 className='CommandCardActions'>Clean</h5>
                <h5 className='CommandCardActions'>More</h5>
            </div>
        </Card>
      </div>
    );
  }
}

CommandCard.propTypes = {
    command: PropTypes.string.isRequired,
    accuracy: PropTypes.number.isRequired,
    languages: PropTypes.array.isRequired
}

export default CommandCard;
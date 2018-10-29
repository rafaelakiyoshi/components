import React, {Component} from 'react';
import {Card, Icon, Row, Col} from 'antd';
import PropTypes from 'prop-types';
import './SimpleCard.css';

export default class SimpleCard extends Component {
  render () {
    return (
      <div className='CardContainer'>
        <Card hoverable className="SimpleCardContainer" onClick={() => {alert('You clicked')}}>
          <Row>
            <Col span={6}>
              <div className="SimpleCardText"> {this.props.title} </div>
              <div className="SimpleCardQuantity"> {this.props.information} </div>
            </Col>
            <Col span={12}></Col>
            <Col span={6}>
              <Icon className="SimpleCardIcon" type={this.props.icon} theme="filled" />
            </Col>
          </Row>
        </Card>
      </div>
    );
  }
}

SimpleCard.propTypes = {
  title: PropTypes.string.isRequired,
  information: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
}
import React, { Component } from 'react';
import { Form, Icon, Input, Button, Checkbox, Card } from 'antd';
import './LoginCard.css';

const FormItem = Form.Item;

export default class LoginCard extends Component {

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
        if (!err) {
            console.log('Received values of form: ', values);
        }
    });
}
    render() {
        // const { getFieldDecorator } = this.props.form;
        return (
            <div className='LoginContainer'>
                <Card className='CardLogin'>
                    <div className='iconContainer'>
                        <Icon className='lockIcon' type="lock" theme="filled"/>
                        <h1 className='loginTitle'>Login</h1>
                    </div>
                    <Form onSubmit={this.handleSubmit} className="login-form">
                        <FormItem>
                            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                        </FormItem>
                        <FormItem>
                            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                        </FormItem>
                        <FormItem>
                            <Checkbox>Remember me</Checkbox>
                        <div>
                            {/* <a className="login-form-forgot" href="">Forgot password</a> */}
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                Log in
                            </Button>
                        </div>
                        <h1 className='RegisterNow'>New User? Create Account</h1>
                        </FormItem>
                    </Form>
                </Card>
            </div>
        )
    }
}

// const WrappedNormalLoginForm = Form.create()(LoginCard);

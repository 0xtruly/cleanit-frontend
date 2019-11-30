import React, { Component } from 'react';
import { Form, Icon, Input } from 'antd';
import PropTypes from 'prop-types';

class SignInForm extends Component {
  handleSubmit = e => {
      e.preventDefault();
      const { form } = this.props;
      form.validateFields((err, values) => {
          if (!err) {
              console.log('Received values of form: ', values);
          }
      });
  };

  render() {
      const { form } = this.props;
      const { getFieldDecorator } = form;
      return (
          <Form onSubmit={this.handleSubmit} className="login-form">
              <Form.Item>
                  {getFieldDecorator('username', {
                      rules: [{ message: 'Please input your username!', required: true }],
                  })(
                      <Input
                          prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                          placeholder="Username"
                      />
                  )}
              </Form.Item>
          </Form>
      );
  }
}

SignInForm.propTypes = {
    form: PropTypes.objectOf(PropTypes.func).isRequired,
};

const AntdForm = Form.create({ name: 'sign_in_form' })(SignInForm);

export default AntdForm;

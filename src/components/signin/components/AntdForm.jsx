import { Form, Icon, Input } from 'antd';
import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { FORM_INPUTS } from '../constants';

/**
 * @function
 * @param {object} item - item passed from the map method
 */
function renderInput(item) {
    function iconRender() {
        return <Icon type={item.iconType} style={{ color: item.iconColor }} />;
    }
    return <Input type={item.inputType} prefix={iconRender()} placeholder={item.placeholder} />;
}

class SignInForm extends Component {
    /**
     * @method
     * @param {event} e - Listening for an event
     */
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
              {FORM_INPUTS.map(item => (
                  <Form.Item key={item.name}>
                      {getFieldDecorator(item.name, {
                          rules: [{ message: item.message, required: item.required }],
                      })(
                          renderInput(item)
                      )}
                  </Form.Item>
              ))}
          </Form>
      );
  }
}

SignInForm.propTypes = {
    form: PropTypes.objectOf(PropTypes.func).isRequired,
};

const AntdForm = Form.create({ name: 'sign_in_form' })(SignInForm);

export default AntdForm;

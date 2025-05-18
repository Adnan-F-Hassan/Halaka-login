import React, { useState, useCallback } from 'react';
import './Login.css';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, Flex } from 'antd';

const Login = () => {
  const onFinish = values => {
    console.log('Received values of form: ', values);
    };

  const [inputDirection, setInputDirection] = useState('ltr');
  const handleInputChange = useCallback((event) => {
    const text = event.target.value;
    const isArabic = /[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDFF\uFE70-\uFEFF]/.test(text);
    setInputDirection(isArabic ? 'rtl' : 'ltr');
  }, []);

  return (
    <>
    <h2 className="title">المدرسة الرحمانية</h2>
    <p className="subtitle">نظام متابعة مدرسة القران بمسجد الرحمن</p>
    <Form
      name="login"
      initialValues={{ remember: true }}
      style={{ maxWidth: 360 }}
      onFinish={onFinish}
      >

      <Form.Item
        name="username"
        rules={[
          { required: true, message: 'Please input your Username!' },
          { min: 3, message: 'Username must be at least 3 characters long!' },
          { max: 20, message: 'Username cannot be longer than 20 characters!' },
          { pattern: /^[a-zA-Z0-9._-]+$/, message: 'Only letters, numbers, periods, underscores, and hyphens are allowed!' },
        ]}
        >
        <Input prefix={<UserOutlined />} placeholder="Username" style={{ direction: inputDirection }}
          onChange={handleInputChange} />
      </Form.Item>

      <Form.Item
        name="password"
        rules={[
          { required: true, message: 'Please input your Password!' },
          { min: 8, message: 'Password must be at least 6 characters long!' },
        ]}
        >
        <Input.Password prefix={<LockOutlined />} type="password" placeholder="Password" style={{ direction: inputDirection }}
          onChange={handleInputChange} />
      </Form.Item>

      <Form.Item>
        <Button className='submit' block type="primary" htmlType="submit">
          Sign In
        </Button>
      </Form.Item>
      
    </Form>
    </>
  );
};
export default Login;
import React, { FC } from 'react'
import { Box, ResponsiveContext, Form, FormField, Button, Heading, TextInput } from 'grommet'

//Stylesheet
import './login.css'

// Custom Components
import Background from '../../Components/Background'

//----------------------------------------------------
const Login: FC = () => {
  const wrapper = {
    background: 'bgInverse',
    margin: 'auto',
    style: {
      borderRadius: '25px',
      boxShadow: '0px 0px 15px 5px rgba(0,0,0,0.2)'
    }
  }

  const isEmail = (value: string) => {
    var emailReg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
    return emailReg.test(value) ? '' : ' '
  }

  return (
    <Background>
      <ResponsiveContext.Consumer>
        {size => (
          <Box
            width={size === 'small' ? '85%' : '50%'}
            height={size === 'small' ? '75%' : '60%'}
            {...wrapper}
          >
            {/* Test */}
            <Box
              width={size === 'small' ? '95%' : '80%'}
              height={size === 'small' ? '100%' : '90%'}
              margin="auto"
            >
              <Heading level={1} responsive size="medium" textAlign="center" color="heading">
                HomeKit
              </Heading>
              <Form>
                <FormField
                  type="email"
                  name="email"
                  required
                  validate={isEmail}
                  className="Formfield"
                >
                  <TextInput placeholder="Email" />
                </FormField>
                <FormField type="Password" name="password" className="Formfield">
                  <TextInput placeholder="Passwort" />
                </FormField>
                <Button
                  type="submit"
                  label="Anmelden"
                  style={{
                    width: '50%',
                    height: '50px',
                    margin: '20px auto',
                    backgroundColor: 'active',
                    color: 'active'
                  }}
                />
              </Form>
            </Box>
          </Box>
        )}
      </ResponsiveContext.Consumer>
    </Background>
  )
}

export default Login

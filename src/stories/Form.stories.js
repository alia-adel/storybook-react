import React from 'react'
import Input from '../components/Input';
import {Button} from './Button.jsx'
import {Text, Number} from './Input.stories'
import { Primary, Secondary } from './Button.stories';

export default {
  title: 'Pages/Form',
  component: Input
};
export const Form = {
  render: (args) => <div className='container' style={{ display: 'flex', flexDirection: 'column' }}>
  <table>
      <tr>
          <td>
          <Input {...Text.args}/>
          </td>
      </tr>
      <tr>
          <td><Input {...Number.args}/></td>
      </tr>
      <tr>
        <div style={{display: 'flex'}}>
          <div>
          <Button {...Primary.args} />
          </div>
          <div>
          <Button {...Secondary.args} />
          </div>
          </div>
      </tr>
  </table>
</div>,
};
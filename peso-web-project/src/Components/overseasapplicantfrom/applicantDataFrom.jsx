import { Form, TextField } from '@material-ui/core';
import React from 'react';

const MyForm = () => {
  return (
    <Form>
      <TextField
        label="Application Date"
        type="date"
        defaultValue="2022-12-15"
      />
      <TextField label="Position Applying For" />
      <TextField label="Name" />
      <TextField label="Address" />
    </Form>
  );
};           

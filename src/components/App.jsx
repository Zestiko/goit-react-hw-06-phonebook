import React, { useState, useEffect, useRef } from 'react';
import { nanoid } from 'nanoid';
import { Form } from './Form/Form';
import { Contacts } from './Contacts/Contacts';
import { Filter } from './Filter/Filter';
import { useSelector, useDispatch } from 'react-redux';

export const App = () => {


  return (
    <>
      <h1>Phonebook</h1>
      <Form  />

      <h2>Contacts</h2>
      <Filter/>
      <Contacts  />
    </>
  );
};


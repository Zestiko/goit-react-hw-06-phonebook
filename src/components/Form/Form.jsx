import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

export const Form = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setnumber] = useState('');

  const handelChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setnumber(value);
        break;
      default:
        return;
    }
  };
  const reset = () => {
    setName('');
    setnumber('');
  };

  const handelSubmit = e => {
    e.preventDefault();
    onSubmit(name, number);
    reset();
  };
  const inputNameId = nanoid();
  const inputTelId = nanoid();
  return (
    <form onSubmit={handelSubmit}>
      <label htmlFor={inputNameId}>
        Name
        <input
          id={inputNameId}
          onChange={handelChange}
          value={name}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label htmlFor={inputTelId}>
        Number
        <input
          id={inputTelId}
          onChange={handelChange}
          value={number}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button type="submit">Add contac</button>
    </form>
  );
};

// export class Form extends Component {
//   state = {
//     name: '',
//     number: '',
//   };

//   handelChange = e => {
//     const { name, value } = e.target;
//     this.setState({ [name]: value });
//   };

//   handelSubmit = e => {
//     e.preventDefault();
//     const { name, number } = this.state;
//     this.props.onSubmit(name, number);

//     this.reset();
//   };

//   reset = () => {
//     this.setState({ name: '', number: '' });
//   };

//   render() {
//     const inputNameId = nanoid();
//     const inputTelId = nanoid();
//     const { name, number } = this.state;
//     return (
//       <form onSubmit={this.handelSubmit}>
//         <label htmlFor={inputNameId}>
//           Name
//           <input
//             id={inputNameId}
//             onChange={this.handelChange}
//             value={name}
//             type="text"
//             name="name"
//             pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//             title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//             required
//           />
//         </label>
//         <label htmlFor={inputTelId}>
//           Number
//           <input
//             id={inputTelId}
//             onChange={this.handelChange}
//             value={number}
//             type="tel"
//             name="number"
//             pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//             title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//             required
//           />
//         </label>
//         <button type="submit">Add contac</button>
//       </form>
//     );
//   }
// }

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

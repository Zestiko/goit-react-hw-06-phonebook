import { nanoid } from 'nanoid';
import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { setSerch } from 'redux/filterSlice';

export const Filter = () => {
  const filterValue = useSelector(state => state.filter)
  const dispatch = useDispatch();
  const filterID = nanoid();
  return (
    <>
      <label htmlFor={filterID}>
        Find contac by name
        <input
          type="text"
          value={filterValue}
          name="filter"
          onChange={(e) => dispatch(setSerch(e.target.value))}
          id={filterID}
        />
      </label>
    </>
  );
};

// Filter.propTypes = {
//   value: PropTypes.string.isRequired,
//   onChange: PropTypes.func.isRequired,
// };

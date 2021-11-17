import React from 'react';

const TextField = (props) => {
  return (
    <input
      className="text-center bg-tbgreen-default placeholder-white placeholder-opacity-40 h-9 w-full hover:bg-tbgreen-hover focus:bg-tbgreen-hover focus:outline-none focus:placeholder-transparent"
      type={props.type}
      id={props.id}
      value={props.value}
      name={props.name}
      onChange={props.onChange}
      placeholder={props.placeholder}
    />
  );
};

export default TextField;

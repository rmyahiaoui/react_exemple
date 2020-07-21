import React from 'react'

const Hello = (props) => {
  return (
    <div className='dummyClass'>
      <h1>salut {props.name}</h1>
    </div>
  );

  // return React.createElement(
  //   'div',
  //   {id: 'hello', className: 'dummyClass'},
  //   React.createElement('h1', null, 'Hello Vishwas')
  // )
}

export default Hello;

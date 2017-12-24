import React from 'react';

// import style from './styles/Sandbox.css';

function withSandbox(Component, config) {
  const props = {}
  Object.keys(config).forEach((prop, index) =>
    props[prop] = config[prop].value
  )

  return (
    <div className='reactsandbox'>
      <Component {...props}/>
    </div>
  );
}

export default withSandbox;

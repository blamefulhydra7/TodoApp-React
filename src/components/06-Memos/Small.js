import React from 'react';

export const Small = React.memo(({value = 1}) => {
    console.log('Me llamaron')
  return (
    <small>{value}</small>
  )
});

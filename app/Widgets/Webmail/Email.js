import React from 'react';

function createMarkup(html) { return { __html: html }; }

export default (props) => {
  const { email } = props;
  return (
    <div style={{ padding: '20px' }}>
      <div dangerouslySetInnerHTML={createMarkup(email.html)} />
    </div>
  );
}

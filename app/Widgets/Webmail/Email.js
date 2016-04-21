import React from 'react';

function createMarkup(html) { return { __html: html }; }

export default (props) => {
  const { email } = props;
  if (!email.html) {
    return (
      <div style={{ padding: '20px', whiteSpace: 'pre-wrap' }}>
        {email.text}
      </div>
    )
  }
  return (
    <div style={{ padding: '20px' }}>
      <div dangerouslySetInnerHTML={createMarkup(email.html)} />
    </div>
  );
}

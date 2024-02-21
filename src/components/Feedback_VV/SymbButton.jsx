import React from 'react';

const EmojiButton = ({ emoji, label, onClick }) => (
  <button onClick={onClick}>
    {emoji} {label}
  </button>
);

export default EmojiButton;
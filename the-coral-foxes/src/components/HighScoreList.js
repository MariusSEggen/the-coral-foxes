import React, { useEffect, useState } from "react";


const initialList = [
  'Aurora',
  'Andreas',
  'Erlend',
];

const HighScoreList = () => {
  const [value, setValue] = React.useState('');
  const [list, setList] = React.useState(initialList);

  const handleChange = event => {
    setValue(event.target.value);
  };

  const handleSubmit = event => {
    if (value) {
      setList(list.concat(value));
    }

    setValue('');

    event.preventDefault();
  };

  return (
    <div>
      <h3>Highscores</h3>
      <ol>
        {list.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ol>
      

      {/* <form onSubmit={handleSubmit}>
        <input type="text" value={value} onChange={handleChange} />
        <button type="submit">Add Person</button>
      </form> */}
    </div>
  );
  };
  export default HighScoreList;
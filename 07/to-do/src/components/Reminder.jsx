import React, { useRef, useState } from 'react';

const Reminder = () => {
  let inputData = useRef();
  let [data, setData] = useState([]);

  function handleClick() {
    setData([inputData.current.value, ...data]);
    inputData.current.value = "";
  }

  return (
    <>
      <div>
        <input type="text" ref={inputData} />
        <button onClick={handleClick}>Click to Add</button>
      </div>

      <div>
        {data.map((e, i) => (
          <div key={i}>{e}</div>
        ))}
      </div>
    </>
  );
};

export default Reminder;

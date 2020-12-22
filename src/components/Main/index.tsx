import React from 'react';

const Main = () => {
  const sayHello = true;
  return (
    <main>
      <h1>React Avançado</h1>
      {sayHello ? 'Hello' : 'Goodbye'};
    </main>
  );
};

export default Main;

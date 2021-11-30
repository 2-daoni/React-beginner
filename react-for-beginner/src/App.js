import { useEffect, useState } from 'react';

function Hello() {
  useEffect(() => {
    console.log('생성됨 :)');
    return () => console.log('파괴됨 :(');
  }, []);
  return <h1>안녕하세요!</h1>;
}
function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);
  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? 'Hide' : 'Show'}</button>
    </div>
  );
}

export default App;

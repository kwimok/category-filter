import React, { useEffect, useState } from 'react';

function App() {
  useEffect(() => {
    fetch('https://api.publicapis.org/categories').then(res => res.json()).then(data => {
      setFiltered([...data])
      setData([...data])
    })
  }, [])
  
  const [data, setData] = useState([])
  const [filtered, setFiltered] = useState([])
  const [filterText, setFilterText] = useState('')
  const onFilter = (text) => {
    setFilterText(text)
    if(text) {
      const re = new RegExp(text, 'i');
      const filtered = data.filter(item => item.match(re))
      setFiltered([...filtered])
    } else {
      setFiltered([...data])
    }
  }
  return (
    <div className="App">
      <div>Filter <input type="text" value={filterText} onChange={e => onFilter(e.target.value)} /></div>
      <div>
        {filtered.map((item, idx) => <div key={idx}>{item}</div>)}
      </div>
    </div>
  );
}

export default App;

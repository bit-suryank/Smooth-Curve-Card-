import './scss/main.scss'

function App() {

  const Edge = (prop) => {
    return(
      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" style={prop.style}>
        <path id="Path_4" data-name="Path 4" d="M-971.5,1044.5c.054,24.9,25,25,25,25h-25Z" transform="translate(971.5 -1044.5)" fill="#ffffff"/>
      </svg>
    )
  }

  return (
    <div className="App">
      <div className='container'>
        <div className='photo'>
          {/* <Edge style={{position:'relative', top:"82%", right:"45%" , zIndex:2}}/> */}
          <img src='clem-onojeghuo-zlABb6Gke24-unsplash.jpg'/>
        </div>
          <div className='overLeaf'>
          </div>
        </div>
    </div>
  );
}

export default App;

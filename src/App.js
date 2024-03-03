import React,{useState} from "react";
import './App.css';

const data=[
  {
    name:"Gmail",
    url: ["https://www.google.com"]
  },
  {
    name:"Internshala",
    url: ["https://internshala.com/"]
  },
  {
    name:"Lever",
    url: ["https://www.lever.co/?utm_referrer=https%3A%2F%2Fwww.google.com%2F"]
  },
  {
    name:"Wellfound",
    url: ["https://wellfound.com/"]
  }
]

const openTab=(url)=>{
  window.open(url,'_blank');

}

function App() {
  const [lists, setLists] = useState(data);
  return (
    <div className="App">
      <h3 className="title">Rapport.AI</h3>
      <div className="lists">
        {lists && lists.map((item)=>{
          return(
            <button className="button" onClick={()=>{openTab(item.url)}}>{item.name}</button>
          )
        })}
        
      </div>
    </div>
  );
}

export default App;

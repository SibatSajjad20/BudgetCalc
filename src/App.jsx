import React, { useState } from 'react'

function App() {

  const [items,setItems] = useState([]);
  const [input, setInput] = useState('');
  const [input2,setInput2] = useState('');


  const addItem = ()=>{
    if(input.trim() && input2.trim()){
      setItems([...items , {text: input , price:parseFloat(input2)}])
      setInput('');
      setInput2('');
    }
  }

  const deleteItem = (index)=>{
    const newItems = [...items];
    newItems.splice(index,1);
    setItems(newItems);
  }

  const calculateTotalPrice = () => {
    return (items.reduce((total, item) => total + item.price, 0)); 
    
  };



  return (
   <div className='bg-zinc-500 min-h-screen flex items-center justify-center'>
<div className='bg-white shadow-md rounded-lg p-10 w-full  max-w-lg'>
  <h1 className='font-bold text-2xl mb-4'>Budget Tracker</h1>
<div className='mb-4 flex'>
  <input type="text"
  value={input}
  onChange={(e)=>setInput(e.target.value)}
  placeholder='Add an item'
  className='p-2  rounded-lg mb-4 flex-grow shadow-md border' />

  <input type="number"
  value={input2}
  onChange={(e)=>setInput2(e.target.value)}
  placeholder='Add price'
  className='p-2  rounded-lg mb-4 flex-grow shadow-md border' />
  <button
  className='p-3 ml-4 bg-purple-500 text-white rounded-lg'
  onClick={addItem}
  
  >Add</button>
</div>
<ul>
  {items.map((item,index)=>(
      <li key={index}  className='p-2 border-b flex items-center justify-between'>
      <span className='flex-grow'> 
      {item.text}: ${item.price.toFixed(2)}
      </span>
      <button className='text-red-500'
      onClick={deleteItem}
      >
      Delete
      </button>
      </li>
    ))}
    
</ul>
<div className="mt-4">
          <h2 className="text-xl font-bold">Total: ${calculateTotalPrice()}</h2>
        </div>
</div>
   </div>
  )
}

export default App
"use client"
// components/Whiteboard.js
import React, { useEffect, useState } from 'react';

const Whiteboard = () => {

  const [code, setCode] = useState("");

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    alert('Code copied to clipboard!');
  };

  const debounce =()=>{
    let timeout: string | number | NodeJS.Timeout | null | undefined=null
    return () => {
        if(timeout) clearTimeout(timeout)

        timeout=setTimeout(() => {
            

  fetch('/api/', {
    method: 'POST', 
    headers: {'Content-Type': 'application/json',},
    body: JSON.stringify({ key1: code,}),
  })
    .then(response => response.json()) 
    .then(data => {console.log('Success:', data);})
    .catch(error => {console.error('Error:', error);});

        }, 500)
    }
}

  const handleChange = (e:any) => {
    setCode(e.target.value);
    debounce()
  };



  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/pullData');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        setCode(result);
      } catch (error) {
        console.log(error)
      } 
    };

    fetchData();
  }, []); 

  return (
    <div className="flex items-center justify-center w-screen h-screen ">
    <div className="relative w-screen h-screen p-1 bg-gradient-to-r from-[#ff0000] via-[#00ff00] to-[#0000ff] rounded-lg shadow-lg">
      <textarea
        className="w-full h-full p-4 overflow-auto text-sm bg-gray-900 rounded-lg text-gray-100"
        value={code}
        onChange={handleChange}
      />
      <button
        onClick={handleCopy}
        className="absolute top-4 right-4 px-4 py-2 text-sm font-semibold text-white bg-blue-500 rounded hover:bg-blue-700"
      >
        Copy
      </button>
    </div>
  </div>
  );
};

export default Whiteboard;

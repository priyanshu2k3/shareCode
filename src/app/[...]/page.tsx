"use client"
// components/Whiteboard.js
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useRouter} from 'next/navigation';
import { usePathname } from 'next/navigation'
import axios from 'axios';

const Whiteboard = () => {

  const [code, setCode] = useState("");
  const router = useRouter();
  const pathname = usePathname()
  const debounceRef = useRef<NodeJS.Timeout | null>(null);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    alert('Code copied to clipboard!');
  };


  const debounce = useCallback(() => {
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(async () => {
      console.log("Debounced API call");
      try {
        const response = await axios.post('/api/pushData', { "key": pathname.split('/')[1], "data": code }, {
          headers: {
            'Content-Type': 'application/json',
          },
        });
        console.log(response);
      } catch (error) {
        console.error('Error:', error);
      }
    }, 1000);
  }, [code, pathname]);

  const handleChange = (e:any) => {
    console.log("Change triggered");
    setCode(e.target.value);
    
    debounce();
  };



  useEffect(() => {

      const last=pathname.split('/')[1]
    const fetchData = async () => {

      try {
        const response = await axios.post('/api/pullData', { key: last });
        console.log(response)
        setCode(response.data.rdResponse.rdResponse);
      } catch (error) {
        console.error('Error fetching data:', error);
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

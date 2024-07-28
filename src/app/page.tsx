"use client"
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faScrewdriver, faBolt } from '@fortawesome/free-solid-svg-icons';
import { useRouter} from 'next/navigation';

import { fetcher } from './utils/fetcher';
import useSWR from 'swr';


export default function Home() {
  const router =useRouter();

  const { data, error } = useSWR('/api/generate', fetcher)
    if (error){console.log(error); return (<span><div>Failed to load Our server is down </div></span>)}
    if (!data)
  return (
    
    <div className="flex items-center justify-center h-screen bg-gray-900 text-white">
      <div className="text-center">
        <div className="relative w-16 h-16 mx-auto mb-4">
          <FontAwesomeIcon icon={faCog} className="absolute inset-0 w-full h-full text-blue-500 animate-spin-slow" />
          <FontAwesomeIcon icon={faCog} className="absolute inset-0 w-3/4 h-3/4 text-blue-300 animate-spin-fast" />
          <FontAwesomeIcon icon={faScrewdriver} className="absolute inset-0 w-1/2 h-1/2 text-yellow-500 animate-pulse" />
          <FontAwesomeIcon icon={faBolt} className="absolute inset-0 w-1/4 h-1/4 text-yellow-300 animate-bounce" />
        </div>
        <h1 className="text-3xl font-bold mb-2 animate-blink">Loading Your Playground ...</h1>
        <p className="text-lg">Please wait while we set things up for you.</p>
      </div>
    </div>
  );
  if (data){console.log(data,"db response")
    
    router.push(data.link)
    return(null)
  }
}

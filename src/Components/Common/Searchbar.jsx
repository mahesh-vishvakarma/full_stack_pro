import React, { useState } from 'react'
import { HiMagnifyingGlass } from 'react-icons/hi2';

const Searchbar = () => {
    const [serchTerm,setSearchTerm] = useState("");
    const [isOpen,setIsopen] = useState(false);

    const handleSearchTerm = ()=>{
        setIsopen(!isOpen);
    }
  return (
    <div>
      {
        isOpen ? (
            <p>kjdkfd</p>
        ) : (
            <button onClick={handleSearchTerm}>
                <HiMagnifyingGlass/>
            </button>
        )
      }
    </div>
  )
}

export default Searchbar

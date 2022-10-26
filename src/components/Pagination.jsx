import React from 'react'
import {motion} from 'framer-motion';

const Pagination = ({totalPosts, pagePerShow, setCurrentPage, currentPage}) => {
  let pages = [];

  const int = Math.ceil(totalPosts/pagePerShow)
  if(int === 1) return null;
  for(let i = 1; i <= int; i++) {
    pages.push(i)
  }

  const nextPage = (e) => {
    e.preventDefault();
    
    if(currentPage === 5) {
      setCurrentPage(1);
    } else {
      setCurrentPage(currentPage + 1);
    }
  }

  const prevPage = (e) => {
    e.preventDefault();
    if(currentPage === 1) {
      setCurrentPage(5);
    } else {
      setCurrentPage((prev) => prev - 1);
    }
  }


  return (
    <div>
       <motion.button 
          whileTap={{ scale: 0.8 }}
          transition={{ duration: 0.5 }}
        className='pages__btns' onClick={prevPage}>prev</motion.button>
      
      {pages.map((page, index) => {
        return <motion.button 
                  whileTap={{ scale: 0.8 }}
                  transition={{ duration: 0.5 }} className={page === currentPage ? 'active__page' : 'pages__btns'} key={index} onClick={() => setCurrentPage(page)}>{page}</motion.button>
      })}

       <motion.button 
          whileTap={{ scale: 0.8 }}
          transition={{ duration: 0.5 }} className='pages__btns' onClick={nextPage}>next</motion.button>
    </div>
  )
}

export default Pagination
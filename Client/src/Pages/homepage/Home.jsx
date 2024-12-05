import React, { useState } from 'react'
import '../homepage/homepage.css'
import Sidebar from '../../Components/sidebar/Sidebar'
import Feed from '../../Components/Feed/Feed'

const Home = ({sidebar}) => {

  const [category, setCategory] = useState(0);


  return (
    <>
     <Sidebar sidebar={sidebar} category={category} setCategory={setCategory}/>
     <div className={`container ${sidebar ? "":'large-container'}`}>
      <Feed category={category}/>
     </div>
    </>
  )
}

export default Home

import React from 'react'
import Banner from '../Banner.jsx'
import Content from '../Content.jsx';
import Filter from '../Filter.jsx';
import Paginnation from '../Paginnation.jsx';

const Home = () => {
  return (
    <>
      <Banner />
      <Filter/>
      <Content />
      <Paginnation/>
    </>
  )
}

export default Home
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import NavLinks from '../components/NavLinks';
import Footer from '../components/Footer';
import TopBar from '../components/TopBar';

// /blog/test
// /pages/blog/[slug].js

export default function Home() {
  return (
    <div>
      <div className='w-full flex flex-col items-center'>
        <TopBar />
        <img src='/profile.jpeg' className='w-40 m-6 rounded-full'></img>
        <h1 className='text-4xl title-font'>Shreyas Bane</h1>
        <h3 className='m-4 text-xl regular-font'>Software Developer and hobby artist</h3>
        <NavLinks />
      </div>
      <Footer />
    </div>
  )
}
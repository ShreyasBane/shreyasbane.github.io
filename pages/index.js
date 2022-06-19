import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import NavLinks from '../components/NavLinks';
import Footer from '../components/Footer';
import TopBar from '../components/TopBar';

export default function Home() {
  return (
    <div className=''>
      <div className='flex flex-row'>
        <div className='navbar h-screen text-white'>
          <h1>SHREYAS BANE</h1>
          <h1>Home</h1>
          <h1>Blog</h1>
          <h1>About Me</h1>
        </div>
      </div>
    </div>
  )
}
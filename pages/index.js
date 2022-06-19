import NavLinks from '../components/NavLinks';
import Footer from '../components/Footer';
import TopBar from '../components/TopBar';

export default function Home() {
  return (
    <div className=''>
      <div className='text-white flex flex-col items-center'>
          <TopBar />
          <h1 className='title-font font-bold'>SHREYAS BANE</h1>
          <NavLinks />
          <Footer />
      </div>
    </div>
  )
}
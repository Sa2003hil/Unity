import './App.css'
import Navbar from './components/Navbar/Navbar'
import Page from './components/pages/page'
import Footer from './components/Footer/Footer'
import Trending from './components/Trending/Trending'
import Newsletter from './components/Newletter/Newsletter'
import Bigimg from './components/Bigimg/Bigimg'
import Logo from './components/Logo/Logo'
import Work from './components/Workwithus/Work'
// import Video from './components/Video/Video'
import Textani from './components/Textanim/Textanim'
import Recent from './components/RecentPro/Recent'

function App() {
  return (
    <>
      <Navbar />
      <Page />
      {/* <Video /> */}
      <Trending />
      <Textani />
      <Bigimg />
      <Logo />
      <Work />
      <Recent />
      <Newsletter />
      <Footer />
    </>
  )
}

export default App

import Navbar from "../../components/Navbar"
import Background from "../../components/background/Background"
import Footer from "../../components/Footer"
import { Backpack } from "lucide-react"

const MyAppointments = () => {
  return (
    <div className='bg-white'>
      <Navbar />
        <Background>
          <div>No appointments yet... Why not book one?</div>
        </Background>
        <br />
        <br />
      <Footer />
    </div>
  )
}

export default MyAppointments
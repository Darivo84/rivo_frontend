import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { professionals } from '../../assets/assets'

import Navbar from '../../components/Navbar'
import RelatedProfessionals from '../../components/RelatedProfessionals'
import Footer from '../../components/Footer'

import { Info } from 'lucide-react'


const Appointment = () => {
  const { professionalId } = useParams()
  const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THUR', 'FRI', 'SAT']

  const [proInfo, setProInfo] = useState(null)
  const [proSlot, setProSlot] = useState([])
  const [slotIndex, setSlotIndex] = useState(0)
  const [slotTime, setSlotTime] = useState('')
  const [reasonForBooking, setReasonForBooking] = useState('')

  const fetchProfessionalInfo = async () => {
    const professionalInfo = professionals.find(pro => pro._id === professionalId)
    setProInfo(professionalInfo)
  }

  const getAvailableSlots = async () => {
    if (!proInfo) return; // Check if docInfo is available
  
    setProSlot([])
    
    // getting current date
    let today = new Date()

    for (let i = 0; i < 7; i++) {
      let currentDate = new Date(today);
      currentDate.setDate(today.getDate() + i);
      let endTime = new Date();
      endTime.setDate(today.getDate() + i);
      endTime.setHours(18, 0, 0, 0);

      if (today.getDate() === currentDate.getDate()) {
        currentDate.setHours(currentDate.getHours() > 9 ? currentDate.getHours() + 1 : 9);
        currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0);
      } else {
        currentDate.setHours(9);
        currentDate.setMinutes(0);
      }

      let timeSlots = [];

      while (currentDate < endTime) {
        let formattedTime = currentDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        let day = currentDate.getDay();
        let month = currentDate.getMonth() + 1;
        let year = currentDate.getFullYear();
  
        const slotDate = day + "_" + month + "_" + year;
        const slotTime = formattedTime;
  
        // Check if proInfo.slots_booked exists and handle slots availability
        const isSlotAvailable = proInfo.slots_booked?.[slotDate] && proInfo.slots_booked[slotDate].includes(slotTime) ? false : true;
  
        if (isSlotAvailable) {
          timeSlots.push({
            dateTime: new Date(currentDate),
            time: formattedTime
          });
        }
  
        currentDate.setMinutes(currentDate.getMinutes() + 30);
      }

      setProSlot(prev => [...prev, timeSlots]);
    }
  }

  useEffect(() => {
    fetchProfessionalInfo()
  }, [professionals, proInfo])

  useEffect(() => {
    getAvailableSlots()
  }, [proInfo])

  useEffect(() => {
    console.log(proSlot)
  }, [proSlot])
  
  return proInfo && (
    <div className='bg-white'>
      <Navbar />
      {/* Professional Information */}
      <div className='mx-4 sm:mx-[10%]'>
        <div className='flex flex-col sm:flex-row gap-4'>
          <div>
            <img
              className='bg-green-200 w-full sm:max-w-72 rounded-lg' 
              src={ proInfo.profilePic } 
              alt="profilePic" 
            />
          </div>

          <div className='flex-1 border border-gray-400 rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0'>
            <p className='flex items-center gap-2 text-2xl font-medium text-gray-900'>
              { proInfo.firstName + ' ' + proInfo.lastName }
            </p>
            <div className='flex items-center gap-2 text-md font-medium mt-1 text-gray-600'>
              { proInfo.businessName }
            </div>
            <div>
              <p className='flex items-center gap-1 text-sm font-medium text-gray-600 mt-3'>About+ <Info className='size-5'/></p>
              <p className='text-sm text-justify text-gray-500 max-w-[700px] mt-1'>{ proInfo.about }</p>
            </div>
            <p className='text-gray-500 font-medium mt-4'>
              Appointment fee: <span className='text-gray-600'>R { proInfo.fees }</span>
            </p>
          </div>
        </div>

        {/* Booking slots */}
        <div className='sm:ml-72 sm:pl-4 mt-4 font-medium text-gray-700'>
          <p>Booking Slots</p>
          <div className='flex gap-3 items-center w-full mt-4'>
            { proSlot.length && proSlot.map((item, index) => (
              <div onClick={() => setSlotIndex(index)} className={ `text-center py-6 min-w-16 rounded-full hover:scale-110 cursor-pointer ${ slotIndex === index ? 'bg-green-500 text-white' : 'border border-gray-200' }` } key={ index }>
                <p>{ item[0] && daysOfWeek[item[0].dateTime.getDay()] }</p>
                <p>{ item[0] && item[0].dateTime.getDate() }</p>
              </div>
            ))}
          </div>
        
          <div className='flex items-center gap-3 w-full overflow-x-scroll mt-4'>
            { proSlot.length && proSlot[slotIndex].map((item, index) => (
              <p onClick={ () => setSlotTime(item.time) } className={ `hover:scale-110 mb-3 text-sm font-light flex-shrink-0 px-5 py-2 rounded-full cursor-pointer ${ item.time === slotTime ? 'bg-green-500 text-white' : 'text-gray-400 border border-gray-200' }` } key={ index }>
                { item.time.toLowerCase() }
              </p>
            ))}
          </div>
                
          {/* TODO: Reason for booking */}
          <div className='mt-5'>
            <textarea 
              className='w-full bg-white h-[150px] p-5 border border-green-500 rounded-lg'
              name="" 
              id="" 
              placeholder='Reason for your consultation...'
              value={ reasonForBooking }
              onChange={ (e) => setReasonForBooking(e.target.value) }
            />
          </div>

          <button className='bg-green-500 text-white font-medium hover:scale-110 hover:bg-emerald-700 text-sm font-light px-14 py-3 rounded-full my-6 transition-all duration-500'>Book a consultation</button>
        </div>

        <RelatedProfessionals 
          professionalId={ professionalId } 
          speciality={ proInfo.speciality } 
        />
      </div>

      <Footer />
    </div>
  )
}

export default Appointment
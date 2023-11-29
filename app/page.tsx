import Image from 'next/image'
import { authOptions } from './api/auth/[...nextauth]/route'
import { getServerSession } from 'next-auth'
import { User } from './user'
export default async function Home() {

  const session = await getServerSession(authOptions)

  return (
    <main>
      <pre>{JSON.stringify(session)}</pre>
      <p>Client Call example:</p>
      <User />
      <div className='grid grid-cols-2 my-10'>
        <div className='my-30 ml-32 flex justify-center items-center'>
          <div className=''>
            <p className='text-5xl'>Try out the seasonal</p>
            <p className='text-7xl mb-5'>Pumpkin Spice Latte</p>
            <button className='bg-gradient-to-r from-orange-500 hover:from-orange-400 to-amber-600 hover:to-amber-500 text-3xl text-light  py-3 px-5 rounded-full'>Found out more</button>
          </div> 
        </div>
        <div className='mx-auto py-30'>
          <Image alt='wow' height={600} width={600} src={"/beep boop.jpg"} className='rounded-xl' />
        </div>
      </div>
      <div>
        <Image alt='swishy' height={100} width={1500} src={'swishy thingy.svg'} className='mx-auto py-5'/>
      </div>
      <div className='grid grid-cols-2 py-20 mx-24'>
        <div className='flex justify-center items-center'>
          <div className='mx-20'>
            <p className='text-5xl'>Baking lessons available!</p>
            <p className='text-2xl text-gray-800'>Check out our baking lessons to gain knowledge and the satification of creating bread and other baked goods.</p>
            <button className='bg-gradient-to-r from-orange-500 hover:from-orange-400 to-amber-600 hover:to-amber-500 text-3xl text-light  py-3 px-5 rounded-full'>Found out more</button>
          </div>
        </div>
        <div>
          <Image alt='ciminmon' width={500} height={500} src={"/cinimon.jpg"} className='rounded-xl mx-auto  py-30'/>
        </div>
      </div>
    </main>
  )
}

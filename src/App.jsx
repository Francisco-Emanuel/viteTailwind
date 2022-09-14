import { BoltIcon, RocketLaunchIcon, LightBulbIcon, ClockIcon } from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'

export default function App() {

  const objetos = [
    {
      icon: BoltIcon,
      description: 'Designer da opportunity',
      name: 'GH'
    },
    {
      icon: RocketLaunchIcon,
      description: 'Programador da Opportuniy',
      name:'Xico'
    },
    {
      icon: RocketLaunchIcon,
      description: 'Programador e marketeiro da Opportunity',
      name:'Tonet'
    },
    {
      icon: LightBulbIcon,
      description: 'Copyrighter da Opportunity',
      name: 'JB'
    },
    {
      icon: ClockIcon,
      description: 'Gostosa da Opportunity',
      name: 'Porelli'
    }
  ]

  const foda = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 1
      }
    }
  }

  return (
    <>

        <motion.div className="flex flex-col h-screen bg-gray-800 rounded-sm py-12 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" variants={foda} initial="hidden" animate="show">
          <motion.div className="max-w-x" animate={{
            scale: 1.3,
            transition: {
              duration: 1,
            },
           }}>
            <h1 className="font-bold font-sans text-center text-white text-3xl">Membros da Opp</h1>
          </motion.div>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div className="mt-10 flex justify-center align-middle" animate={{ 
            x: 100,
            transition: {
              duration: 1,
            },
           }}>
              <dl className="space-y-10 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 md:space-y-0" >
                {objetos.map((objeto) => (
                  <div key={objeto.name} className="relative">
                    <dt>
                      <div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-indigo-800 text-gray-300">
                        <objeto.icon className="h-6 w-6" aria-hidden="true" />
                      </div>
                      <p className="ml-16 text-lg font-medium leading-6 text-gray-300">{objeto.name}</p>
                    </dt>
                    <dd className="mt-2 ml-16 text-base text-white">{objeto.description}</dd>
                  </div>
                ))}
              </dl>
            </motion.div>
          </div>
        </motion.div>

    </>
  )
}

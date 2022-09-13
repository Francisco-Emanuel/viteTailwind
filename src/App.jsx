import { BoltIcon, RocketLaunchIcon, LightBulbIcon, ClockIcon } from '@heroicons/react/24/outline'

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
      description: 'Não sei',
      name: 'Porelli'
    }
  ]

  return (
    <>

        <div className="container flex flex-col h-screen w-screen bg-gray-800 rounded-sm mx-auto my-auto py-12">
          <div className="container mx-auto w-screen">
            <h1 className="font-bold font-sans text-center text-white text-3xl">Membros da Opp</h1>
          </div>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mt-10 flex justify-center align-middle">
              <dl className="space-y-10 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 md:space-y-0">
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
            </div>
          </div>
        </div>

    </>
  )
}

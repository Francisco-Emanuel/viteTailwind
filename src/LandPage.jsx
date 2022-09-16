import { motion } from 'framer-motion'
import OpLogo from './assets/opportunity.svg'
import SliderComponent from './Slider'

const LandPage = () => {
    const foda = {
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          x: 100,
          transition: {
            duration: 1,
            delayChildren: 1
          }
        }
      }

    return (
        <>
            <motion.div className="container align-middle justify-center flex flex-row h-50 mx-auto
             max-w-7xl px-4 sm:px-6 lg:px-8 mt-10" variants={foda} initial="hidden" animate="show">
                <img src={OpLogo} className="h-24 w-24" alt="oplogo" />
                <h1 className="mt-4 text-white font-extrabold text-6xl">
                    portunity
                </h1>
            </motion.div>
            <SliderComponent className="w-96 mx-auto" />

        </>
    )
}

export default LandPage
import { motion } from 'framer-motion'
import OpLogo from './assets/opportunity.svg'
const LandPage = () => {
    const foda = {
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          x: 200,
          transition: {
            duration: 1,
            delayChildren: 1
          }
        }
      }

    return (
        <>
            <motion.div className="container flex flex-row h-screen mx-auto
             max-w-7xl px-4 sm:px-6 lg:px-8 mt-10" variants={foda} initial="hidden" animate="show">
                <img src={OpLogo} className="h-24 w-24" alt="oplogo" />
                <h1 className="mt-4 text-white font-extrabold text-6xl">
                    portunity
                </h1>
            </motion.div>
        </>
    )
}

export default LandPage
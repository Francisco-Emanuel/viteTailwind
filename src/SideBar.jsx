import { BsHouse, BsTelephone } from "react-icons/bs"
import { VscAccount, VscDebugDisconnect } from "react-icons/vsc";

const SideBar = () => {

    const icones = [
        {
            icon: BsHouse,
        },
        {
            icon: VscDebugDisconnect,
        },
        {
            icon: VscAccount,
        },
        {
            icon: BsTelephone,
        }
    ]

    return (
        <>
            <div className=" fixed top-0 left-0 h-screen w-16 flex flex-col
                            bg-gray-900 text-white shadow-md">
                                {icones.map((icone) => (
                                    <button className="h-12 w-12 mt-5 mb-5 mx-2 bg-gray-800
                                    rounded-3xl text-indigo-800 hover:rounded-xl hover:text-gray-800
                                    hover:bg-indigo-800 transition-all
                                    duration-300 ease-linear cursor-pointer relative flex items-center
                                    justify-center ">
                                        <icone.icon className="h-10 w-10" />
                                    </button>
                                ))}
            </div>
        </>
    )
}

export default SideBar
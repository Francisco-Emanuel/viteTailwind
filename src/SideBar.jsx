import { BsListUl, BsGem } from "react-icons/bs"
const SideBar = () => {

    const icones = [
        {
            icon: BsListUl,
        }
    ]

    return (
        <>
            <div className="fixed top-0 left-0 h-screen w-16 flex flex-col
                            bg-gray-900 text-white shadow-md">
                                {icones.map((icone) => (
                                    <icone.icon className="relative flex items-center
                                     justify-center h-12 w-12 mt-5 mb-5 mx-auto p-2 bg-gray-800
                                      rounded-3xl text-indigo-800 hover:text-gray-800
                                      hover:bg-indigo-800 hover:rounded-xl transition-all
                                      duration-300 ease-linear cursor-pointer" />
                                ))}
            </div>
        </>
    )
}

export default SideBar
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
                                    <button className="z-1 h-12 w-12 mt-1 mx-2 bg-gray-800
                                    rounded-3xl text-indigo-800 hover:rounded-xl hover:text-gray-800
                                    hover:bg-indigo-800 transition-all
                                    duration-300 ease-linear cursor-pointer absolute flex items-center justify-center ">
                                        <icone.icon className="h-10 w-10" />
                                    </button>
                                ))}
            </div>
        </>
    )
}

export default SideBar
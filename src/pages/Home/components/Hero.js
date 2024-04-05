import { Link } from "react-router-dom"

export const Hero = () => {
    return (
        <section className="flex flex-col md:flex-row md:justify-evenly text-slate-100 items-center bg-green-900">
            <div className="text my-5 mx-5">
                <h1 className="text-5xl font-bold ">Nákupní seznamy</h1>
                <p className="text-2xl my-7 px-1">Vytvoř si seznam a usnadni si nakupování.</p>
                <Link to="/vytvoritseznam" type="button" className="text-white bg-green-600 hover:bg-green-500 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-base px-5 py-2.5 mr-2 mb-2 focus:outline-none">Vytvořit seznam</Link>
            </div>
            <div className="visual my-3 max-w-xs p-5">
                <img className="rounded-lg h-60" src="https://cdn.pixabay.com/photo/2021/09/01/09/00/vegetables-6590930_1280.png" alt="Food in bag" />
            </div>
        </section>
    )
}
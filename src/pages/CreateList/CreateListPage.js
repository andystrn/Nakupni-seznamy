import { Link, useNavigate } from "react-router-dom"
import { useEffect, useState } from 'react'

export const CreateListPage = () => {
    const [newList, setNewList] = useState("");
    const [showAlert, setShowAlert] = useState(false);
    const [items, setItems] = useState([]);
    const navigate = useNavigate();

    const fetchItems = async () => {
        const response = await fetch('http://localhost:8000/shoppinglists');
        const data = await response.json();
        setItems(data);
    }

    useEffect(() => {
        fetchItems();
    }, [])

    const generateUniqueId = () => {
        return Math.random().toString(36);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        function createItem(data) {
            const config = {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            }

            return fetch("http://localhost:8000/shoppinglists", config)
                .then(function (response) {
                    return response.json();
                })
        }

        items.map(item => item.name).includes(newList.name) ? setShowAlert(true) : createItem(newList) && navigate("/");
    }

    return (
        <div className='flex flex-col items-center justify-center bg-green-900 min-h-screen'>
            <div className="relative block max-w-md md:w-1/2 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
                <Link to="/" className="absolute top-2 left-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="green" className="bi bi-arrow-left" viewBox="0 0 16 16">
                        <path d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8" />
                    </svg>
                </Link>
                <h5 className="mt-5 mb-7 text-2xl font-bold tracking-tight text-green-900">Vytvořit nový seznam</h5>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <div className="flex flex-row items-center gap-4 mb-7">
                        <label htmlFor="list_name" className="block text-md font-medium text-green-900">Název</label>
                        <input onChange={(e) => setNewList({ name: e.target.value, items: [], id: generateUniqueId() })} type="text" id="list_name" className=" border border-gray-900 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5" placeholder="Nákupní seznam" required />
                    </div>
                    {showAlert &&
                        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 mb-4 rounded relative" role="alert">
                            <strong className="font-bold">Ups!</strong>
                            <span className="block sm:inline ml-1">Seznam s tímto jménen již existuje.</span>
                            <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
                                <svg onClick={() => setShowAlert(false)} className="fill-current h-6 w-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" /></svg>
                            </span>
                        </div>
                    }
                    <button type="submit" className="text-white bg-green-600 hover:bg-green-500 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-base px-5 py-2.5 mr-2 mb-2 focus:outline-none">Vytvořit</button>
                </form>
            </div>
        </div>
    )
}

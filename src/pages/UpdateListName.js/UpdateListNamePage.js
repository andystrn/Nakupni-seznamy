import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom"

export const UpdateListNamePage = () => {
    const [items, setItems] = useState([]);
    const [showAlert, setShowAlert] = useState(false);
    const [item, setItem] = useState({ name: "" });
    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchItem() {
            const response = await fetch("http://localhost:8000/shoppinglists");
            const data = await response.json();
            setItems(data);
            setItem(data.find((element) => element.id === params.id));
        }
        fetchItem();
    }, [params.id])

    const handleSubmit = (e) => {
        e.preventDefault();
        function updateItem() {
            const config = {
                method: "PATCH",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: item.name
                })
            }

            return fetch(`http://localhost:8000/shoppinglists/${params.id}`, config)
                .then(function (response) {
                    return response.json()
                })
        };

        items.map(item => item.name).includes(item.name) ? setShowAlert(true) : updateItem(item) && navigate("/");
    }

    const handleDelete = (e) => {
        e.preventDefault();
        function deleteItem() {
            const config = {
                method: "DELETE",
            }

            return fetch(`http://localhost:8000/shoppinglists/${params.id}`, config)
                .then(function (response) {
                    return response.json();
                })
        }
        deleteItem();
        navigate('/');
    }

    return (
        <div className='flex flex-col items-center justify-center bg-green-900 min-h-screen'>
            <div className="relative block max-w-md md:w-1/2 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
                <Link to="/" className="absolute top-2 left-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="green" className="bi bi-arrow-left" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8" />
                    </svg>
                </Link>
                <h5 className="mt-5 mb-7 text-2xl font-bold tracking-tight text-green-900">Upravit seznam</h5>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <div className="flex flex-row items-center gap-4 mb-7">
                        <label htmlFor="list_name" className="block text-md font-medium text-green-900">Název</label>
                        <input value={item.name} onChange={(e) => setItem({ ...item, name: e.target.value })} type="text" id="list_name" className=" border border-gray-900 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5" required />
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
                    <div>
                        <button type="submit" className="inline-flex items-center gap-2 text-white bg-green-600 hover:bg-green-500 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-base px-5 py-2.5 mr-2 mb-2 focus:outline-none">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z" />
                            </svg>
                            Upravit
                        </button>
                        <button onClick={handleDelete} className="inline-flex items-center gap-2 text-white bg-red-600 hover:bg-red-500 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-base px-5 py-2.5 mr-2 mb-2 focus:outline-none">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash3" viewBox="0 0 16 16">
                                <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5" />
                            </svg>
                            Smazat
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

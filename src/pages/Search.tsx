

export const Search = () => {
    return (
        <div className="flex items-center justify-center">
        <div className="flex border border-sky-900 rounded">
            <input
                type="text"
                className="block w-full px-4 py-2 text-gray-900 bg-white border rounded-md focus:border-sky-700 focus:ring-sky-300 focus:outline-none focus:ring focus:ring-opacity-40"
                placeholder="Search..."
            />
            <button className="px-4 text-white bg-slate-900 border-l rounded ">
                Search
            </button>
        </div>
    </div>
    );
}

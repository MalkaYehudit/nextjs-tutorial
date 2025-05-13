
export default function PostForm() {
    return(
        <form >
        <div className="mb4">
            <label className="font-medium text-grey-900 block mb-2">Title</label>
            <input  className="text-sm w-full rounded-sm p-2 text-grey-900 shadow-sm ring-inset ring-gray-300 focus:ring-indigo-600" type="text" placeholder="title"  />
        </div>

        <div className="mb4">
            <label className="font-medium text-grey-900 block mb-2">Body</label>
            <input  className="text-sm w-full rounded-sm p-2 text-grey-900 shadow-sm ring-inset ring-gray-300 focus:ring-indigo-600" type="text" placeholder="title"  />
        </div>
        <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"> SEND</button>
        </form>
    )
}
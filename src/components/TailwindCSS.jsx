const TailwindCSS = () => {
  return (
    <div className="mt-4 flex justify-center items-center flex-col">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Click me</button>

      <h1 className="text-2xl font-bold text-center">Hello, Tailwind CSS!</h1>
      <div className="mt-3 rounded-lg justify-center bg-yellow-200">
        <div className="bg-gray shadow-lg ">
            <h2 className="text-2xl font-bold mb-4 text-center">Card Title</h2>
            <p className="text-gray-700">This is a card component styled with Tailwind CSS.</p>
        </div>
      </div>
      <div className="mt-3 rounded-lg justify-center bg-green-200 p-4">
        <div className="bg-gray shadow-lg">
            <h2 className="text-lg font-bold mb-4 text-center">Soumyajit Acooli</h2>
            <p className="text-gray-700">soumyajit.acooli@example.com</p>
        </div>
      </div>
    </div>
  )
}

export default TailwindCSS

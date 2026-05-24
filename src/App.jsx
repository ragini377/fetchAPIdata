import useFetch from "./hook/useFetch"

function App() {

  const { data, loading, error } = useFetch();

  return (
    <>
    <div><h1 className="text-center font-bold text-2xl">Photos </h1></div>
    <div>

      {loading && <h1>Loading..</h1>}
      {error && <h1>{error}</h1>}

       <div className="grid grid-cols-4 gap-4 bg-gray-700 min-h-screen text-white p-4">

  {data.map((item) => (
    
    <div
      key={item.id}
      className="border p-2 rounded-lg shadow-md"
    >
      <img
        src={item.images[0]}
        alt={item.title}
        className="w-full"
      />

      <h4>{item.title}</h4>
    </div>

  ))}

</div>
    </div>
     
    
   </>
  );
}

export default App;
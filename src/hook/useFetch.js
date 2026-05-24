import React, { useState, useEffect, useCallback } from "react";

function useFetch() {
const [data,setData] = useState([])
const [loading,setLoading] = useState(true)
const [error,setError] = useState(null)


 const fetchData1 = useCallback(async () =>
{
try{
  const res = await fetch(("https://api.escuelajs.co/api/v1/products")
);



  if (!res.ok) {
        throw new Error("Failed to fetch");
        
      }
       
      const result = await res.json();

      setData(result);
      setLoading(false);
 
      
}
catch (err) {
      setError("Error in loading");
      setLoading(false);
    }   
    },[]);


  useEffect(() => {
    fetchData1();
  }, [fetchData1]);

  return { data, loading, error };
}





export default useFetch;
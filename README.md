## This is custom hook used for showing  data from API (ex-https://api.escuelajs.co/api/v1/products)
It fetch data (like proodut id,prodoct image,product title) from api and show in browser.

# Firsty, I explain - it created by vite  and for styling i used tailwind css.

1. make folder named - customHook5.

2. opened it on integrated terminal by right click folder (costomHook5).

3. In terminal. I wrote -  npm create vite@latest-  for create project .
4. Then named project - customFetch05 .
5. Select framework - React.
6. Select varient - JavaSript.
7. Press yes for install npm start.
8. Project created .
9. Then, cd customFetch05 (for change directory)
10. Write command - npm -i (for nodemon installation)
11. finally , run command -> npm run dev
12. Now get url something like that (Local:   http://localhost:5173/) and project run on localhost(browser)
13. I Used tailwind css for styling so, run this coomand in intigated terminal for taiwind css in my project - npm install tailwindcss @tailwindcss/vite
14. After that,Add the @tailwindcss/vite plugin to  Vite configuration.
by -import tailwindcss from '@tailwindcss/vite'
15. And,   tailwindcss(), (plugins)
16. Add an @import to  CSS file that imports Tailwind CSS(index.css) 
17. Removed all the code and wrote only-  @import "tailwindcss";
18. Run the build process with - npm run dev
19. Now , I created folder named hook in src folder and make API(useFetch.js) 
20. Import react , hook- useState, useEffect, useCallback write this line in useFetch.js
import React, { useState, useEffect, useCallback } from "react";
21. Then ,make function named useFetch(){}
22. Used Hook concept - useState 
    1- const [data,setData] = useState([]) - for storing data and showing details
    2- const [loading,setLoading] = useState(true) - A boolean indicating whether the data is still loading 
    3- const [error,setError] = useState(null) for- Any error that occurred during the fetch process.

23. I created function named fetchData1() used hook named - useCallback 
24. useCallback -  because this fecthData1() called  rendeing page ,  I am just going and getting cached and with the help of useCallback. it make performance quickly optimized.
25. Used try Block {} for fetch() if any issue in fetching data and stored fetch data in const veriable -res ()
26. used  an async arrow function.- for returning promise 
27. wrote if statement for res not found 
28. make another const varible named ressult to get data from APT and convert in json -   const result = await res.json(); (await stoped all the code till not get all data )

29.    setData(result); this set all fetched data (stored in results)
      setLoading(false); this fales loading statment false

30. catech block {} if any error in fetching data or  network issue .it shows error massage and setloading will also false
31. i wrote all this in code in fetchData1() amd used useCallback for Smmoth performance 

32. i used next hook useEffect and called fuction for run fetchData1()
33. useEffect(() => {
    fetchData1();
  }, [fetchData1]);
34. This useEffect executes the fetchData1 function after the component renders.
The dependency array [fetchData1].Re-run the effect whenever the reference of fetchData1 changes.
used it to avoid repeated execution on every render.
If fetchData1 changes on every render, the effect will also run on every render.

35.  return { data, loading, error }; this return those things
36. In Page App,jsx we showes all data and loading ,error statement or we can create anohter page to showing data in browser (like - Product.jsx) and  just called by <Product/> in App.jsx 
37. but I show all data and statement in App.jsx page
38. Object destructuring is used to directly access properties from the object returned by the useFetch Hook. - 
  const { data, loading, error } = useFetch();

39.   {loading && <h1>Loading..</h1>}
      {error && <h1>{error}</h1>} 
      for loading and error  used <h1> tag
    
40. for showing data I used map(item), its- for showing array items ,it looping every rendering item 
41. <div
      key={item.id}
      className="border p-2 rounded-lg shadow-md"
    > for unique Id

42. <img> tag for showing image returning array by API.
        <img
        src={item.images[0]} - start with 0 index of array
        alt={item.title} - if image not found shows  tittle 
        className="w-full" - tailwaind class width - full
      />

43.  <h4>{item.title}</h4> for showing title form returning array by API 

44. export default App; this line means App page export and we used in main.jsx

45.  Deleted all Alternatives pages and folder

my english is little bit week, I tried to explain hook concept . Honestly I undrstand hook concept- useState,UseCallback,useEffect and i will use in my futer projects.



 

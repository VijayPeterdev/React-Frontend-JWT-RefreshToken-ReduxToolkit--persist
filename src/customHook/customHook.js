
import { useEffect, useState } from 'react';

// reusable api hooks

 export const useFetch = (url) => {
 const [data,setData] = useState(null);


    useEffect(() => {
        const fetchData = async () => {
          try {
            const res = await fetch(url);
    
            //json parse pannurom
             await res.json().then((json) => setData(json));

    
           
          } catch (error) {
            console.log(error);
          }
        };
        fetchData();
      }, [url]);

      return data;
    

}

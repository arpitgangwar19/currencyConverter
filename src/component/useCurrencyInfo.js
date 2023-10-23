import { useEffect,useState } from "react";


// https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd.json

function useCurrencyInfo(currency)
{
       
  console.log(currency);   
    const [data,setData] = useState("");
  
    console.log(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`);

   useEffect(() => {
    fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
      .then((res) => res.json())
      .then((data) => setData(data[currency]))
      .catch((error) => console.error('Error fetching data:', error));
  }, [currency]);
    
  console.log(data);   
    return data;

}

export default useCurrencyInfo; 
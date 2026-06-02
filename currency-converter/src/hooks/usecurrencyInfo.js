import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});
  useEffect(() => {
    fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-06-01/v1/currencies/${currency}.json
`)
      .then((response)=>response.json())
      .then((response)=>setData(response[currency]))
  }, [currency]);

  return data;
}
export {useCurrencyInfo};

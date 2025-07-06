import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const StoreContext = createContext(null);

export const StoreContextProvider = (props) => {
    const [foodList, setFoodList] = useState([]);

    const fetchFoodList = async () => {
        const response = await axios.get('http://localhost:8080/api/foods');

        setFoodList(response.data);
    }

    const contextValue = {
        foodList
    }

    useEffect(() => {
        async function loadData() {
            await fetchFoodList();
        }
        loadData();
    }, [])

    return (
      <StoreContext.Provider value={contextValue}>
        {props.children}
      </StoreContext.Provider>
    );
}
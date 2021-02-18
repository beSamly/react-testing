import Axios from "axios";
import React, { createContext, useContext, useState } from "react";

export const TodosContext = createContext();

const TodosContextProvider = (props) => {
  const [state, setState] = useState({
    componentACounter: 0,
    componentBCounter: 0,
  });

  return (
    <TodosContext.Provider
      value={{
        state,
        setState
      }}
    >
      {props.children}
    </TodosContext.Provider>
  );
};

export const useFetchTodos = () => {
  const { state, setState } = useContext(TodosContext);
  // Component did mount
  React.useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setState((prev) => {
      if (prev.data) {
        return {
          ...prev,
          isUpdating: true
        };
      }

      return {
        ...prev,
        isLoading: true
      };
    });

    try {
      const res = await Axios.get("https://jsonplaceholder.typicode.com/todos");
      setState({
        isLoading: false,
        isUpdating: false,
        error: null,
        data: res.data[0]
      });
    } catch (e) {
      setState({
        isLoading: false,
        isUpdating: false,
        error: e,
        data: null
      });
    }
  };

  return {
    state: state,
    refetch: fetchData
  };
};

export default TodosContextProvider;

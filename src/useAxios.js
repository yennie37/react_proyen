import defaultAxios from "axios";
import {useEffect, useState} from "react";

// 2-8 useAxios
const useAxios = (opts, axiosInstance =  defaultAxios) => {
    const [state, setState] = useState({
        loading: true,
        error: null,
        data: null
    });
    
    useEffect(() => {
        axiosInstance(opts).then(data => {
            setState({
                ...state,
                loading: false,
                data
            });
        });
    }, []); // update X
    
    if(!opts.url) return;

    return state;
  };

  export default useAxios;
  
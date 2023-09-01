import axios, {AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse} from 'axios';
import {useCallback, useEffect, useState} from 'react';

interface UseAxios {
    options: AxiosRequestConfig;
    axiosInstance?: AxiosInstance;
}

interface IAxiosState<T> {
    loading: boolean;
    response?: AxiosResponse<T>;
    error?: AxiosError<T>;
}

const useAxios = <T>({options, axiosInstance = axios}: UseAxios) => {
    const [state, setState] = useState<IAxiosState<T>>({loading: false});

    const getData = useCallback(async () => {
        setState(prev => ({...prev, loading: true}));

        await axiosInstance<T>(options)
            .then(res => {
                setState(prev => ({...prev, response: res, error: undefined}));
            })
            .catch(error => {
                console.error(error);
                setState(prev => ({...prev, response: undefined, error: error}));
            })
            .finally(() => {
                setState(prev => ({...prev, loading: false}));
            });
    }, [axiosInstance]);

    useEffect(() => {
        getData();
    }, [getData]);

    return {...state, getData};
};

export default useAxios;

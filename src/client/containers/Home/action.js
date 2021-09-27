import { toast } from 'react-toastify';

export const FETCH_CRYPTO_PRICE_BEGIN = 'FETCH_CRYPTO_PRICE_BEGIN';
export const FETCH_CRYPTO_PRICE_SUCCESS = 'FETCH_CRYPTO_PRICE_SUCCESS';
export const FETCH_CRYPTO_PRICE_FAILURE = 'FETCH_CRYPTO_PRICE_FAILURE';
export const FETCH_STATIC_DATA_BEGIN = 'FETCH_STATIC_DATA_BEGIN';
export const FETCH_STATIC_DATA_SUCCESS = 'FETCH_STATIC_DATA_SUCCESS';
export const FETCH_STATIC_DATA_FAILURE = 'FETCH_STATIC_DATA_FAILURE';

export const fetchCryptoPriceBegin = () => ({
    type: FETCH_CRYPTO_PRICE_BEGIN
});

export const fetchCryptooPriceSuccess = (data) => ({
    type: FETCH_CRYPTO_PRICE_SUCCESS,
    data
});

export const fetchCryptoPriceFailure = (keypair, error) => ({
    type: FETCH_CRYPTO_PRICE_FAILURE,
    error: { keypair, error }
});

export const fetchStaticDataBegin = () => ({
    type: FETCH_STATIC_DATA_BEGIN
});

export const fetchStaticDataSuccess = (key, data) => ({
    type: FETCH_STATIC_DATA_SUCCESS,
    key,
    data: data[key.toLowerCase()]
});

export const fetchStaticDataFailure = (key, error) => ({
    type: FETCH_STATIC_DATA_FAILURE,
    error: { key, error }
});

export function fetchCryptoPrice(keypair) {
    return dispatch => {
        dispatch(fetchCryptoPriceBegin(keypair));
        fetch(`/api/crypto?keypair=${keypair}`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        }).then(responce => {
            if (responce.ok) {
                return responce.json();
            } else {
                throw new Error('Something went wrong');
            }
        }).then(responseJson => {
            dispatch(fetchCryptooPriceSuccess(responseJson));
            return responseJson;
        }).catch(error => {
            toast(`failed to get crypto price data: ${error.error}`, { position: toast.POSITION.BOTTOM_RIGHT });
            return dispatch(fetchCryptoPriceFailure(keypair, error));
        });
    }
}

export function fetchStaticData(key) {
    return dispatch => {
        dispatch(fetchStaticDataBegin(key));
        fetch(`/api/static_data?key=${key}`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        }).then(responce => {
            if (responce.ok) {
                return responce.json();
            } else {
                throw new Error('Something went wrong');
            }
        }).then(responseJson => {
            dispatch(fetchStaticDataSuccess(key, responseJson));
            return responseJson;
        }).catch(error => {
            toast(`failed to get static data: ${error.error}`, { position: toast.POSITION.BOTTOM_RIGHT });
            return dispatch(fetchStaticDataFailure(keypair, error));
        });
    }
}
import { toast } from 'react-toastify';

export const FETCH_CRYPTO_PRICE_BEGIN = 'FETCH_CRYPTO_PRICE_BEGIN';
export const FETCH_CRYPTO_PRICE_SUCCESS = 'FETCH_CRYPTO_PRICE_SUCCESS';
export const FETCH_CRYPTO_PRICE_FAILURE = 'FETCH_CRYPTO_PRICE_FAILURE';

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
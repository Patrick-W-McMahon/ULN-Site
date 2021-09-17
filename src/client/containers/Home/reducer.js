import {
    FETCH_CRYPTO_PRICE_BEGIN,
    FETCH_CRYPTO_PRICE_SUCCESS,
    FETCH_CRYPTO_PRICE_FAILURE
} from './action';

const initialState = {
    loading: false,
    error: false,
    price: {
        BNBUSDT: 0.00,
        ETHUSDT: 0.00
    }
};

export default function Home(state = initialState, action) {
    switch (action.type) {
        case FETCH_CRYPTO_PRICE_BEGIN:
            return {
                ...state,
                loading: true,
                error: false
            };
        case FETCH_CRYPTO_PRICE_SUCCESS:
            const { symbol, price } = action.data;
            let newPrice = state.price;
            newPrice[symbol] = price;
            return {
                ...state,
                loading: false,
                error: false,
                price: newPrice
            };
        case FETCH_CRYPTO_PRICE_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error
            }
        default:
            return state;
    }
}
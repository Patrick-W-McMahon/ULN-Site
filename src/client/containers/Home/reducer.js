import {
    FETCH_CRYPTO_PRICE_BEGIN,
    FETCH_CRYPTO_PRICE_SUCCESS,
    FETCH_CRYPTO_PRICE_FAILURE,
    FETCH_STATIC_DATA_BEGIN,
    FETCH_STATIC_DATA_SUCCESS,
    FETCH_STATIC_DATA_FAILURE
} from './action';

const initialState = {
    loading: false,
    error: false,
    price: {
        BNBUSDT: 0.00,
        ETHUSDT: 0.00
    },
    staticData: {
        TOKEN: { token_price: 0, token_supply: 0, reg_price: 0, circulating: 0 },
        TEAM: [],
        TIMELINE: []
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
        case FETCH_STATIC_DATA_BEGIN:
            return {
                ...state,
                loading: true,
                error: false
            };
        case FETCH_STATIC_DATA_SUCCESS:
            const { key, data } = action;
            let newData = state.staticData;
            newData[key] = data;
            return {
                ...state,
                loading: false,
                error: false,
                staticData: newData
            }
        case FETCH_STATIC_DATA_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error
            };
        default:
            return state;
    }
}
import { constant } from "./constant"

export const persistData = (dataObject) => {
    localStorage.setItem(constant.localStorageKey, stringify({items: dataObject}));
}

export const getLocalData = () => {
    return parseToJson(localStorage.getItem(constant.localStorageKey));
}

export const isStrgEmpty = () => {
    if(getLocalData() && getLocalData()?.items && getLocalData()?.items.length > 0) {
        return getLocalData()?.items.length === 0;
    } else {
        return true;
    }
}

export const stringify = (jsonObj) => {
    return JSON.stringify(jsonObj);
}

export const parseToJson = (stringObj) => {
    return stringObj && JSON.parse(stringObj);
}


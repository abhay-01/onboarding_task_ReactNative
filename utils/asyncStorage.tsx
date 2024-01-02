import AsyncStorage from "@react-native-async-storage/async-storage";

export const setItem = async (key: string, value: string) => {
    try{
        await AsyncStorage.setItem(key, value);
    }catch(e){
        console.log("Error in setting item", e);
    }
};


export const getItem = async (key: string) => {
    try{
        const value = await AsyncStorage.getItem(key);
        if(value !== null){
            return value;
        }
    }catch(e){
        console.log("Error in getting item", e);
    }
};

export const removeItem = async (key: string) => {
    try{
        await AsyncStorage.removeItem(key);
    }catch(e){
        console.log("Error in removing item", e);
    }
};
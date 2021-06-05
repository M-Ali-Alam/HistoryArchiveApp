import React, {useState} from 'react'; 

const TokenType = React.createContext();

export const TokenProvider =({children}) => {

    const [token ,setToken] = useState();
    const [type ,setType] = useState();

    return <TokenType.Provider value={{token:token, setToken:setToken, type:type, setType:setType}}>{children}</TokenType.Provider>
}

export default TokenType;

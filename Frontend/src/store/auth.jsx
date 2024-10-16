import {createContext,useContext,useEffect,useState} from "react";

export const AuthContext=createContext();

export const AuthProvider=({children})=>{
    const [token,setToken]=useState(localStorage.getItem('token'));
    const [user,setUser]=useState("");
    const [isLoading,setIsLoading]=useState(true);
    const authToken=`Bearer ${token}`;

    const storeToken=(server_token)=>{
        setToken(server_token);
        return localStorage.setItem('token',server_token);
    }

    let isLoggedIn=!!token;
    const logout=()=>{
        setToken("");
        return localStorage.removeItem("token");
    }

    const userAuth=async()=>{
        try{
            setIsLoading(true);
            const response=await fetch("https://webminds-2-1.onrender.com/api/auth/user",{
                method:"GET",
                headers:{
                    Authorization:authToken
                }
            })
            if(response.ok){
                const data=await response.json();
                setUser(data.userData);
                setIsLoading(false);
            }
            else{
                setIsLoading(false);
            }
        }
        catch(err){
            console.error("Error fetching user data");
        }
    }
    useEffect(()=>{
        userAuth();
    },[])
    return (<AuthContext.Provider value={{isLoggedIn,storeToken,logout,user,authToken,isLoading}}>
        {children}
    </AuthContext.Provider>)
}

export const useAuth=()=>{
    const AuthContextValue=useContext(AuthContext);
    if(!AuthContextValue){
        throw new Error("useAuth used Outside of Provider");
    }
    return AuthContextValue;
}
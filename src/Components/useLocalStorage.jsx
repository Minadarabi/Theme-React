import { useEffect, useState } from "react"


export const useLocalStorage = () => {
    const [isDarkMode , setIsDarkMode] = useState(false);

    useEffect(()=>{
        const saveMode = localStorage.getItem("dark");
        if(saveMode){
            setIsDarkMode(JSON.parse(saveMode))
        }

    },[]);
    useEffect(()=>{
        localStorage.setItem("dark" , JSON.stringify(isDarkMode));
        if(isDarkMode){
            document.body.classList.add("dark-mode")
        }else{
            document.body.classList.remove("dark-mode")
        }

    },[isDarkMode])
    const toggleDarkMode = ()=>{
        setIsDarkMode(!isDarkMode)

    }
  
    return [isDarkMode , toggleDarkMode]
}

export default useLocalStorage

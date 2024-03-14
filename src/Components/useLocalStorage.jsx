import { useEffect, useState } from "react"


export const useLocalStorage = () => {
    const [isDarkMode , setIsDarkMode] = useState(() => {
        const mode = localStorage.getItem("theme")
        if(mode !== null){
            return JSON.parse(mode)
        }
        return false
    });


    useEffect(()=>{
        localStorage.setItem("theme" , JSON.stringify(isDarkMode));
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

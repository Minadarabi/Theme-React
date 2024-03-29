
import useLocalStorage from "./useLocalStorage"
import "./style.css"


export const Theme = () => {
  const [isDarkMode , toggleDarkMode] = useLocalStorage()
  return (
    <div>
     <h1>Hello World!</h1>
     <button onClick={toggleDarkMode}>Change {isDarkMode ? "to Light" : "to Dark"}</button>
    </div>
  )
}

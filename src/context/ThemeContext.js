import React, {useState, createContext} from 'react';
export const ThemeContext = createContext();
//we initialise here
    const ThemeContextProvider = (props) =>{
    //create this component with state that we will share with everyone with its children
    const [theme, setTheme] = useState("Hello Context")
    //we gave it that we want to share throughout the application
    const toggleTheme = () =>{
        setTheme(!theme);
    }
    if(theme){
        document.body.classList.add('dark-mode');
    }else{
        document.body.classList.remove('dark-mode');
    }
    return(
        <ThemeContext.Provider value={{toggleTheme, theme}}>
            {/* reminder: a provider is the one who will bring the data in all the application it is the past props */}
            {props.children}
            {/* props.children : when we don't know what will be inside our component */}
        </ThemeContext.Provider>
    )
}
//and then we export the whole 
export default ThemeContextProvider;
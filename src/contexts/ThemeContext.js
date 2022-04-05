import React, { createContext, useState } from 'react'

import { themeData } from '../data/themeData'

export const ThemeContext = createContext()

function ThemeContextProvider(props) {
    // eslint-disable-next-line
    const [theme, setTheme] = useState(themeData.defaultTheme);
    const [drawerOpen, setDrawerOpen] = useState(false)
    const themeType = theme.type;
    const prevSelectedTheme = localStorage.getItem('theme', themeType)

    const setHandleDrawer = () => {
        setDrawerOpen(!drawerOpen)
    }

    const value = { theme, drawerOpen, setHandleDrawer, setTheme, prevSelectedTheme }
    return (
        <ThemeContext.Provider value={value}>
            {props.children}
        </ThemeContext.Provider>
    )
}


export default ThemeContextProvider
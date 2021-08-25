import React from 'react'
import NavBar from './Header/NavBar'
export default function Header(props) {
    return (
        < NavBar title={props.title} searchBar={props.searchBar} />
    )
}

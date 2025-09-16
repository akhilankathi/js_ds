// when User trying to search someting , instead of triggering API or function on each onChange , 
// we trigger when user gives some space or stops typying with some delay , 
// so if we get that delay we will trigger the API

import { useCallback, useState } from "react"

const debonceFunc = (func, delay) => {
    let timer
    return (...arg) => {
        if (timer) {
            clearTimeout(timer)
        }
        timer = setTimeout(() => {
            func(...arg)
        }, delay)
    }

}
export const SearchBox = () => {
    const [searchText, setSearchText] = useState('')

    const debounceFunc = useCallback(
        debonceFunc((searchValue) => {
            setSearchText(searchValue)
        }, 1000)
    , [])

    const handleSearch = (searchValue) => {
        debounceFunc(searchValue)
    }

    return (
        <div>
            <input type="text" name="search" id="search" placeholder="search Something...!" onChange={(e) => handleSearch(e.target.value)} autoComplete="off" />
            <br />
            {searchText}
        </div>
    )
}
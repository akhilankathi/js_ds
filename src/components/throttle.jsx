// when user tries to click on button or doing something frequently 
// we should handle this scenario like insted mkaing cals in each click , 
// we just trigger the function with some time interval lik 2 secs , even though user triggers event 
// many times we just trigger it only once per 2 secs 


import { useCallback, useState } from "react"

const throttleFuncLogic = (func, delay) => {
    let lasttime = 0
   return function(...args) {
    let now = Date.now()
   if( now - lasttime < delay){
    return;
   }
   lasttime = now;
   return func(...args)
    
   }
    }
export const SearchBox = () => {
    const [searchText, setSearchText] = useState('')


     const throttleFunc = useCallback(
        throttleFuncLogic((searchValue) => {
            setSearchText(searchValue)
        }, 2000)
    , [])

    const handleSearch = (searchValue) => {
        throttleFunc(searchValue)
    }

    return (
        <div>
            <input type="text" name="search" id="search" placeholder="search Something...!" onChange={(e) => handleSearch(e.target.value)} autoComplete="off" />
            <br />
            {searchText}
        </div>
    )
}
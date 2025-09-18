import { useEffect, useState } from 'react'
import './styles/dropdown.css'

export const SearchDropdown = () => {
    const [list, setList] = useState([
        "AKHIL",
        "ajay",
        "sukanya",
        "babu"
    ])
    const [filteredList, setFilteredList] = useState([])
    const [isOpen, setIsOpen] = useState(false)
    const [searchValue, setSearchValue] = useState('')

    const handleInputChange = (inputValue) => {
        setSearchValue(inputValue.trim())
        setIsOpen(inputValue.length > 0 ? true : false)
    }

        const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            e.preventDefault()
            setIsOpen(false)
            setSearchValue("")

            if (filteredList?.length === 0 && searchValue) {
                setList([...list, searchValue])
            }
        }
    }

    // const handleClick = () => {
        
    //         setIsOpen(false)
    //         setSearchValue("")
    //     if (filteredList?.length === 0 && searchValue) {
    //         setList([...list, searchValue])
    //     }
    // }

    useEffect(() => {
        if (searchValue.length > 0) {
            setFilteredList(list.filter(item => item?.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())))
        } else {
            setFilteredList(list)
        }

    }, [searchValue])

    return (
        <div className='dropdown-container'>
            <input className='search-input' type="search" name="search" id="search"  value={searchValue} autoComplete='off' onChange={(e) => handleInputChange(e.target.value)} onKeyDown={handleKeyDown} />
            {isOpen && <div className='dropdown-list'>
                {
                    filteredList.length > 0 ? <ul role='checkbox'>
                        {filteredList.map((item) => (
                            <li key={item} ><input type="checkbox" name="" id="" />{item}</li>
                        ))}
                    </ul> : "no data"
                }
            </div>
            }

        </div>
    )
}
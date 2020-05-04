import React from 'react';
import './sidebar.style.scss';
import SearchBox from '../search-box/search-box.component';

const Sidebar = ({category, changeCategory, selected}) => {

    
    let uniqueCategory = Array.from(new Set(category.map(element => {
        return element.category
    })))

    uniqueCategory.unshift('All')

    let uniquewithActive = uniqueCategory.map(element => {
        return {
            category: element,
            active: element==selected
        }
    });

    // console.log(uniquewithActive)

    return (
        <div className='navigation'>
            {uniquewithActive.map((element, index) => {
                return(
                    <h3 key={index}
                     onClick={() => changeCategory(element.category)}
                     className={element.active ? 'active' : ''}
                     >{element.category}</h3>
                )
            })}
            {/* <SearchBox 
        placeholder='ask question'
        /> */}
            {/* <h3>Server</h3>
            <h3>Others</h3> */}
        </div>
    )
}

export default Sidebar;
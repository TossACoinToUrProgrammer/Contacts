import React from 'react'
import heart2 from "../../../img/heart2.png";
import heart3 from "../../../img/heart5.png";
import sortPic from "../../../img/sort.png";
import reverseSort from "../../../img/reverseSort.png";
const Navbar =({sort,setSort})=>{
    return (
        <div  className="navbar">
          <input placeholder="type to search..." type="text" className="navbar__search"/>
          <div className="navbar__sort">
            <img src={sort==="favs"?heart3:heart2} onClick={()=>setSort('favs')} alt="fav"/>
            <img src={sortPic} className={sort==="sort"?"navbar__selected" : ""} onClick={()=>setSort('sort')} alt="sort"/>
            <img src={reverseSort} className={sort==="reverseSort"?"navbar__selected" : ""} onClick={()=>setSort('reverseSort')} alt="Reverse sort"/>
          </div>
        </div>
    )
}

export default Navbar;
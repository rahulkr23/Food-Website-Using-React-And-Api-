import React from "react";

const Header = props => {
    const{search, onInputChange} = props;
    return (
        <div className="jumbotron">

            <h1 className="display-1">
                <i class="materials-icons brand-icon">fastfood</i> Food Recipe </h1>
            <div class="input-group w-50 mx-auto">

                <input 
                type="text"
                 class="from-control" 
                 placeholder="Search Here"
                  value={search}
                  onChange={onInputChange}
                   />
              
                <div class="input-group-append">
                 
                  <button className="btn btn-dark">Search</button>

                </div>
            </div>
        </div>
    );
};
export default Header;
import React from 'react';
import {FiEdit} from 'react-icons/fi'
import {ImBin2} from 'react-icons/im'
import {HiDuplicate} from 'react-icons/hi'

const DropDownMenu = () => {
    return (
            <div className="dropdown">
                <button className="dropdown-toggle" type="button" id="dropdownMenuButton">
                    ...
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a className="dropdown-item" href="#"><FiEdit/> Edit Data</a>
                    <a className="dropdown-item" href="#"><ImBin2/>Remove Data</a>
                    <a className="dropdown-item" href="#"><HiDuplicate/> Data</a>
                </div>
            </div>
    );
};

export default DropDownMenu;
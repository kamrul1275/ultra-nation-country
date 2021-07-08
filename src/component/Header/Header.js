import React from 'react';
import './Header.css';
import Button from 'react-bootstrap/Button';
import { useHistory } from 'react-router';


const Header = () => {
    let history = useHistory();
    function handleClick() {
        history.push("/home");
      };
    return (
        <div className="heading-style">
            <Button onClick={handleClick} style={{border: '1px solid white'}} variant="dark"><h3>Country react SPA</h3></Button>
        </div>
    );
};

export default Header;
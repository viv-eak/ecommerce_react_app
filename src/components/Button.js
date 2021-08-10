import React from 'react';

import LanguageContext from '../contexts/LanguageContext';

class Button extends React.Component{
    static contextType = LanguageContext;
    
    render() {
        const text = this.context === 'english' ? 'Submit' : 'Xyzzzz....';
        return (
            <Button className="ui button primary">{text}</Button>
        );
    }
}

export default Button;
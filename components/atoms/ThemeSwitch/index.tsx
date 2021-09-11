import React, { FunctionComponent, useContext, useState } from 'react';
import Switch from 'react-switch';

import Icon from 'components/atoms/Icon/Icon';

import ThemeContext from 'context/theme';

const ThemeSwitch: FunctionComponent = () => {
    const toogleTheme = useContext(ThemeContext);
    const [checked, setChecked] = useState(false);

    const handleChange = () => {
        setChecked(!checked);
        if (toogleTheme.toggleTheme) {
            toogleTheme.toggleTheme();
        }
    };

    return (
        <Switch
            checked={checked}
            onChange={handleChange}
            offColor="#D8D8D8"
            onColor="#a6a6a6"
            handleDiameter={42}
            uncheckedIcon={false}
            checkedIcon={false}
            uncheckedHandleIcon={<Icon name="Light" style={{ transform: 'translate(7px, 6px)' }} />}
            checkedHandleIcon={<Icon name="Dark" style={{ transform: 'translate(7px, 6px)' }} />}
            activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
            height={24}
            width={72}
        />
    );
};

export default ThemeSwitch;

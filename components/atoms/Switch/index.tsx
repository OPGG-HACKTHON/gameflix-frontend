import React, { FunctionComponent, useState } from 'react';
import Switch from 'react-switch';

import * as lightSvg from './svgLight';
import * as darkSvg from './svgDark';
import { useEffect } from '@storybook/addons';

type SwitchProps = {
    toggleTheme: () => void;
};

const ThemeSwitch: FunctionComponent<SwitchProps> = (props) => {
    const { toggleTheme } = props;
    const [checked, setChecked] = useState(false);

    const handleChange = () => {
        setChecked(!checked);
    };

    useEffect(() => {
        toggleTheme();
    }, [checked]);

    return (
        <Switch
            checked={checked}
            onChange={handleChange}
            offColor="#D8D8D8"
            onColor="#a6a6a6"
            handleDiameter={42}
            uncheckedIcon={false}
            checkedIcon={false}
            uncheckedHandleIcon={React.createElement(lightSvg['logo'])}
            checkedHandleIcon={React.createElement(darkSvg['logo'])}
            activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
            height={24}
            width={72}
            className="react-switch"
            id="material-switch"
        />
    );
};

export default ThemeSwitch;

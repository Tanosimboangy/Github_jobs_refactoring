import React from 'react';
import {    
    Container,
    FullTimejobs,
    Input,
    Label,
    Containers,
    InputLabel,
    InputLocation,
    Wrapper,
    Subwrapper,
} from './styles/Search';

export default function Search({children, ...restProps }) {
	return <Container {...restProps}>{children}</Container>;
}

Search.FullTimejobs = function SearchFullTimejobs({ children, ...restProps }) {
    return <FullTimejobs {...restProps}>{children}</FullTimejobs>;
};

Search.Input = function SearchInput({...restProps }) {
    return <Input {...restProps}/>;
};

Search.Label = function SearchLabel({children, ...restProps }) {
    return <Label {...restProps}>{children}</Label>;
};

Search.Containers = function SearchContainers({children, ...restProps }) {
    return <Containers {...restProps}>{children}</Containers>;
};

Search.InputLabel = function SearchInputLabel({children, ...restProps }) {
    return <InputLabel {...restProps}>{children}</InputLabel>;
};

Search.InputLocation = function SearchInputLocation({...restProps }) {
    return <InputLocation {...restProps} />;
};

Search.Wrapper = function SearchWrapper({children, ...restProps }) {
    return <Wrapper {...restProps}>{children}</Wrapper>;
};

Search.Subwrapper = function SearchSubwrapper({children, ...restProps }) {
    return <Subwrapper {...restProps}>{children}</Subwrapper>;
};

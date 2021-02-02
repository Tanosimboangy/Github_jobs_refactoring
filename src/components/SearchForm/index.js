import React from 'react';
import {    
    Search,
    SearchFullTimejobs,
    Input,
    Label,
    Container,
    InputLabel,
    InputLocation,
    Wrapper,
    Subwrapper,
} from './styles/header';

export default function Search({children, ...restProps }) {
	return <Container {...restProps}>{children}</Container>;
}

Search.SearchFullTimejobs = function SearchSearchFullTimejobs({ children, ...restProps }) {
    return <SearchFullTimejobs {...restProps}>{children}</SearchFullTimejobs>;
};

Search.Input = function SearchInput({...restProps }) {
    return <Input {...restProps}/>;
};

Search.Label = function SearchLabel({children, ...restProps }) {
    return <Label {...restProps}>{children}</Label>;
};

Search.Container = function SearchContainer({children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>;
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

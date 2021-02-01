import React from 'react';
import {
    Container,
    Form,
    Input,
    Button
} from './styles/header';

export default function Header({children, ...restProps }) {
	return <Container {...restProps}>{children}</Container>;
}

Header.Form = function HeaderForm({ children, ...restProps }) {
    return <Form {...restProps}>{children}</Form>;
};

Header.Input = function HeaderInput({...restProps }) {
    return <Input {...restProps}/>;
};

Header.Button = function HeaderButton({ children, ...restProps }) {
	return <Button {...restProps}>{children}</Button>;
};



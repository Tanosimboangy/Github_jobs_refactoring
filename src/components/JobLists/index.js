import React from 'react';
import {
    Container,
    Lists,
    Link,
    CompanyInfo, 
    Image,
    Wrapper,
    Company, 
    Title,
    Button,
    Location,
    ImageContainer,
    Img
} from './styles/JobLists';

export default function JobLists({children, ...restProps }) {
	return <Container {...restProps}>{children}</Container>;
}
JobLists.Lists = function JobListsLists({ children, ...restProps }) {
    return <Lists {...restProps}>{children}</Lists>;
};
JobLists.Link = function JobListsLink({ children, ...restProps }) {
    return <Link {...restProps}>{children}</Link>;
};
JobLists.CompanyInfo = function JobListsCompanyInfo({ children, ...restProps }) {
    return <CompanyInfo {...restProps}>{children}</CompanyInfo>;
};
JobLists.Image = function JobListsImage({...restProps }) {
    return <Image {...restProps}/>;
};
JobLists.Wrapper = function JobListsWrapper({ children, ...restProps }) {
    return <Wrapper {...restProps}>{children}</Wrapper>;
};
JobLists.Company = function JobListsCompany({ children, ...restProps }) {
    return <Company {...restProps}>{children}</Company>;
};
JobLists.Title = function JobListsTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>;
};
JobLists.Button = function JobListsButton({ children, ...restProps }) {
    return <Button {...restProps}>{children}</Button>;
};
JobLists.Location = function JobListsLocation({ children, ...restProps }) {
    return <Location {...restProps}>{children}</Location>;
};
JobLists.ImageContainer = function JobListsImageContainer({ children, ...restProps }) {
    return <ImageContainer {...restProps}>{children}</ImageContainer>;
};
JobLists.Img = function JobListsImg({...restProps }) {
    return <Img {...restProps} />;
};

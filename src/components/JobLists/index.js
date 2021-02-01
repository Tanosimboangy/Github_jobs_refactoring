import React from 'react';
import {
    Container,
    Details,

} from './styles/JobLists';

export default function JobLists({children, ...restProps }) {
	return <Container {...restProps}>{children}</Container>;
}

JobLists.Details = function JobListsDetails({ children, ...restProps }) {
    return <Details {...restProps}>{children}</Details>;
};

JobLists.Link = function JobListsLink({ children, ...restProps }) {
    return <Link {...restProps}>{children}</Link>;
};

JobLists.CompanyInfo = function JobListsCompanyInfo({ children, ...restProps }) {
    return <CompanyInfo {...restProps}>{children}</CompanyInfo>;
};

JobLists.Image = function JobListsImage({ children, ...restProps }) {
    return <Image {...restProps}>{children}</Image>;
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

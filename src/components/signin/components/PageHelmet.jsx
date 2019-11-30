// eslint-disable-next-line import/order
import { HELMET_STRINGS } from '../constants';
import { Helmet } from 'react-helmet';
import React from 'react';

// De-structuring needed constants from HELMET_STRINGS
const {
    TITLE_TEMPLATE,
    TITLE_TEMPLATE_DEFAULT_TITLE,
    META_TAGS,
    PAGE_TITLE,
    CANON_LINK,
} = HELMET_STRINGS;

const w = Math.random();
export default function PageHelmet() {
    return (
        <Helmet titleTemplate={TITLE_TEMPLATE} defaultTitle={TITLE_TEMPLATE_DEFAULT_TITLE}>
            {META_TAGS.map(tag => {
                const { metaName, metaContent, metaContentMore } = tag;
                return (<meta key={w} name={metaName} content={metaContent + metaContentMore} />);
            })}
            <title itemProp="name" lang="en">
                {PAGE_TITLE}
            </title>
            <link rel="canonical" href={CANON_LINK} />
        </Helmet>
    );
}

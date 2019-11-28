import React from 'react';
import { Helmet } from 'react-helmet';
import { HELMET_STRINGS } from '../constants';

// De-structuring needed constants from HELMET_STRINGS
const {
    TITLE_TEMPLATE,
    TITLE_TEMPLATE_DEFAULT_TITLE,
    CHARSET,
    META_DESC,
    META_DESC_CONTENT,
    META_VIEWPORT,
    META_VIEWPORT_CONTENT,
    PAGE_TITLE,
    CANON_LINK,
} = HELMET_STRINGS;

export default function PageHelmet() {
    return (
        <Helmet
            titleTemplate={TITLE_TEMPLATE}
            defaultTitle={TITLE_TEMPLATE_DEFAULT_TITLE}
        >
            <meta charSet={CHARSET} />
            <meta name={META_DESC} content={META_DESC_CONTENT} />
            <meta name={META_VIEWPORT} content={META_VIEWPORT_CONTENT} />
            <title itemProp="name" lang="en">
                {PAGE_TITLE}
            </title>
            <link rel="canonical" href={CANON_LINK} />
        </Helmet>
    );
}

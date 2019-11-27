import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Row, Col } from "antd";
import { Title, Helmet_Strings, Main_Content } from "../constants";
import Artwork from "../images/hero-illustration.svg";

const Page_Helmet = () => {
  //De-structuring needed constants from Helmet_Strings
  const {
    TITLE_TEMPLATE,
    TITLE_TEMPLATE_DEFAULT_TITLE,
    CHARSET,
    META_DESC,
    META_DESC_CONTENT,
    META_VIEWPORT,
    META_VIEWPORT_CONTENT,
    PAGE_TITLE,
    CANON_LINK
  } = Helmet_Strings;

  return (
    <Helmet
      titleTemplate={TITLE_TEMPLATE}
      defaultTitle={TITLE_TEMPLATE_DEFAULT_TITLE}
    >
      <meta charSet={CHARSET} />
      <meta name={META_DESC} content={META_DESC_CONTENT} />
      <meta name={META_VIEWPORT} content={META_VIEWPORT_CONTENT}></meta>
      <title itemProp="name" lang="en">
        {PAGE_TITLE}
      </title>
      <link rel="canonical" href={CANON_LINK} />
    </Helmet>
  );
};

const Page_Content = () => {
  const { HERO_IMG, HERO_TITLE, HERO_DESC, LINKS } = Main_Content;
  return (
    <main className="hero-section">
      <Row type="flex" justify="center" className="hv-100">
        <Col span={22} className="h-100">
          <Row type="flex" className="h-100" align="middle">
            <Col
              lg={{ span: 12, order: 1 }}
              md={{ span: 0 }}
              data-aos="fade"
              data-aos-delay="1000"
            >
              <img
                className="img-fluid hero-illustration"
                src={HERO_IMG}
                alt=""
              />
            </Col>

            <Col lg={12} data-aos="fade" data-aos-delay="1000">
              <Title className="blue-text hero-title">{HERO_TITLE}</Title>
              <p>{HERO_DESC}</p>

              {LINKS.map(link => {
                const { link_class, link_text, link_to } = link;
                return (
                  <Link className={link_class} to={link_to}>
                    {link_text}
                  </Link>
                );
              })}
            </Col>
          </Row>
        </Col>
      </Row>
    </main>
  );
};

const Homepage = () => {
  return (
    <>
      <Page_Helmet />
      <Page_Content />
    </>
  );
};

export default Homepage;

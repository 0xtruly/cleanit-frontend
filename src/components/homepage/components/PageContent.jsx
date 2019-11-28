import React from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "antd";
import Title from "antd/lib/typography/Title";
import { MAIN_CONTENT } from "../constants";

//De-structuring needed constants from MAIN_CONTENT
const { HERO_IMG, HERO_TITLE, HERO_DESC, LINKS } = MAIN_CONTENT;

export default function PageContent() {
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
}

import React from "react";
import { Col, Row } from "antd";
import styles from "./index.module.css";
export default function Home() {
  return (
    <div>
      <h3>react子应用</h3>
        <Row style={{ marginBottom: 10 }}>
          <Col span={12} className={styles.firstCol}>
            class="first-col"
            <br />
            background-color: blue;
            <br />
            font-size: 20px;
          </Col>
          <Col span={12} className={styles.secondCol}>
            class="second-col"
            <br />
            background-color: orange;
            <br />
            font-size: 20px;
          </Col>
        </Row>
    </div>
  )
}
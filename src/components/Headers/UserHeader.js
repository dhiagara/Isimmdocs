
import React from "react";

// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

class UserHeader extends React.Component {
  render() {
    return (
      <>
        <div
          className="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
          style={{
            minHeight: "600px",
            backgroundImage:
              "url(" + require("assets/img/theme/isimm.png") + ")",
            backgroundSize: "cover",
            backgroundPosition: "center top"
          }}
        >
         
        </div>
      </>
    );
  }
}

export default UserHeader;

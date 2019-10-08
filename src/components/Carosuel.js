import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import Card from "../components/Card";
import wmLogo from "../assets/img/wm-business.png";
import hechoEn from "../assets/img/hecho-en-2.png";
import ramenShop from "../assets/img/ramens-shop-2.png";

class Carosuel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: 0,
          title: "Whole Milk Studios",
          subTitle: "A Digital Production Agency",
          imgSrc: wmLogo,
          link: "#",
          selected: false
        },
        {
          id: 1,
          title: "Ramen Shop",
          subTitle: "A Ramen Shop",
          imgSrc: ramenShop,
          link: "#",
          selected: false
        },
        {
          id: 2,
          title: "Hecho En",
          subTitle: "Be Part of the 59",
          imgSrc: hechoEn,
          link: "#",
          selected: false
        }
      ]
    };
  }

  handleCardClick = id => {
    let items = [...this.state.items];

    items[id].selected = items[id].selected ? false : true;

    items.forEach(item => {
      if (item.id !== id) {
        item.selected = false;
      }
    });
    this.setState({
      items
    });
  };

  makeItems = items => {
    return items.map(item => {
      return (
        <Card
          item={item}
          click={e => this.handleCardClick(item.id, e)}
          key={item.id}
        />
      );
    });
  };

  render() {
    return (
      <Container fluid={true}>
        <Row className="justify-content-around">
          {this.makeItems(this.state.items)}
        </Row>
      </Container>
    );
  }
}

export default Carosuel;

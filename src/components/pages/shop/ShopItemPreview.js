import React, { useEffect, useState } from "react";
import * as shopItemActions from "../../../redux/actions/shopItemActions";
import { Translator } from "../../../services/languages/Laguage";
import { connect } from "react-redux";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import "../../../css/shopPreview.css";
import ItemDescriptionTab from "../../../components/common/Shop/Items/ItemDescriptionTab";
import ItemUsageTab from "../../../components/common/Shop/Items/ItemUsageTab";
import ItemOpinionsTab from "../../common/Shop/Items/ItemOpinionsTab";
import ItemBrandTab from "../../common/Shop/Items/ItemBrandTab";

const ShopItemPreview = (props) => {
  const { shopItemId } = props.match.params;
  const { shopItem, onLoadItemInformation } = props;
  const [key, setKey] = useState("preview");

  useEffect(() => {
    onLoadItemInformation(shopItemId);
  }, []);

  return (
    <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
    >
      <Tab eventKey="preview" title={<Translator getString="Description" />}>
        <ItemDescriptionTab shopItem={shopItem} />
      </Tab>
      <Tab eventKey="usage" title={<Translator getString="Usage" />}>
        <ItemUsageTab shopItem={shopItem} />
      </Tab>
      <Tab eventKey="opinions" title={<Translator getString="Opinions" />}>
        <ItemOpinionsTab shopItemId={shopItemId} />
      </Tab>
      <Tab eventKey="brand" title={<Translator getString="Brand" />}>
        <ItemBrandTab shopItem={shopItem} />
      </Tab>
    </Tabs>
  );
};

const mapsDispatchToProps = (dispatch) => {
  return {
    onLoadItemInformation: (shopItemId) => {
      dispatch(shopItemActions.loadShopItem(shopItemId));
    },
  };
};

const mapsStateToProps = (state) => {
  return {
    shopItem: state.shopItem,
  };
};

export default connect(mapsStateToProps, mapsDispatchToProps)(ShopItemPreview);

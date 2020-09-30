import React, { Component } from "react";
import PromotionItem from "./PromotionItem";

export default class ListPromotion extends Component {
  render() {
    return (
      <section id="promotion" className="container-fluid pt-5 pb-5">
        <h1 className="text-center text-white">PROMOTION</h1>
        <div className="container bg-light pt-5 pb-5">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-4">
              <PromotionItem />
            </div>
            <div className="col-xs-12 col-sm-12 col-md-4">
              <PromotionItem />
            </div>
            <div className="col-xs-12 col-sm-12 col-md-4">
              <PromotionItem />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

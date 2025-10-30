import React from "react";
import "./ProfitIntro.scss";

export default function ProfitIntro() {
  return (
    <section className="profit-intro">
      <h2 className="profit-intro__title">
        Welcome to the Profit Calculator 💼
      </h2>
      <p className="profit-intro__text">
        This simple tool helps you calculate how much profit you make from your
        sales. You just need to:
      </p>

      <ul className="profit-intro__steps">
        <li>
          Click the <strong>“Add”</strong> button to create a new item.
        </li>
        <li>
          Give your item a <strong>name</strong> (for example: “Rose Bouquet”).
        </li>
        <li>
          Enter how much you <strong>bought</strong> it for.
        </li>
        <li>
          Enter how much you <strong>sold</strong> it for.
        </li>
        <li>
          Finally, click <strong>“Calculate”</strong> to see your profit
          instantly!
        </li>
      </ul>

      <p className="profit-intro__text">
        It’s fast, easy, and helps you keep track of your business earnings with
        style.
      </p>
    </section>
  );
}

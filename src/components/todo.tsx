import React from "react";
import Header from "./header";
import { colors } from "../helpers/colors";
import Tasks from "./tasks";
import Notes from "./notes";
import Goals from "./goals";

export default function Todo() {
  return (
    <div className="todo">
      <Header />

      <div className="content">
        <div className="content-left">
          <div className="content-left-top-box">
            <Goals />
          </div>

          <div className="content-left-bottom-box">
            <Notes />
          </div>
        </div>

        <div className="content-right-box">
          <Tasks color={colors.purple} defaultType="todo" />
        </div>
      </div>
    </div>
  );
}

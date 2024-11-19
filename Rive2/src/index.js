
import * as rive from "https://unpkg.com/@rive-app/canvas@2.7.0";

let stateMachineLoadInput;
const r = new rive.Rive({
  src:
    "peacock-logo-v1i.riv",
  canvas: document.getElementById("canvas"),
  stateMachines: "ScrollingBehaviour",
  artboard: "horizontal",
  autoplay: true,
  layout: new rive.Layout({
    fit: rive.Fit.FitWidth,
    alignment: rive.Alignment.CenterLeft
  }),
  onLoad: () => {
    stateMachineLoadInput = r.stateMachineInputs("ScrollingBehaviour")[0];
    stateMachineLoadInput.value = 1;
  }
});

const body = document.querySelector("body");
const bodyParent = body.parentNode;
const pageLength = bodyParent.scrollHeight;

// const pctLabel = document.getElementById("pctLabel");
document.onscroll = () => {
  const scrollOffset = bodyParent.scrollTop;
  const scrollPctValue =
    (100 * scrollOffset) / (pageLength - bodyParent.clientHeight);
  // pctLabel.innerHTML = `Scroll Percentage: ${scrollPctValue.toFixed(0)}%`;
  stateMachineLoadInput.value = scrollPctValue;
};

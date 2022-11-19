import React, {useState} from "../../_snowpack/pkg/react.js";
import ModalVideo from "../../_snowpack/pkg/react-modal-video.js";
import PageTemplate from "../components/PageTemplate.js";
import MainText from "../components/MainText.js";
import CGGImage from "../assets/img/works/CuteGirlsGenerator_blur.png.proxy.js";
import CGGVideo from "../assets/img/works/CGGdemo.mp4.proxy.js";
const Works = () => {
  const [isOpen, setOpen] = useState(false);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(PageTemplate, {
    contents: "Works"
  }), /* @__PURE__ */ React.createElement(ModalVideo, {
    channel: "custom",
    autoplay: true,
    isOpen,
    url: CGGVideo,
    onClose: () => setOpen(false)
  }), /* @__PURE__ */ React.createElement(MainText, {
    contents: /* @__PURE__ */ React.createElement("div", {
      class: "works",
      onClick: () => setOpen(true)
    }, /* @__PURE__ */ React.createElement("img", {
      src: CGGImage
    }), /* @__PURE__ */ React.createElement("h1", null, "Cute Girls Generator"), /* @__PURE__ */ React.createElement("p", null, "Cute Girls Generator(CGG) is a service that generates cute and erotic girls with machine learning. To make it, I teamed up with the most talented people I've ever met(The origin of DEXUS!). It is still working progress. ", /* @__PURE__ */ React.createElement("br", null), "CLICK TO SEE DEMO MOVIE."))
  }));
};
export default Works;

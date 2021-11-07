import Reveal from "reveal.js";
import RevealMarkdown from "reveal.js/plugin/markdown/markdown.esm.js";
import RevealZoom from "reveal.js/plugin/zoom/zoom.esm.js";
import RevealSearch from "reveal.js/plugin/search/search.esm.js";
import RevealHighlight from "reveal.js/plugin/highlight/highlight.esm.js";
import RevealNotes from "reveal.js/plugin/notes/notes.esm.js";
import { useEffect } from "react";

import * as Pages from "./pages";

const Presentation = () => {
  useEffect(() => {
    const deck = new Reveal({
      width: 1000,
      height: 700,
      embedded: true,
      progress: false,
      controlsTutorial: false,
      plugins: [
        RevealZoom,
        RevealNotes,
        RevealSearch,
        RevealMarkdown,
        RevealHighlight,
      ],
    });

    deck.initialize();
  }, []);


  return (
    <div className="reveal">
      <div className="slides">{
        Object.entries(Pages).map(([name, Component]) => <Component key={name} />)
      }</div>
    </div>
  );
};

export default Presentation;

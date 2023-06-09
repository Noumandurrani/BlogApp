import React from "react";

function About() {
  return (
    <>
      <div className="container mt-5">
        <h1 style={{ fontFamily: "italic", fontWeight: "bold" }}>About</h1>

        <p style={{ fontSize: 20 }}>
          In publishing and graphic design, Lorem ipsum is a placeholder text
          commonly used to demonstrate the visual form of a document or a
          typeface without relying on meaningful content. Lorem ipsum may be
          used as a placeholder before final copy is available. It is also used
          to temporarily replace text in a process called greeking, which allows
          designers to consider the form of a webpage or publication, without
          the meaning of the text influencing the design.
        </p>
        <p style={{ fontSize: 20 }}>
          Lorem ipsum is typically a corrupted version of De finibus bonorum et
          malorum, a 1st-century BC text by the Roman statesman and philosopher
          Cicero, with words altered, added, and removed to make it nonsensical
          and improper Latin.
        </p>
        <p style={{ fontSize: 20 }}>
          Versions of the Lorem ipsum text have been used in typesetting at
          least since the 1960s, when it was popularized by advertisements for
          Letraset transfer sheets. Lorem ipsum was introduced to the digital
          world in the mid-1980s, when Aldus employed it in graphic and
          word-processing templates for its desktop publishing program
          PageMaker. Other popular word processors, including Pages and
          Microsoft Word, have since adopted Lorem ipsum, as have many LaTeX
          packages,web content managers such as Joomla! and WordPress, and CSS
          libraries such as Semantic UI.
        </p>
      </div>
    </>
  );
}

export default About;

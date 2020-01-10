import React from "react";
import { FormattedMessage } from "react-intl";

function App() {
  return (
    <>
      <h1>Intl-test</h1>
      <hr />

      <h2>기본</h2>
      <FormattedMessage id="main_name" />
      <hr />

      <h2>메시지 + 변수</h2>
      <FormattedMessage
        id="main_greeting"
        values={{
          name: "jacob",
          url: "https://code-masterjung.tistory.com/"
        }}
      />
      <hr />

      <h2>메시지 + 변수 + 엘리먼트</h2>
      <FormattedMessage
        id="main_greeting"
        values={{
          name: "jacob",
          url: (
            <a
              href="https://code-masterjung.tistory.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              URL
            </a>
          )
        }}
      />
    </>
  );
}

export default App;

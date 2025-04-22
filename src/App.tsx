import ReactMarkdown from "react-markdown";
import { MarkdownLink, MarkdownImage } from "./Components";
import logoSrc from "/LM_LOGO.svg";
import mkdEn from "./pageContentEn";

const App = () => {
  return (
    <div className="flex w-full justify-center p-5">
      <div className="flex h-full w-1/2 flex-col gap-2 rounded-3xl bg-amber-50">
        <img src={logoSrc} className="logo" alt="Liad manteka logo" />

        <div className="space-y-2 p-5">
          <ReactMarkdown
            components={{
              a: MarkdownLink,
              img: (props) => (
                <MarkdownImage {...props} className="w-1/2 rounded-2xl" />
              ),
            }}
            children={mkdEn}
          />
          {}
        </div>
      </div>
    </div>
  );
};

export default App;

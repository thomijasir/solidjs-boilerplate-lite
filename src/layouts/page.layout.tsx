import { Component, JSXElement } from "solid-js";
import LoadingGeneral from "../components/Loading/LoadingGeneral.comp";
import useAppContext from "../stores/useAppContext";


interface IPropsPageLayout {
  styleClass?: string;
  children: JSXElement;
}

const PageLayout: Component<IPropsPageLayout> = ({ children, styleClass = '' }) => {

  const [context] = useAppContext();

  return (
    <div class={`${styleClass}`}>
      <LoadingGeneral {...context.loadingState} />
      {children}
    </div>
  );
};

export default PageLayout
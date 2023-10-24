import { Component } from 'solid-js';
import Loading from './Loading.comp';
export type IPropsLoadingGeneral = {
  isLoading: boolean;
  text?: string;
};
const LoadingGeneral: Component<IPropsLoadingGeneral> = (props) => {
  return (
    <div
      class={`w-full h-full fixed text-center top-0
    left-0 flex items-center justify-center bg-white 
    transition duration-150 ease-in-out 
    ${props.isLoading ? 'opacity-100 z-50' : 'opacity-0 -z-10'}`}
    >
      <Loading text={props.text} />
    </div>
  );
};

export default LoadingGeneral;

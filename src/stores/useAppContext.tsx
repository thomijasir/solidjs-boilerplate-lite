import { JSXElement, createContext, useContext } from 'solid-js';
import { SetStoreFunction, createStore } from 'solid-js/store';
import { Context } from 'solid-js';

export interface IAppContext {
  loadingState: {
    isLoading: boolean;
    text: string;
  };
  errorState: {
    isError: boolean;
    title: string;
    message: string;
  };
}

// Initial State
export const initState: IAppContext = {
  loadingState: {
    isLoading: false,
    text: 'Loading...',
  },
  errorState: {
    isError: false,
    title: 'Something Wrong!',
    message:
      'Opps, please check app configuration or service that might cause this error.',
  },
};

interface IStateAppProvider {
  children?: JSXElement | JSXElement[];
}

const AppContext: Context<any> = createContext();

export const AppProvider = (props: IStateAppProvider) => {
  const [store, setStore] = createStore<IAppContext>({ ...initState });
  // For Modify Return Setter Object you
  // you can modify in the value return provider
  // createEffect(() => {
  // Serialize Context To LocalStorage
  //   console.log('SUBSCRIBE');
  //   localStorage.setItem('appStore', JSON.stringify(store));
  // });
  return (
    <AppContext.Provider value={[store, setStore]}>
      {props.children}
    </AppContext.Provider>
  );
};

export default () =>
  useContext(AppContext) as [
    store: IAppContext,
    setState: SetStoreFunction<IAppContext>,
  ];

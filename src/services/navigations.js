import { NavigationActions } from 'react-navigation';

let navigator;

function setNavigator(ref) {
  navigator = ref;
}

function navigate(route, params) {
  navigator.dispatch(
    NavigationActions.navigate({
      route,
      params,
    })
  );
}

export default {
  navigate,
  setNavigator,
};

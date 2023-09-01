import store, { setAlert } from "../store/store";

export const loginUser = (authFunction, values) => {
  console.log(values);
  authFunction(values)
    .unwrap()
    .then((res) => {
      if (res.error) {
        console.log(res.error);
        store.dispatch(setAlert({ type: "error", content: res.error }));
      } else if (res.token) {
        const { token, data } = res;
        localStorage.setItem("auth", JSON.stringify({ token, data }));
        window.location.pathname = "/";
      }
    })
    .catch((er) => {
      console.log(er);

      store.dispatch(
        setAlert({
          type: "error",
          content: er.data?.error||er.error.split(':')[1],
        })
      );
    });
};

export const signout = () => {};

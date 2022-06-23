function login(id, password) {
  // 미들웨어 return
  return (dispatch, getState) => {
    // payload 던질 매개변수

    dispatch({ type: "LOGIN_SUCCESS", payload: { id, password } });
  };
}
export const authenticateAction = { login };

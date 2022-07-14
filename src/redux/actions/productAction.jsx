// 미들웨어로 이사 하기
function getProducts(searchQuery) {
  // 미들웨어는 함수를 리턴한다 함수는 두개의 매개변수를 갖는다(dispatch , getState)
  return async (dispatch, getState) => {
    let url = ` https://my-json-server.typicode.com/S-MunSoo/ToyProject-H-M-App/products?q=${searchQuery}`;
    let response = await fetch(url);
    let data = await response.json();
    console.log("data???", data);
    // dispatch를 통해 리듀서로 data 액션 호출
    dispatch({ type: "GET_PRODUCT_SUCCESS", payload: { data } });
  };
}

export const productAction = { getProducts };

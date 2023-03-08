# 리덕스 툴킷 사용법

1. store.js 설정

```javascript
const rootReducer = combineReducers({
  counter: counterReducer,
});

export default configureStore({
  reducer: rootReducer,
});
```

`combineReducers`는 여러 전역관리 데이터를 모아주는 역할을 함

2. index.js 설정

```javascript
<Provider store={store}>
    <App>
</Provider>
```

App컴포넌트를 `<Provider store={store}>`로 감싸줄 것

3. src/feature/counter/counterSlice.js 설정
   `createSlice`로 `name`과 `initialState`와 `reducers`를 설정할 것

- `reducers`의 value값은 함수로 설정할 것

```javascript
{reducers.key, reducers.key, reducers.key} = '컴포넌트명'.actions
export default '컴포넌트명'.reducers
```

4. counter/Counter.jsx 설정

- useSelector설정
- useDispatch설정

```javascript
const count = useSelector((state) => {
  state.counter.value;
});
const dispatch = useDispatch();
```

## 리덕스 툴킷 데이터패칭

1. `npm i axios` 설치

2. Counter.jsx

```javascript
<button
  onClick={() => {
    dispatch(fetchIncrement({ count }));
  }}>
  Fetch Increment
</button>
```

3. counterSlice.js

```javascript
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchIncrement = createAsyncThunk("counter/fetchIncrement", async (value) => {
  console.log(value);
  const response = await axios.put("/counter/increment", { value: value.count });
  return response;
});

...

extraReducers: {
    [fetchIncrement.fulfilled]: (state, action) => {
        console.log(state.value);
        console.log(action.payload.data.value);
        state.value = action.payload.data.value;
    },
},

```

4. handler.js

```javascript
import { rest } from "msw";

export const handler = [
  rest.put("http://localhost:3001/counter/increment", async (req, res, ctx) => {
    const { value } = req.body;
    return res(
      ctx.json({
        value: value + 2,
      })
    );
  }),
];
```

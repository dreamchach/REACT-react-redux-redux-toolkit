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

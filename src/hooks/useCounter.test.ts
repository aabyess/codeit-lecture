import { renderHook } from "@testing-library/react"
import { useCounter } from "./useCounter"
describe("useCounter 테스트",()=>{
  test("useCounter 훅의 파라미터 값이 초기값으로 잘 세팅되는지 확인",()=>{
    const {result} = renderHook(()=>useCounter(5));

    expect(result.current.count)
  })
})


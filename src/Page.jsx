import Body from "./Body";
import { FormContext } from "./context";
import PopupForm from "./PopupForm";
import {useContext} from 'react'

export default function Page() {
    const {isShow} = useContext(FormContext)

  return (
    <>
      {!isShow ? <Body />:
      <PopupForm />}
    </>
  );
}

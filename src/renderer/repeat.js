import { repeatBtn, repeatText } from "../renderer.js";
import { setRepeatCondition } from "./buttons/play/next.js";

let verificador = 0;

export const repeat = () => {
  repeatBtn.addEventListener("click", () => {
    if (verificador === 0) {
        repeatText.innerHTML = 'ONE'
        repeatBtn.classList.add('repeatActive')
        verificador++
        setRepeatCondition('repeat-one')        
        
    } else if (verificador === 1) {
        repeatText.innerHTML = 'ALL'
        verificador++
        setRepeatCondition('repeat-all')       

    } else if (verificador === 2) {
        repeatText.innerHTML = ''
        repeatBtn.classList.remove('repeatActive')
        verificador = 0
        setRepeatCondition('repeat-normal')       
        
    }
  });
};

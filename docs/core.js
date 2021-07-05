export function getValue(){
  return Number(sessionStorage.getItem('myValue')) || 0;
}

export function setValue(value) {
  sessionStorage.setItem('myValue', value); 
}


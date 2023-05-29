const setLocalStorage = (item,data)=>{
    return localStorage.setItem(item,JSON.stringify(data))
}
const getLocalStorage = (item)=>{
    return JSON.parse(localStorage.getItem(item))
}
const removeLocalStorage = (item)=>{
    return localStorage.removeItem(item)
}
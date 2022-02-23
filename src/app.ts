async function init(){
    const str:string = "Hello World"
    const header = document.createElement("h1")
    header.innerText = str
    document.body.append(header)    
    throw new Error("SOMETHING IS WRONG")
}
init()
const button = document.querySelector("button");
button?.addEventListener("click", handleClick);

function handleClick(this: HTMLElement) {
    console.log("Clicked!");
    this.removeEventListener("click", handleClick);
}




export default button;
const fetchProductos = (time, task)=> {
    return new Promise((ful)=>{
        setTimeout(()=>{
            ful(task)
        },time);
    });
}

export default fetchProductos;
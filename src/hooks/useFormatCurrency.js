const useCurrecyFormat = () =>{

    const formatCurrency = (value) =>{
        return value.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')
    }

    return { formatCurrency } 

}



export default useCurrecyFormat
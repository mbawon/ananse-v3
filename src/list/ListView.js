
const ListView = ({action, listData, title, contact}) => {

    const listAction = (data) =>{
        return action(data)
    }
    return (
        <div onClick={()=>listAction(listData)} style={{display:"flex",flexDirection:"row", alignItems:"flex-start", border:"1px solid #ccc", backgroundColor:"#eee", padding:20}}>
            <div style={{alignSelf:"center", fontSize:18}}>
                <p style={{fontSize:20}}>{title}</p>
                <p style={{fontSize:14}}>{contact}</p>
            </div>
            <div style={{marginLeft:"auto", alignSelf:"center", marginRight:10}}>
                <i className="fas fa-angle-right fa-lg"></i>
            </div>
        </div>
    );
};

export default ListView
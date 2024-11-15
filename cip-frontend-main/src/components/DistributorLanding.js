import react,{ useState,useContext,useEffect,useRef } from 'react';
import { getProduct } from '../Web3Client';
import AppContext from '../AppContext';
import { QrReader } from 'react-qr-reader';
import ProdDetails from './ProdDetails';

function DistributorLanding(){
    const {account,setAccount,userrole,setUserrole} = useContext(AppContext);
    const [product,setProduct] = useState({});
    const [productList,setProductList] = react.useState([]);
    const [data, setData] = useState('No result');
    const [clicked,setClicked] = useState(false);
    

    let id;
  useEffect(() => {
    if(account===null||userrole===null){
        const accDetails = localStorage.getItem('account').split(',');
        const accId = accDetails[0];
        const accName = accDetails[1];
        const accProductList = accDetails.slice(2);
        console.log(accProductList);
        setAccount({id:accId,name:accName,productList:accProductList});
        setUserrole(localStorage.getItem("userrole"));
    }
  },[]);
  useEffect(() => {
    let prodList = [];
    account.productList.forEach(async element => {
        let product = await getProduct(element).then(res=>{return res});
        prodList.push(product);
        setProductList(prodList);
    });
  },[account.productList]);

  const handleScan = () => {
    setClicked(true);
  }

    return (
        <div className='App'>
            <div style={{backgroundColor:"rosybrown",textAlign:"center",alignItems:"center",padding:"20px",width:"80%",height:"60px",margin:"auto",borderRadius:"10px"}}>
            <h1>{userrole}:{account.name}</h1>
            </div>
            <div>
               <h3>Product List</h3>
            </div>
            <div className='posts'>
                {productList.map((post,index)=>{
                    return (
                        <div style={{margin:"auto",backgroundColor:"lightblue",width:"40%",padding:"0px",borderRadius:"10px"}}key={index}>
                            <p>{post.name}</p>
                            <p>{post.price}</p>
                            <p>{post.description}</p>
                        </div>
                    )
                }) }
            </div>
            <button variant="contained" color="secondary" onClick={handleScan}>Scan Qr Code</button>
            <QrReader
                onResult={(result, error) => {
                    // console.log(result);
                    if (!!result) {
                        setData(result?.text);
                        setProduct(result?.text.split('/')[result?.text.split('/').length-1])
                    }
                    if (!!error) {
                        // console.info(error);
                    }
                }}
                style={{ width: '100%' }}
            />
            <h3>Scanned Code: {data}</h3>
            {id = data.split('/')[data.split('/').length-1]}
            <h4>Product Id: {id}</h4>
            {(clicked)?
            <div>
            <ProdDetails id={data.split('/')[data.split('/').length-1]} ownerRole="Manufacturer" curRole={userrole}/>
            </div>
            :
            null}
        </div>
    );
}
export default DistributorLanding;
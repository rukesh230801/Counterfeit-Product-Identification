import React,{ useContext,useState } from 'react'
import { getProduct,getDetails,supToManTransaction,manToDisTransaction,disToRetTransaction } from '../Web3Client';
import AppContext from '../AppContext';
import QRCode from 'react-qr-code';

const ProdDetails = (props) => {
    
  const {account,setAccount,userrole,setUserrole} = useContext(AppContext);
  const [qrcode,setQrcode] = React.useState('');
    const [product,setProduct] = React.useState({});
    const [bought,setBought] = useState(false);
  
    const [owners,setOwners] = useState([]);
    const prevOwnerDetails = [];

    const {id,ownerRole,curRole} = props;

    const fetchDetails = async(id) => {
        const product = await getProduct(id).then(res => {
            return res;
        })
        setProduct(product);
        if(curRole=='Distributor'){
          const supDetails = await getDetails(product.prevOwners[0],"Supplier").then(res => {
            return res;
          });
          setOwners([supDetails.name]);
        }
        if(curRole=='Retailer'){
          const manDetails = getDetails(product.prevOwners[1],"Manufacturer").then(res => {
            return res;
          });
          setOwners(oldArray => [...oldArray,manDetails.name]);
        }
        if(curRole=='Customer'){
          const disDetails = getDetails(product.prevOwners[2],"Distributor").then(res => {
            return res;
          });
          setOwners(oldArray => [...oldArray,disDetails.name]);
        }
    }

    fetchDetails(id);

    const buyProduct = async () => {
      
      if(ownerRole==='Supplier'&&curRole==='Manufacturer'){
        const x = await supToManTransaction(product.productId,product.curOwnerId,account.manufacturerId).then(res=>{
        return res;
        });
        setQrcode(`http://localhost:3000/product/${x}`);
        setBought(true);
      }
      if(ownerRole==='Manufacturer'&&curRole==='Distributor'){
        const x = await manToDisTransaction(product.productId,product.curOwnerId,account.distributorId).then(res=>{
        return res;
        });
        setQrcode(`http://localhost:3000/product/${x}`);
        setBought(true);
      }
      if(ownerRole==='Distributor'&&curRole==='Retailer'){
        const x = await disToRetTransaction(product.productId,product.curOwnerId,account.retailerId).then(res=>{
        return res;
        });
        setQrcode(`http://localhost:3000/product/${x}`);
        setBought(true);
      }
    }
  return (
    <div>
        <h1>Product Details</h1>
        <h2>{product.name}</h2>
        <h2>{product.price}</h2>
        <h2>{product.description}</h2>
        {
          owners.map((prevOwner,index)=>{
            return(
              <div index={index}>
              <h2>{prevOwner}</h2>
              </div>
            )
          })
        }
        <h2>{product.curOwner}</h2>
        <button className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 mt-10" onClick={buyProduct}>Buy Product</button>
        {(bought)?<div style={{margin:"auto",padding:"20px",display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"lightsteelblue",borderRadius:"10px",width:"80%",height:"250px"}}>
                <QRCode value={qrcode} size={200} />
            </div>:null}
    </div>
  )
}

export default ProdDetails;

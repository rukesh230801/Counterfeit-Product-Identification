import react,{ useContext,useEffect } from 'react';
import { initweb3,addProduct,getProduct } from '../Web3Client';
import Data from "./data.json";
import AppContext from '../AppContext';
import { addProductFields } from '../constants/formField';
import Input from "./Input";
import FormAction from "./FormAction";
import FormExtra from "./FormExtra";
import QRCode from "react-qr-code";


function SupplierLanding(){
    const [showqr,setShowqr] = react.useState(false);
    const {account,setAccount,userrole,setUserrole} = useContext(AppContext);
    const [productList,setProductList] = react.useState([]);
    const [qrcode,setQrcode] = react.useState('');

    const handleClick=(e)=>{
        window.open("/");
      }

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
    console.log(account.productList);
    account.productList.forEach(async element => {
        let product = await getProduct(element).then(res=>{return res});
        prodList.push(product);
        setProductList(prodList);
    });
  },[account.productList]);
  
    const fields=addProductFields;
    let fieldsState = {};
    fields.forEach(field=>fieldsState[field.id]='');

    const [productState,setProductState] = react.useState(fieldsState);

    const handleChange=(e)=>{
        setProductState({...productState,[e.target.id]:e.target.value})
    }

    const handleSubmit=async (e)=>{
        e.preventDefault();
        let x = await addProduct(productState,account[0]).then(res=>{
            return res;
        });
        // console.log(x);
        setQrcode(`http://localhost:3000/product/${x}`);
        setShowqr(true);
    }
    // console.log(productList);  
    return (    
        <div style={{overflow:"visible"}}>
            <div className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 mt-10">
            <h1>{userrole}:{account.name}</h1>
            </div>
            <div>
                <br></br>
               <h3 className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 ">Product List</h3>
               <br></br>
               <br></br>
            </div>
            <div style={{overflowY:"scroll",height:"20%"}}>
                {productList.map((post,index)=>{
                    return (
                        <div style={{margin:"auto",backgroundColor:"lightblue",width:"40%",padding:"0px",borderRadius:"10px"}}key={index}>
                            <p>Product Details:</p>
                            <p>{post.name}</p>
                            <p>{post.price}</p>
                            <p>{post.description}</p>
                            <br></br>
                        </div>
                    )
                }) }
            </div>
            <br></br>
            <br></br>
            <div style={{margin:"auto",padding:"20px",backgroundColor:"lightsteelblue",borderRadius:"10px",width:"80%",height:"250px"}}>
            <div>
            {
                fields.map(field=>
                        <Input
                            key={field.id}
                            handleChange={handleChange}
                            value={productState[field.id]}
                            labelText={field.labelText}
                            labelFor={field.labelFor}
                            id={field.id}
                            name={field.name}
                            type={field.type}
                            isRequired={field.isRequired}
                            placeholder={field.placeholder}
                    />
                
                )
            }
            </div>
            <br></br>
            <button className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 mt-10" onClick={handleSubmit}>
                Add Product
            </button>
            </div><br/><br/>
            <br></br>
            <br></br>
            {console.log(showqr)}
            {(showqr)?<div style={{margin:"auto",padding:"20px",display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"lightsteelblue",borderRadius:"10px",width:"80%",height:"250px"}}>
                <QRCode value={qrcode} size={200} />
            </div>:null}
            <button className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 mt-10" onClick={handleClick}>LOG OUT</button>
        </div>
    );
}
export default SupplierLanding;
import React,{ useState } from 'react';
import { QrReader } from 'react-qr-reader';
import ProdDetails from './ProdDetails';


function CustomerLanding(){

    let id;

    const [data, setData] = useState('No result');
    const [clicked,setClicked] = useState(false);
    const [product,setProduct] = useState({});

    const handleScan = () => {
        setClicked(true);
    }
    const handleClick=(e)=>{
        window.open("/");
      }
    return (
        <div className='App'>
            <div>
            <h1 className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 mt-10">Welcome!</h1>
            </div>
            <div style={{display: "flex",justifyContent: "center",}}>
               <h1 className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 mt-10">Upload the QR code below!</h1>
            </div>
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
             <button className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 mt-10" onClick={handleScan}>Scan Qr Code</button>
            <h3>Scanned Code: {data}</h3>
            {id = data.split('/')[data.split('/').length-1]}
            <h4>Product Id: {id}</h4>
            {(clicked)?
            <div>
            <ProdDetails id={data.split('/')[data.split('/').length-1]} ownerRole="Retailer" curRole="Customer"/>
            </div>
            :
            null}
            <br></br>
            <button className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 mt-10" onClick={handleClick}>LOG OUT</button>
        </div> 
    );
}
export default CustomerLanding;


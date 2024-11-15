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
    return (
        <div className='App'>
            <div style={{display: "flex",justifyContent: "center",alignItems: "center",backgroundColor:"rosybrown",borderRadius:"10px"}}>
            <h1>Welcome!</h1>
            </div>
            <br></br>
            <div style={{display: "flex",justifyContent: "center",}}>
               <h1>Upload the QR code below!</h1>
            </div><br></br>
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
            <ProdDetails id={data.split('/')[data.split('/').length-1]} ownerRole="Retailer" curRole="Customer"/>
            </div>
            :
            null}
        </div> 
    );
}
export default CustomerLanding;


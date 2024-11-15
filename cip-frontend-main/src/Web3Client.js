import Web3 from 'web3';
import FakeProdId from './FakeProdId.json';
import truffleContract from 'truffle-contract';

let account,contractInstance;
let isInitialized = false;

export async function initweb3(){
  let provider = window.ethereum;

  if(typeof provider != 'undefined'){
    provider.
      request({method: 'eth_requestAccounts'})
      .then(accounts => {
        account = accounts[0];
      })
      .catch((err) => {
        console.log(err);
        return;
      });
    window.ethereum.on('accountsChanged', (accounts) => {
      account = accounts[0];
      console.log(account);
    }
    );
  }
  const web3 = new Web3(provider);

  // const networkId = await web3.eth.net.getId();
  
  const fabiContract = truffleContract(FakeProdId);
  fabiContract.setProvider(web3.currentProvider);
  contractInstance = await fabiContract.deployed();
  

  isInitialized = true;

}

export const addProduct = async (product,curOwnerId) => {
  if (!isInitialized) {
		await initweb3();
	}
  
  const result = await contractInstance.addProduct(product.name,product.price,product.description,{from: account});
  const res = await contractInstance.supplierTransaction(result.logs[0].args.prod.productId,curOwnerId,{from: account});
  console.log(res)
  return result.logs[0].args.prod.productId;
}
export const supToManTransaction = async (productId,supplierId,manufacturerId) => {
  if (!isInitialized) {
		await initweb3();
	}

  const result = await contractInstance.supplierToManufacturer(productId,supplierId,manufacturerId,{from: account});
  console.log(result);
  return result.logs[0].args.product.productId;
}
export const manToDisTransaction = async (productId,manufacturerId,distributorId) => {
  if (!isInitialized) {
		await initweb3();
	}

  const result = await contractInstance.manufacturerToDistributor(productId,manufacturerId,distributorId,{from: account});
  console.log(result);
  return result.logs[0].args.product.productId;
}
export const disToRetTransaction = async (productId,distributorId,retailerId) => {
  if (!isInitialized) {
		await initweb3();
	}

  const result = await contractInstance.distributorToRetailer(productId,distributorId,retailerId,{from: account});
  console.log(result);
  return result.logs[0].args.product.productId;
}
export const getProduct = async (id) => {
  if (!isInitialized) {
    await initweb3();
  }
  const product = await contractInstance.getProduct(id);
  // console.log(product);
  return product;
}
export const addAccount = async (name,role) => {
  if (!isInitialized) {
    await initweb3();
  }
  if(role=='Supplier'){
    const result = await contractInstance.addSupplier(name,{from: account});
    console.log(result.logs[0].args.newSupplier.supplierId);
    return result.logs[0].args.newSupplier.supplierId;
  }
  else if(role=='Manufacturer'){
    const result = await contractInstance.addManufacturer(name,{from: account});
    console.log(result.logs[0].args);
    return result.logs[0].args.newManufacturer.manufacturerId;
  }
  else if(role=='Distributor'){
    const result = await contractInstance.addDistributor(name,{from: account});
    console.log(result.logs[0].args);
    return result.logs[0].args.newDistributor.distributorId;
  }
  else if(role=='Retailer'){
    const result = await contractInstance.addRetailer(name,{from: account});
    console.log(result.logs[0].args);
    return result.logs[0].args.newRetailer.retailerId;
  }
  else{
    console.log('Invalid role');
  }
}
export const getDetails = async (id,role) => {
  if (!isInitialized) {
    await initweb3();
  }
  if(role=='Supplier'){
    const result = await contractInstance.getsupplierDetails(id,{from: account}).then(res => {
      return res;
    });
    return result;
  }
  else if(role=='Manufacturer'){
    const result = await contractInstance.getmanufacturerDetails(id,{from: account}).then(res => {
      return res;
    });
    return result;
  }
  else if(role=='Distributor'){
    const result = await contractInstance.getdistributorDetails(id,{from: account}).then(res => {
      return res;
    });
    return result;
  }
  else if(role=='Retailer'){
    const result = await contractInstance.getretailerDetails(id,{from: account}).then(res => {
      return res;
    });
    return result;
  }
  return null;
}
export const getAccount = async (name,id,role) => {
  if (!isInitialized) {
    await initweb3();
  }
  if(role=='Supplier'){
    const result = await contractInstance.getsupplierDetails(id,{from: account});
    console.log(result);
    if(result.name==name&&result.name!=""){
      return result;
    }
    else{
      return null;
    }
  }
  else if(role=='Manufacturer'){
    const result = await contractInstance.getmanufacturerDetails(id,{from: account});
    console.log(result.name);

    if(result.name==name&&result.name!=""){
      return result;
    }
    else{
      return null;
    }
  }
  else if(role=='Distributor'){
    const result = await contractInstance.getdistributorDetails(id,{from: account});
    console.log(result);
    if(result.name==name&&result.name!=""){
      return result;
    }
    else{
      return null;
    }
  }
  else if(role=='Retailer'){
    const result = await contractInstance.getretailerDetails(id,{from: account});
    console.log(result);
    if(result.name==name&&result.name!=""){
      return result;
    }
    else{
      return null;
    }
  }
  return null;
}


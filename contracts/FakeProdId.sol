// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract FakeProdId {
    address owner = msg.sender;

    struct Product{
        uint productId;
        string name;
        uint price;
        string description;
        uint[] prevOwners;
        uint prevOwnersSize;
        string curOwner;
        uint curOwnerId;
    }

    struct Supplier{
        uint supplierId;
        string name;
        uint prodListSize;
        uint[] productList;
    }

    struct Manufacturer{
        uint manufacturerId;
        string name;
        uint prodListSize;
        uint[] productList;
    }

    struct Distributor{
        uint distributorId;
        string name;
        uint prodListSize;
        uint[] productList;
    }

    struct Retailer{
        uint retailerId;
        string name;
        uint prodListSize;
        uint[] productList;
    }

    event prodDetails(
        Product  prod,
        uint productSize
    );
    
    event supplierDetails(
        Supplier newSupplier
    );

    event manufacturerDetails(
        Manufacturer newManufacturer
    );

    event distributorDetails(
        Distributor newDistributor
    );

    event retailerDetails(
        Retailer newRetailer
    );
    
    event completeSupplierTransaction(
        Product p,
        Supplier s,
        Product p1
    );
    event completeTransaction(
        Product product
    );

    mapping(uint => Product) public products;
    uint productsSize=0;
    mapping(uint => Supplier) public suppliers;
    mapping(uint => Manufacturer) public manufacturers;
    mapping(uint => Distributor) public distributors;
    mapping(uint => Retailer) public retailers;

    function addProduct(string memory name,uint price,string memory description) public{
        Product memory newProduct;
        newProduct.productId=productsSize;
        newProduct.name = name;
        newProduct.price = price;
        newProduct.description = description;
        newProduct.curOwner = "";
        newProduct.curOwnerId = 0;
        newProduct.prevOwners = new uint[](4);
        newProduct.prevOwnersSize = 0;
        products[newProduct.productId] = newProduct;
        productsSize++;
        emit prodDetails(newProduct,productsSize);
    }


    function getProduct(uint productId) public view returns (Product memory){
        return products[productId];
    }

    function addSupplier(string memory name) public{
        Supplier memory newSupplier;
        newSupplier.supplierId=uint(keccak256(abi.encode(name,block.timestamp,block.difficulty)));
        newSupplier.supplierId = newSupplier.supplierId%100000000;
        newSupplier.name = name;
        newSupplier.productList = new uint[](0);
        newSupplier.prodListSize = 0;
        suppliers[newSupplier.supplierId] = newSupplier;
        emit supplierDetails(newSupplier);
    }

    function getsupplierDetails(uint supplierId) public view returns (Supplier memory){
        return suppliers[supplierId];
    }

    function addManufacturer(string memory name) public{
        Manufacturer memory newManufacturer;
        newManufacturer.manufacturerId=uint(keccak256(abi.encode(name,block.timestamp,block.difficulty)))%100000000;
        newManufacturer.name = name;
        newManufacturer.productList = new uint[](0);
        newManufacturer.prodListSize = 0;

        manufacturers[newManufacturer.manufacturerId] = newManufacturer;
        
        emit manufacturerDetails(newManufacturer);
    }

    function getmanufacturerDetails(uint manufacturerId) public view returns (Manufacturer memory){
        return manufacturers[manufacturerId];
    }

    function addDistributor(string memory name) public{
        Distributor memory newDistributor;
        newDistributor.distributorId=uint(keccak256(abi.encode(name,block.timestamp,block.difficulty)))%100000000;
        newDistributor.name = name;
        newDistributor.productList = new uint[](0);
        newDistributor.prodListSize = 0;

        distributors[newDistributor.distributorId] = newDistributor;
        
        emit distributorDetails(newDistributor);
    }
    
    function getdistributorDetails(uint distributorId) public view returns (Distributor memory){
        return distributors[distributorId];
    }

    function addRetailer(string memory name) public{
        Retailer memory newRetailer;
        newRetailer.retailerId=uint(keccak256(abi.encode(name,block.timestamp,block.difficulty)))%100000000;
        newRetailer.name = name;
        newRetailer.productList = new uint[](0);
        newRetailer.prodListSize = 0;
        retailers[newRetailer.retailerId] = newRetailer;
        emit retailerDetails(newRetailer);
    }

    function getretailerDetails(uint retailerId) public view returns (Retailer memory){
        return retailers[retailerId];
    }

    function supplierTransaction(uint productId,uint supplierId) payable public{
        Supplier memory s = getsupplierDetails(supplierId);
        Product memory p = getProduct(productId);
        
        p.curOwner = s.name;
        p.curOwnerId = s.supplierId;

        products[productId] = p;

        uint[] memory temp = new uint[](s.prodListSize+1);
        for(uint i=0;i<s.prodListSize;i++){
            temp[i] = s.productList[i];
        }
        temp[s.prodListSize] = productId;
        s.prodListSize++;
        s.productList = temp;
        
        suppliers[supplierId] = s;

        emit completeTransaction(products[productId]);
    }

    function supplierToManufacturer(uint productId,uint supplierId,uint manufacturerId) payable public{
        Product memory p = getProduct(productId);

        require(p.curOwnerId == supplierId, "Supplier is not the current owner of the product");

        Manufacturer memory m = getmanufacturerDetails(manufacturerId);

        p.curOwner = m.name;
        p.curOwnerId = m.manufacturerId;

        uint[] memory temp = new uint[](p.prevOwnersSize+1);
        for(uint i=0;i<p.prevOwnersSize;i++){
            temp[i] = p.prevOwners[i];
        }
        temp[p.prevOwnersSize] = supplierId;
        p.prevOwnersSize++;
        p.prevOwners = temp;

        products[productId] = p;

        uint[] memory temp1 = new uint[](m.prodListSize+1);
        for(uint i=0;i<m.prodListSize;i++){
            temp[i] = m.productList[i];
        }
        temp1[m.prodListSize] = productId;
        m.prodListSize++;
        m.productList = temp1;

        manufacturers[manufacturerId] = m;

        emit completeTransaction(products[productId]);
    }

    function manufacturerToDistributor(uint productId,uint manufacturerId,uint distributorId) payable public{
        Product memory p = getProduct(productId);

        require(p.curOwnerId == manufacturerId, "Manufacturer is not the current owner of the product");
        
        Distributor memory d = getdistributorDetails(distributorId);

        p.curOwner = d.name;
        p.curOwnerId = d.distributorId;

        uint[] memory temp = new uint[](p.prevOwnersSize+1);
        for(uint i=0;i<p.prevOwnersSize;i++){
            temp[i] = p.prevOwners[i];
        }
        temp[p.prevOwnersSize] = manufacturerId;
        p.prevOwnersSize++;
        p.prevOwners = temp;

        products[productId] = p;

        uint[] memory temp1 = new uint[](d.prodListSize+1);
        for(uint i=0;i<d.prodListSize;i++){
            temp1[i] = d.productList[i];
        }
        temp1[d.prodListSize] = productId;
        d.prodListSize++;
        d.productList = temp1;
        distributors[distributorId] = d;

        emit completeTransaction(p);
    }

    function distributorToRetailer(uint productId,uint distributorId,uint retailerId) payable public{
        Product memory p = getProduct(productId);

        require(p.curOwnerId == distributorId, "Distributor is not the current owner of the product");

        Retailer memory r = getretailerDetails(retailerId);

        p.curOwner = r.name;
        p.curOwnerId = r.retailerId;
        uint[] memory temp = new uint[](p.prevOwnersSize+1);
        for(uint i=0;i<p.prevOwnersSize;i++){
            temp[i] = p.prevOwners[i];
        }
        temp[p.prevOwnersSize] = distributorId;
        p.prevOwnersSize++;

        p.prevOwners = temp;

        products[productId] = p;

        uint[] memory temp1 = new uint[](r.prodListSize+1);
        for(uint i=0;i<r.prodListSize;i++){
            temp1[i] = r.productList[i];
        }
        temp1[r.prodListSize] = productId;
        r.prodListSize++;
        r.productList = temp1;
        retailers[retailerId] = r;

        emit completeTransaction(p);
    }
    
    modifier restricted(){
        require(msg.sender == owner);
        _;
    }

    
}

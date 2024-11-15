const abiarray = [
    {
        "anonymous": false,
        "inputs": [
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "productId",
                "type": "uint256"
              },
              {
                "internalType": "string",
                "name": "name",
                "type": "string"
              },
              {
                "internalType": "uint256",
                "name": "price",
                "type": "uint256"
              },
              {
                "internalType": "string",
                "name": "description",
                "type": "string"
              },
              {
                "internalType": "uint256[]",
                "name": "prevOwners",
                "type": "uint256[]"
              },
              {
                "internalType": "uint256",
                "name": "prevOwnersSize",
                "type": "uint256"
              },
              {
                "internalType": "string",
                "name": "curOwner",
                "type": "string"
              },
              {
                "internalType": "uint256",
                "name": "curOwnerId",
                "type": "uint256"
              }
            ],
            "indexed": false,
            "internalType": "struct FakeProdId.Product",
            "name": "p",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "supplierId",
                "type": "uint256"
              },
              {
                "internalType": "string",
                "name": "name",
                "type": "string"
              },
              {
                "internalType": "uint256",
                "name": "prodListSize",
                "type": "uint256"
              },
              {
                "internalType": "uint256[]",
                "name": "productList",
                "type": "uint256[]"
              }
            ],
            "indexed": false,
            "internalType": "struct FakeProdId.Supplier",
            "name": "s",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "productId",
                "type": "uint256"
              },
              {
                "internalType": "string",
                "name": "name",
                "type": "string"
              },
              {
                "internalType": "uint256",
                "name": "price",
                "type": "uint256"
              },
              {
                "internalType": "string",
                "name": "description",
                "type": "string"
              },
              {
                "internalType": "uint256[]",
                "name": "prevOwners",
                "type": "uint256[]"
              },
              {
                "internalType": "uint256",
                "name": "prevOwnersSize",
                "type": "uint256"
              },
              {
                "internalType": "string",
                "name": "curOwner",
                "type": "string"
              },
              {
                "internalType": "uint256",
                "name": "curOwnerId",
                "type": "uint256"
              }
            ],
            "indexed": false,
            "internalType": "struct FakeProdId.Product",
            "name": "p1",
            "type": "tuple"
          }
        ],
        "name": "completeSupplierTransaction",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "productId",
                "type": "uint256"
              },
              {
                "internalType": "string",
                "name": "name",
                "type": "string"
              },
              {
                "internalType": "uint256",
                "name": "price",
                "type": "uint256"
              },
              {
                "internalType": "string",
                "name": "description",
                "type": "string"
              },
              {
                "internalType": "uint256[]",
                "name": "prevOwners",
                "type": "uint256[]"
              },
              {
                "internalType": "uint256",
                "name": "prevOwnersSize",
                "type": "uint256"
              },
              {
                "internalType": "string",
                "name": "curOwner",
                "type": "string"
              },
              {
                "internalType": "uint256",
                "name": "curOwnerId",
                "type": "uint256"
              }
            ],
            "indexed": false,
            "internalType": "struct FakeProdId.Product",
            "name": "product",
            "type": "tuple"
          }
        ],
        "name": "completeTransaction",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "distributorId",
                "type": "uint256"
              },
              {
                "internalType": "string",
                "name": "name",
                "type": "string"
              },
              {
                "internalType": "uint256",
                "name": "prodListSize",
                "type": "uint256"
              },
              {
                "internalType": "uint256[]",
                "name": "productList",
                "type": "uint256[]"
              }
            ],
            "indexed": false,
            "internalType": "struct FakeProdId.Distributor",
            "name": "newDistributor",
            "type": "tuple"
          }
        ],
        "name": "distributorDetails",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "manufacturerId",
                "type": "uint256"
              },
              {
                "internalType": "string",
                "name": "name",
                "type": "string"
              },
              {
                "internalType": "uint256",
                "name": "prodListSize",
                "type": "uint256"
              },
              {
                "internalType": "uint256[]",
                "name": "productList",
                "type": "uint256[]"
              }
            ],
            "indexed": false,
            "internalType": "struct FakeProdId.Manufacturer",
            "name": "newManufacturer",
            "type": "tuple"
          }
        ],
        "name": "manufacturerDetails",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "productId",
                "type": "uint256"
              },
              {
                "internalType": "string",
                "name": "name",
                "type": "string"
              },
              {
                "internalType": "uint256",
                "name": "price",
                "type": "uint256"
              },
              {
                "internalType": "string",
                "name": "description",
                "type": "string"
              },
              {
                "internalType": "uint256[]",
                "name": "prevOwners",
                "type": "uint256[]"
              },
              {
                "internalType": "uint256",
                "name": "prevOwnersSize",
                "type": "uint256"
              },
              {
                "internalType": "string",
                "name": "curOwner",
                "type": "string"
              },
              {
                "internalType": "uint256",
                "name": "curOwnerId",
                "type": "uint256"
              }
            ],
            "indexed": false,
            "internalType": "struct FakeProdId.Product",
            "name": "prod",
            "type": "tuple"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "productSize",
            "type": "uint256"
          }
        ],
        "name": "prodDetails",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "retailerId",
                "type": "uint256"
              },
              {
                "internalType": "string",
                "name": "name",
                "type": "string"
              },
              {
                "internalType": "uint256",
                "name": "prodListSize",
                "type": "uint256"
              },
              {
                "internalType": "uint256[]",
                "name": "productList",
                "type": "uint256[]"
              }
            ],
            "indexed": false,
            "internalType": "struct FakeProdId.Retailer",
            "name": "newRetailer",
            "type": "tuple"
          }
        ],
        "name": "retailerDetails",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "supplierId",
                "type": "uint256"
              },
              {
                "internalType": "string",
                "name": "name",
                "type": "string"
              },
              {
                "internalType": "uint256",
                "name": "prodListSize",
                "type": "uint256"
              },
              {
                "internalType": "uint256[]",
                "name": "productList",
                "type": "uint256[]"
              }
            ],
            "indexed": false,
            "internalType": "struct FakeProdId.Supplier",
            "name": "newSupplier",
            "type": "tuple"
          }
        ],
        "name": "supplierDetails",
        "type": "event"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "name": "distributors",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "distributorId",
            "type": "uint256"
          },
          {
            "internalType": "string",
            "name": "name",
            "type": "string"
          },
          {
            "internalType": "uint256",
            "name": "prodListSize",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "name": "manufacturers",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "manufacturerId",
            "type": "uint256"
          },
          {
            "internalType": "string",
            "name": "name",
            "type": "string"
          },
          {
            "internalType": "uint256",
            "name": "prodListSize",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "name": "products",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "productId",
            "type": "uint256"
          },
          {
            "internalType": "string",
            "name": "name",
            "type": "string"
          },
          {
            "internalType": "uint256",
            "name": "price",
            "type": "uint256"
          },
          {
            "internalType": "string",
            "name": "description",
            "type": "string"
          },
          {
            "internalType": "uint256",
            "name": "prevOwnersSize",
            "type": "uint256"
          },
          {
            "internalType": "string",
            "name": "curOwner",
            "type": "string"
          },
          {
            "internalType": "uint256",
            "name": "curOwnerId",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "name": "retailers",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "retailerId",
            "type": "uint256"
          },
          {
            "internalType": "string",
            "name": "name",
            "type": "string"
          },
          {
            "internalType": "uint256",
            "name": "prodListSize",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "name": "suppliers",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "supplierId",
            "type": "uint256"
          },
          {
            "internalType": "string",
            "name": "name",
            "type": "string"
          },
          {
            "internalType": "uint256",
            "name": "prodListSize",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "string",
            "name": "name",
            "type": "string"
          },
          {
            "internalType": "uint256",
            "name": "price",
            "type": "uint256"
          },
          {
            "internalType": "string",
            "name": "description",
            "type": "string"
          }
        ],
        "name": "addProduct",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "productId",
            "type": "uint256"
          }
        ],
        "name": "getProduct",
        "outputs": [
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "productId",
                "type": "uint256"
              },
              {
                "internalType": "string",
                "name": "name",
                "type": "string"
              },
              {
                "internalType": "uint256",
                "name": "price",
                "type": "uint256"
              },
              {
                "internalType": "string",
                "name": "description",
                "type": "string"
              },
              {
                "internalType": "uint256[]",
                "name": "prevOwners",
                "type": "uint256[]"
              },
              {
                "internalType": "uint256",
                "name": "prevOwnersSize",
                "type": "uint256"
              },
              {
                "internalType": "string",
                "name": "curOwner",
                "type": "string"
              },
              {
                "internalType": "uint256",
                "name": "curOwnerId",
                "type": "uint256"
              }
            ],
            "internalType": "struct FakeProdId.Product",
            "name": "",
            "type": "tuple"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "string",
            "name": "name",
            "type": "string"
          }
        ],
        "name": "addSupplier",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "supplierId",
            "type": "uint256"
          }
        ],
        "name": "getsupplierDetails",
        "outputs": [
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "supplierId",
                "type": "uint256"
              },
              {
                "internalType": "string",
                "name": "name",
                "type": "string"
              },
              {
                "internalType": "uint256",
                "name": "prodListSize",
                "type": "uint256"
              },
              {
                "internalType": "uint256[]",
                "name": "productList",
                "type": "uint256[]"
              }
            ],
            "internalType": "struct FakeProdId.Supplier",
            "name": "",
            "type": "tuple"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "string",
            "name": "name",
            "type": "string"
          }
        ],
        "name": "addManufacturer",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "manufacturerId",
            "type": "uint256"
          }
        ],
        "name": "getmanufacturerDetails",
        "outputs": [
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "manufacturerId",
                "type": "uint256"
              },
              {
                "internalType": "string",
                "name": "name",
                "type": "string"
              },
              {
                "internalType": "uint256",
                "name": "prodListSize",
                "type": "uint256"
              },
              {
                "internalType": "uint256[]",
                "name": "productList",
                "type": "uint256[]"
              }
            ],
            "internalType": "struct FakeProdId.Manufacturer",
            "name": "",
            "type": "tuple"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "string",
            "name": "name",
            "type": "string"
          }
        ],
        "name": "addDistributor",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "distributorId",
            "type": "uint256"
          }
        ],
        "name": "getdistributorDetails",
        "outputs": [
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "distributorId",
                "type": "uint256"
              },
              {
                "internalType": "string",
                "name": "name",
                "type": "string"
              },
              {
                "internalType": "uint256",
                "name": "prodListSize",
                "type": "uint256"
              },
              {
                "internalType": "uint256[]",
                "name": "productList",
                "type": "uint256[]"
              }
            ],
            "internalType": "struct FakeProdId.Distributor",
            "name": "",
            "type": "tuple"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "string",
            "name": "name",
            "type": "string"
          }
        ],
        "name": "addRetailer",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "retailerId",
            "type": "uint256"
          }
        ],
        "name": "getretailerDetails",
        "outputs": [
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "retailerId",
                "type": "uint256"
              },
              {
                "internalType": "string",
                "name": "name",
                "type": "string"
              },
              {
                "internalType": "uint256",
                "name": "prodListSize",
                "type": "uint256"
              },
              {
                "internalType": "uint256[]",
                "name": "productList",
                "type": "uint256[]"
              }
            ],
            "internalType": "struct FakeProdId.Retailer",
            "name": "",
            "type": "tuple"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "productId",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "supplierId",
            "type": "uint256"
          }
        ],
        "name": "supplierTransaction",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "productId",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "supplierId",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "manufacturerId",
            "type": "uint256"
          }
        ],
        "name": "supplierToManufacturer",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "productId",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "manufacturerId",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "distributorId",
            "type": "uint256"
          }
        ],
        "name": "manufacturerToDistributor",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "productId",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "distributorId",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "retailerId",
            "type": "uint256"
          }
        ],
        "name": "distributorToRetailer",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
      }
]
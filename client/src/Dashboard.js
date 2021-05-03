var HashStorageContract ={
  "contractName": "HashStorage",
  "abi": [
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "ipfsValue",
          "type": "string"
        },
        {
          "indexed": false,
          "name": "fileName",
          "type": "string"
        },
        {
          "indexed": false,
          "name": "sender",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "receiver",
          "type": "address"
        }
      ],
      "name": "ShareFile",
      "type": "event",
      "signature": "0xd85f2dd1d35cc84682c46cd9dcb79b9202b8ac0919a8267075f7fd4d6a07903d"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "storedHash",
          "type": "string"
        },
        {
          "name": "fileName",
          "type": "string"
        },
        {
          "name": "sender",
          "type": "address"
        },
        {
          "name": "receiver",
          "type": "address"
        }
      ],
      "name": "uploadHash",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0xd89c36e4"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "fileId",
          "type": "uint256"
        },
        {
          "name": "receiver",
          "type": "address"
        }
      ],
      "name": "getFile",
      "outputs": [
        {
          "name": "",
          "type": "string"
        },
        {
          "name": "",
          "type": "string"
        },
        {
          "name": "",
          "type": "address"
        },
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0xea2e4e0e"
    }
  ],
  "bytecode": "0x60806040526000805534801561001457600080fd5b50610ab9806100246000396000f3fe60806040526004361061004c576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff168063d89c36e414610051578063ea2e4e0e146101f0575b600080fd5b34801561005d57600080fd5b506101ee6004803603608081101561007457600080fd5b810190808035906020019064010000000081111561009157600080fd5b8201836020820111156100a357600080fd5b803590602001918460018302840111640100000000831117156100c557600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505091929192908035906020019064010000000081111561012857600080fd5b82018360208201111561013a57600080fd5b8035906020019184600183028401116401000000008311171561015c57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610396565b005b3480156101fc57600080fd5b506102496004803603604081101561021357600080fd5b8101908080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061070b565b6040518080602001806020018573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001838103835287818151815260200191508051906020019080838360005b838110156102f15780820151818401526020810190506102d6565b50505050905090810190601f16801561031e5780820380516001836020036101000a031916815260200191505b50838103825286818151815260200191508051906020019080838360005b8381101561035757808201518184015260208101905061033c565b50505050905090810190601f1680156103845780820380516001836020036101000a031916815260200191505b50965050505050505060405180910390f35b600260008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546000819055506080604051908101604052808581526020018481526020013373ffffffffffffffffffffffffffffffffffffffff1681526020018273ffffffffffffffffffffffffffffffffffffffff16815250600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008054815260200190815260200160002060008201518160000190805190602001906104979291906109e8565b5060208201518160010190805190602001906104b49291906109e8565b5060408201518160020160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060608201518160030160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055509050506001600260008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055507fd85f2dd1d35cc84682c46cd9dcb79b9202b8ac0919a8267075f7fd4d6a07903d848484846040518080602001806020018573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001838103835287818151815260200191508051906020019080838360005b83811015610661578082015181840152602081019050610646565b50505050905090810190601f16801561068e5780820380516001836020036101000a031916815260200191505b50838103825286818151815260200191508051906020019080838360005b838110156106c75780820151818401526020810190506106ac565b50505050905090810190601f1680156106f45780820380516001836020036101000a031916815260200191505b50965050505050505060405180910390a150505050565b606080600080600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000878152602001908152602001600020600001600160008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000888152602001908152602001600020600101600160008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600089815260200190815260200160002060020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600160008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008a815260200190815260200160002060030160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16838054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156109345780601f1061090957610100808354040283529160200191610934565b820191906000526020600020905b81548152906001019060200180831161091757829003601f168201915b50505050509350828054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156109d05780601f106109a5576101008083540402835291602001916109d0565b820191906000526020600020905b8154815290600101906020018083116109b357829003601f168201915b50505050509250935093509350935092959194509250565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10610a2957805160ff1916838001178555610a57565b82800160010185558215610a57579182015b82811115610a56578251825591602001919060010190610a3b565b5b509050610a649190610a68565b5090565b610a8a91905b80821115610a86576000816000905550600101610a6e565b5090565b9056fea165627a7a72305820fb0656e456a596e36200132fc6acb6254caebf5de141853c5383534e30cb64c80029",
  "deployedBytecode": "0x60806040526004361061004c576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff168063d89c36e414610051578063ea2e4e0e146101f0575b600080fd5b34801561005d57600080fd5b506101ee6004803603608081101561007457600080fd5b810190808035906020019064010000000081111561009157600080fd5b8201836020820111156100a357600080fd5b803590602001918460018302840111640100000000831117156100c557600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505091929192908035906020019064010000000081111561012857600080fd5b82018360208201111561013a57600080fd5b8035906020019184600183028401116401000000008311171561015c57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610396565b005b3480156101fc57600080fd5b506102496004803603604081101561021357600080fd5b8101908080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061070b565b6040518080602001806020018573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001838103835287818151815260200191508051906020019080838360005b838110156102f15780820151818401526020810190506102d6565b50505050905090810190601f16801561031e5780820380516001836020036101000a031916815260200191505b50838103825286818151815260200191508051906020019080838360005b8381101561035757808201518184015260208101905061033c565b50505050905090810190601f1680156103845780820380516001836020036101000a031916815260200191505b50965050505050505060405180910390f35b600260008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546000819055506080604051908101604052808581526020018481526020013373ffffffffffffffffffffffffffffffffffffffff1681526020018273ffffffffffffffffffffffffffffffffffffffff16815250600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008054815260200190815260200160002060008201518160000190805190602001906104979291906109e8565b5060208201518160010190805190602001906104b49291906109e8565b5060408201518160020160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060608201518160030160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055509050506001600260008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055507fd85f2dd1d35cc84682c46cd9dcb79b9202b8ac0919a8267075f7fd4d6a07903d848484846040518080602001806020018573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001838103835287818151815260200191508051906020019080838360005b83811015610661578082015181840152602081019050610646565b50505050905090810190601f16801561068e5780820380516001836020036101000a031916815260200191505b50838103825286818151815260200191508051906020019080838360005b838110156106c75780820151818401526020810190506106ac565b50505050905090810190601f1680156106f45780820380516001836020036101000a031916815260200191505b50965050505050505060405180910390a150505050565b606080600080600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000878152602001908152602001600020600001600160008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000888152602001908152602001600020600101600160008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600089815260200190815260200160002060020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600160008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008a815260200190815260200160002060030160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16838054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156109345780601f1061090957610100808354040283529160200191610934565b820191906000526020600020905b81548152906001019060200180831161091757829003601f168201915b50505050509350828054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156109d05780601f106109a5576101008083540402835291602001916109d0565b820191906000526020600020905b8154815290600101906020018083116109b357829003601f168201915b50505050509250935093509350935092959194509250565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10610a2957805160ff1916838001178555610a57565b82800160010185558215610a57579182015b82811115610a56578251825591602001919060010190610a3b565b5b509050610a649190610a68565b5090565b610a8a91905b80821115610a86576000816000905550600101610a6e565b5090565b9056fea165627a7a72305820fb0656e456a596e36200132fc6acb6254caebf5de141853c5383534e30cb64c80029",
  "sourceMap": "67:1064:0:-;;;104:1;92:13;;67:1064;8:9:-1;5:2;;;30:1;27;20:12;5:2;67:1064:0;;;;;;;",
  "deployedSourceMap": "67:1064:0:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;447:347;;8:9:-1;5:2;;;30:1;27;20:12;5:2;447:347:0;;;;;;13:3:-1;8;5:12;2:2;;;30:1;27;20:12;2:2;447:347:0;;;;;;;;;;21:11:-1;8;5:28;2:2;;;46:1;43;36:12;2:2;447:347:0;;35:9:-1;28:4;12:14;8:25;5:40;2:2;;;58:1;55;48:12;2:2;447:347:0;;;;;;100:9:-1;95:1;81:12;77:20;67:8;63:35;60:50;39:11;25:12;22:29;11:107;8:2;;;131:1;128;121:12;8:2;447:347:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;30:3:-1;22:6;14;1:33;99:1;93:3;85:6;81:16;74:27;137:4;133:9;126:4;121:3;117:14;113:30;106:37;;169:3;161:6;157:16;147:26;;447:347:0;;;;;;;;;;;;;;;;;21:11:-1;8;5:28;2:2;;;46:1;43;36:12;2:2;447:347:0;;35:9:-1;28:4;12:14;8:25;5:40;2:2;;;58:1;55;48:12;2:2;447:347:0;;;;;;100:9:-1;95:1;81:12;77:20;67:8;63:35;60:50;39:11;25:12;22:29;11:107;8:2;;;131:1;128;121:12;8:2;447:347:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;30:3:-1;22:6;14;1:33;99:1;93:3;85:6;81:16;74:27;137:4;133:9;126:4;121:3;117:14;113:30;106:37;;169:3;161:6;157:16;147:26;;447:347:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;800:326;;8:9:-1;5:2;;;30:1;27;20:12;5:2;800:326:0;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;800:326:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;800:326:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;800:326:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;447:347;574:7;:17;582:8;574:17;;;;;;;;;;;;;;;;567:6;:24;;;;640:51;;;;;;;;;651:10;640:51;;;;662:8;640:51;;;;671:10;640:51;;;;;;682:8;640:51;;;;;602:17;:27;620:8;602:27;;;;;;;;;;;;;;;:35;630:6;;602:35;;;;;;;;;;;:89;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;721:1;702:7;:17;710:8;702:17;;;;;;;;;;;;;;;;:20;;;;;;;;;;;738:46;748:10;759:8;768:6;775:8;738:46;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;738:46:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;738:46:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;447:347;;;;:::o;800:326::-;867:13;881;895:7;903;934:17;:27;952:8;934:27;;;;;;;;;;;;;;;:35;962:6;934:35;;;;;;;;;;;:46;;981:17;:27;999:8;981:27;;;;;;;;;;;;;;;:35;1009:6;981:35;;;;;;;;;;;:44;;1033:17;:27;1051:8;1033:27;;;;;;;;;;;;;;;:35;1061:6;1033:35;;;;;;;;;;;:42;;;;;;;;;;;;1076:17;:27;1094:8;1076:27;;;;;;;;;;;;;;;:35;1104:6;1076:35;;;;;;;;;;;:44;;;;;;;;;;;;926:195;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;800:326;;;;;;;:::o;67:1064::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o",
  "source": "// SPDX-License-Identifier: MIT\npragma solidity >=0.4.21 <=0.8.3;\n\ncontract HashStorage {\n\n\nuint fileId=0;\n\nstruct SharedData{\n    \n    string storedHash;\n    string fileName;\n    address sender;\n    address receiver;\n    \n}\n\nmapping(address => mapping(uint => SharedData))  SharedDataMapping;\n\n\n  event ShareFile(\n    string ipfsValue,\n    string fileName,\n    address sender,\n    address receiver\n  );\n  \n  mapping(address=>uint)  fileKey;\n  \n  function uploadHash(string memory storedHash,string memory fileName,address sender,address receiver) public {\n     \n    fileId=fileKey[receiver]; \n   \n    SharedDataMapping[receiver][fileId] = SharedData(storedHash,fileName,msg.sender,receiver);\n    \n    fileKey[receiver]+=1;\n    \n    emit ShareFile(storedHash,fileName,sender,receiver);\n    \n  }\n  \n  function getFile(uint fileId,address receiver) public view returns(string memory,string memory,address,address){\n      \n      return (SharedDataMapping[receiver][fileId].storedHash,SharedDataMapping[receiver][fileId].fileName,\n      SharedDataMapping[receiver][fileId].sender,SharedDataMapping[receiver][fileId].receiver);\n  }\n  \n}\n",
  "sourcePath": "C:/Users/HP/Desktop/fi-test/contracts/HashStorage.sol",
  "ast": {
    "absolutePath": "/C/Users/HP/Desktop/fi-test/contracts/HashStorage.sol",
    "exportedSymbols": {
      "HashStorage": [
        121
      ]
    },
    "id": 122,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 1,
        "literals": [
          "solidity",
          ">=",
          "0.4",
          ".21",
          "<=",
          "0.8",
          ".3"
        ],
        "nodeType": "PragmaDirective",
        "src": "32:33:0"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 121,
        "linearizedBaseContracts": [
          121
        ],
        "name": "HashStorage",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 4,
            "name": "fileId",
            "nodeType": "VariableDeclaration",
            "scope": 121,
            "src": "92:13:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 2,
              "name": "uint",
              "nodeType": "ElementaryTypeName",
              "src": "92:4:0",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "argumentTypes": null,
              "hexValue": "30",
              "id": 3,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "104:1:0",
              "subdenomination": null,
              "typeDescriptions": {
                "typeIdentifier": "t_rational_0_by_1",
                "typeString": "int_const 0"
              },
              "value": "0"
            },
            "visibility": "internal"
          },
          {
            "canonicalName": "HashStorage.SharedData",
            "id": 13,
            "members": [
              {
                "constant": false,
                "id": 6,
                "name": "storedHash",
                "nodeType": "VariableDeclaration",
                "scope": 13,
                "src": "136:17:0",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_string_storage_ptr",
                  "typeString": "string"
                },
                "typeName": {
                  "id": 5,
                  "name": "string",
                  "nodeType": "ElementaryTypeName",
                  "src": "136:6:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_storage_ptr",
                    "typeString": "string"
                  }
                },
                "value": null,
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 8,
                "name": "fileName",
                "nodeType": "VariableDeclaration",
                "scope": 13,
                "src": "159:15:0",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_string_storage_ptr",
                  "typeString": "string"
                },
                "typeName": {
                  "id": 7,
                  "name": "string",
                  "nodeType": "ElementaryTypeName",
                  "src": "159:6:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_storage_ptr",
                    "typeString": "string"
                  }
                },
                "value": null,
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 10,
                "name": "sender",
                "nodeType": "VariableDeclaration",
                "scope": 13,
                "src": "180:14:0",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                },
                "typeName": {
                  "id": 9,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "180:7:0",
                  "stateMutability": "nonpayable",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  }
                },
                "value": null,
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 12,
                "name": "receiver",
                "nodeType": "VariableDeclaration",
                "scope": 13,
                "src": "200:16:0",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                },
                "typeName": {
                  "id": 11,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "200:7:0",
                  "stateMutability": "nonpayable",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  }
                },
                "value": null,
                "visibility": "internal"
              }
            ],
            "name": "SharedData",
            "nodeType": "StructDefinition",
            "scope": 121,
            "src": "108:116:0",
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 19,
            "name": "SharedDataMapping",
            "nodeType": "VariableDeclaration",
            "scope": 121,
            "src": "226:66:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_uint256_$_t_struct$_SharedData_$13_storage_$_$",
              "typeString": "mapping(address => mapping(uint256 => struct HashStorage.SharedData))"
            },
            "typeName": {
              "id": 18,
              "keyType": {
                "id": 14,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "234:7:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "nodeType": "Mapping",
              "src": "226:47:0",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_uint256_$_t_struct$_SharedData_$13_storage_$_$",
                "typeString": "mapping(address => mapping(uint256 => struct HashStorage.SharedData))"
              },
              "valueType": {
                "id": 17,
                "keyType": {
                  "id": 15,
                  "name": "uint",
                  "nodeType": "ElementaryTypeName",
                  "src": "253:4:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "nodeType": "Mapping",
                "src": "245:27:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_SharedData_$13_storage_$",
                  "typeString": "mapping(uint256 => struct HashStorage.SharedData)"
                },
                "valueType": {
                  "contractScope": null,
                  "id": 16,
                  "name": "SharedData",
                  "nodeType": "UserDefinedTypeName",
                  "referencedDeclaration": 13,
                  "src": "261:10:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_SharedData_$13_storage_ptr",
                    "typeString": "struct HashStorage.SharedData"
                  }
                }
              }
            },
            "value": null,
            "visibility": "internal"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 29,
            "name": "ShareFile",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 28,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 21,
                  "indexed": false,
                  "name": "ipfsValue",
                  "nodeType": "VariableDeclaration",
                  "scope": 29,
                  "src": "319:16:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 20,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "319:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 23,
                  "indexed": false,
                  "name": "fileName",
                  "nodeType": "VariableDeclaration",
                  "scope": 29,
                  "src": "341:15:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 22,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "341:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 25,
                  "indexed": false,
                  "name": "sender",
                  "nodeType": "VariableDeclaration",
                  "scope": 29,
                  "src": "362:14:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 24,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "362:7:0",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 27,
                  "indexed": false,
                  "name": "receiver",
                  "nodeType": "VariableDeclaration",
                  "scope": 29,
                  "src": "382:16:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 26,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "382:7:0",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "313:89:0"
            },
            "src": "298:105:0"
          },
          {
            "constant": false,
            "id": 33,
            "name": "fileKey",
            "nodeType": "VariableDeclaration",
            "scope": 121,
            "src": "409:31:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
              "typeString": "mapping(address => uint256)"
            },
            "typeName": {
              "id": 32,
              "keyType": {
                "id": 30,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "417:7:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "nodeType": "Mapping",
              "src": "409:22:0",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                "typeString": "mapping(address => uint256)"
              },
              "valueType": {
                "id": 31,
                "name": "uint",
                "nodeType": "ElementaryTypeName",
                "src": "426:4:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              }
            },
            "value": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 77,
              "nodeType": "Block",
              "src": "555:239:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 48,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 44,
                      "name": "fileId",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 4,
                      "src": "567:6:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 45,
                        "name": "fileKey",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 33,
                        "src": "574:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                          "typeString": "mapping(address => uint256)"
                        }
                      },
                      "id": 47,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 46,
                        "name": "receiver",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 41,
                        "src": "582:8:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "IndexAccess",
                      "src": "574:17:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "567:24:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 49,
                  "nodeType": "ExpressionStatement",
                  "src": "567:24:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 62,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 50,
                          "name": "SharedDataMapping",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 19,
                          "src": "602:17:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_uint256_$_t_struct$_SharedData_$13_storage_$_$",
                            "typeString": "mapping(address => mapping(uint256 => struct HashStorage.SharedData storage ref))"
                          }
                        },
                        "id": 53,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 51,
                          "name": "receiver",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 41,
                          "src": "620:8:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "602:27:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_SharedData_$13_storage_$",
                          "typeString": "mapping(uint256 => struct HashStorage.SharedData storage ref)"
                        }
                      },
                      "id": 54,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 52,
                        "name": "fileId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4,
                        "src": "630:6:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "602:35:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_SharedData_$13_storage",
                        "typeString": "struct HashStorage.SharedData storage ref"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 56,
                          "name": "storedHash",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 35,
                          "src": "651:10:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string memory"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "id": 57,
                          "name": "fileName",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 37,
                          "src": "662:8:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string memory"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 58,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 173,
                            "src": "671:3:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 59,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "671:10:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "id": 60,
                          "name": "receiver",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 41,
                          "src": "682:8:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string memory"
                          },
                          {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string memory"
                          },
                          {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          },
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        ],
                        "id": 55,
                        "name": "SharedData",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 13,
                        "src": "640:10:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_struct$_SharedData_$13_storage_ptr_$",
                          "typeString": "type(struct HashStorage.SharedData storage pointer)"
                        }
                      },
                      "id": 61,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "structConstructorCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "640:51:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_SharedData_$13_memory",
                        "typeString": "struct HashStorage.SharedData memory"
                      }
                    },
                    "src": "602:89:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_SharedData_$13_storage",
                      "typeString": "struct HashStorage.SharedData storage ref"
                    }
                  },
                  "id": 63,
                  "nodeType": "ExpressionStatement",
                  "src": "602:89:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 68,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 64,
                        "name": "fileKey",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 33,
                        "src": "702:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                          "typeString": "mapping(address => uint256)"
                        }
                      },
                      "id": 66,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 65,
                        "name": "receiver",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 41,
                        "src": "710:8:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "702:17:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "+=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "hexValue": "31",
                      "id": 67,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "721:1:0",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_1_by_1",
                        "typeString": "int_const 1"
                      },
                      "value": "1"
                    },
                    "src": "702:20:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 69,
                  "nodeType": "ExpressionStatement",
                  "src": "702:20:0"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 71,
                        "name": "storedHash",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 35,
                        "src": "748:10:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 72,
                        "name": "fileName",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 37,
                        "src": "759:8:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 73,
                        "name": "sender",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 39,
                        "src": "768:6:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 74,
                        "name": "receiver",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 41,
                        "src": "775:8:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        },
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "id": 70,
                      "name": "ShareFile",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 29,
                      "src": "738:9:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$_t_address_$_t_address_$returns$__$",
                        "typeString": "function (string memory,string memory,address,address)"
                      }
                    },
                    "id": 75,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "738:46:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 76,
                  "nodeType": "EmitStatement",
                  "src": "733:51:0"
                }
              ]
            },
            "documentation": null,
            "id": 78,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "uploadHash",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 42,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 35,
                  "name": "storedHash",
                  "nodeType": "VariableDeclaration",
                  "scope": 78,
                  "src": "467:24:0",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 34,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "467:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 37,
                  "name": "fileName",
                  "nodeType": "VariableDeclaration",
                  "scope": 78,
                  "src": "492:22:0",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 36,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "492:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 39,
                  "name": "sender",
                  "nodeType": "VariableDeclaration",
                  "scope": 78,
                  "src": "515:14:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 38,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "515:7:0",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 41,
                  "name": "receiver",
                  "nodeType": "VariableDeclaration",
                  "scope": 78,
                  "src": "530:16:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 40,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "530:7:0",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "466:81:0"
            },
            "returnParameters": {
              "id": 43,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "555:0:0"
            },
            "scope": 121,
            "src": "447:347:0",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 119,
              "nodeType": "Block",
              "src": "911:215:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "components": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 93,
                              "name": "SharedDataMapping",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 19,
                              "src": "934:17:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_uint256_$_t_struct$_SharedData_$13_storage_$_$",
                                "typeString": "mapping(address => mapping(uint256 => struct HashStorage.SharedData storage ref))"
                              }
                            },
                            "id": 95,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 94,
                              "name": "receiver",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 82,
                              "src": "952:8:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "934:27:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_SharedData_$13_storage_$",
                              "typeString": "mapping(uint256 => struct HashStorage.SharedData storage ref)"
                            }
                          },
                          "id": 97,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 96,
                            "name": "fileId",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 80,
                            "src": "962:6:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "934:35:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_SharedData_$13_storage",
                            "typeString": "struct HashStorage.SharedData storage ref"
                          }
                        },
                        "id": 98,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "storedHash",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 6,
                        "src": "934:46:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_storage",
                          "typeString": "string storage ref"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 99,
                              "name": "SharedDataMapping",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 19,
                              "src": "981:17:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_uint256_$_t_struct$_SharedData_$13_storage_$_$",
                                "typeString": "mapping(address => mapping(uint256 => struct HashStorage.SharedData storage ref))"
                              }
                            },
                            "id": 101,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 100,
                              "name": "receiver",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 82,
                              "src": "999:8:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "981:27:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_SharedData_$13_storage_$",
                              "typeString": "mapping(uint256 => struct HashStorage.SharedData storage ref)"
                            }
                          },
                          "id": 103,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 102,
                            "name": "fileId",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 80,
                            "src": "1009:6:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "981:35:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_SharedData_$13_storage",
                            "typeString": "struct HashStorage.SharedData storage ref"
                          }
                        },
                        "id": 104,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "fileName",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 8,
                        "src": "981:44:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_storage",
                          "typeString": "string storage ref"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 105,
                              "name": "SharedDataMapping",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 19,
                              "src": "1033:17:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_uint256_$_t_struct$_SharedData_$13_storage_$_$",
                                "typeString": "mapping(address => mapping(uint256 => struct HashStorage.SharedData storage ref))"
                              }
                            },
                            "id": 107,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 106,
                              "name": "receiver",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 82,
                              "src": "1051:8:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "1033:27:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_SharedData_$13_storage_$",
                              "typeString": "mapping(uint256 => struct HashStorage.SharedData storage ref)"
                            }
                          },
                          "id": 109,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 108,
                            "name": "fileId",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 80,
                            "src": "1061:6:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "1033:35:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_SharedData_$13_storage",
                            "typeString": "struct HashStorage.SharedData storage ref"
                          }
                        },
                        "id": 110,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 10,
                        "src": "1033:42:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 111,
                              "name": "SharedDataMapping",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 19,
                              "src": "1076:17:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_uint256_$_t_struct$_SharedData_$13_storage_$_$",
                                "typeString": "mapping(address => mapping(uint256 => struct HashStorage.SharedData storage ref))"
                              }
                            },
                            "id": 113,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 112,
                              "name": "receiver",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 82,
                              "src": "1094:8:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "1076:27:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_SharedData_$13_storage_$",
                              "typeString": "mapping(uint256 => struct HashStorage.SharedData storage ref)"
                            }
                          },
                          "id": 115,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 114,
                            "name": "fileId",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 80,
                            "src": "1104:6:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "1076:35:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_SharedData_$13_storage",
                            "typeString": "struct HashStorage.SharedData storage ref"
                          }
                        },
                        "id": 116,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "receiver",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 12,
                        "src": "1076:44:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "id": 117,
                    "isConstant": false,
                    "isInlineArray": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "TupleExpression",
                    "src": "933:188:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_string_storage_$_t_string_storage_$_t_address_$_t_address_$",
                      "typeString": "tuple(string storage ref,string storage ref,address,address)"
                    }
                  },
                  "functionReturnParameters": 92,
                  "id": 118,
                  "nodeType": "Return",
                  "src": "926:195:0"
                }
              ]
            },
            "documentation": null,
            "id": 120,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "getFile",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 83,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 80,
                  "name": "fileId",
                  "nodeType": "VariableDeclaration",
                  "scope": 120,
                  "src": "817:11:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 79,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "817:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 82,
                  "name": "receiver",
                  "nodeType": "VariableDeclaration",
                  "scope": 120,
                  "src": "829:16:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 81,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "829:7:0",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "816:30:0"
            },
            "returnParameters": {
              "id": 92,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 85,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 120,
                  "src": "867:13:0",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 84,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "867:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 87,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 120,
                  "src": "881:13:0",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 86,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "881:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 89,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 120,
                  "src": "895:7:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 88,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "895:7:0",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 91,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 120,
                  "src": "903:7:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 90,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "903:7:0",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "866:45:0"
            },
            "scope": 121,
            "src": "800:326:0",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 122,
        "src": "67:1064:0"
      }
    ],
    "src": "32:1100:0"
  },
  "legacyAST": {
    "absolutePath": "/C/Users/HP/Desktop/fi-test/contracts/HashStorage.sol",
    "exportedSymbols": {
      "HashStorage": [
        121
      ]
    },
    "id": 122,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 1,
        "literals": [
          "solidity",
          ">=",
          "0.4",
          ".21",
          "<=",
          "0.8",
          ".3"
        ],
        "nodeType": "PragmaDirective",
        "src": "32:33:0"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 121,
        "linearizedBaseContracts": [
          121
        ],
        "name": "HashStorage",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 4,
            "name": "fileId",
            "nodeType": "VariableDeclaration",
            "scope": 121,
            "src": "92:13:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 2,
              "name": "uint",
              "nodeType": "ElementaryTypeName",
              "src": "92:4:0",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "argumentTypes": null,
              "hexValue": "30",
              "id": 3,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "104:1:0",
              "subdenomination": null,
              "typeDescriptions": {
                "typeIdentifier": "t_rational_0_by_1",
                "typeString": "int_const 0"
              },
              "value": "0"
            },
            "visibility": "internal"
          },
          {
            "canonicalName": "HashStorage.SharedData",
            "id": 13,
            "members": [
              {
                "constant": false,
                "id": 6,
                "name": "storedHash",
                "nodeType": "VariableDeclaration",
                "scope": 13,
                "src": "136:17:0",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_string_storage_ptr",
                  "typeString": "string"
                },
                "typeName": {
                  "id": 5,
                  "name": "string",
                  "nodeType": "ElementaryTypeName",
                  "src": "136:6:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_storage_ptr",
                    "typeString": "string"
                  }
                },
                "value": null,
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 8,
                "name": "fileName",
                "nodeType": "VariableDeclaration",
                "scope": 13,
                "src": "159:15:0",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_string_storage_ptr",
                  "typeString": "string"
                },
                "typeName": {
                  "id": 7,
                  "name": "string",
                  "nodeType": "ElementaryTypeName",
                  "src": "159:6:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_storage_ptr",
                    "typeString": "string"
                  }
                },
                "value": null,
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 10,
                "name": "sender",
                "nodeType": "VariableDeclaration",
                "scope": 13,
                "src": "180:14:0",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                },
                "typeName": {
                  "id": 9,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "180:7:0",
                  "stateMutability": "nonpayable",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  }
                },
                "value": null,
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 12,
                "name": "receiver",
                "nodeType": "VariableDeclaration",
                "scope": 13,
                "src": "200:16:0",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                },
                "typeName": {
                  "id": 11,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "200:7:0",
                  "stateMutability": "nonpayable",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  }
                },
                "value": null,
                "visibility": "internal"
              }
            ],
            "name": "SharedData",
            "nodeType": "StructDefinition",
            "scope": 121,
            "src": "108:116:0",
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 19,
            "name": "SharedDataMapping",
            "nodeType": "VariableDeclaration",
            "scope": 121,
            "src": "226:66:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_uint256_$_t_struct$_SharedData_$13_storage_$_$",
              "typeString": "mapping(address => mapping(uint256 => struct HashStorage.SharedData))"
            },
            "typeName": {
              "id": 18,
              "keyType": {
                "id": 14,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "234:7:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "nodeType": "Mapping",
              "src": "226:47:0",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_uint256_$_t_struct$_SharedData_$13_storage_$_$",
                "typeString": "mapping(address => mapping(uint256 => struct HashStorage.SharedData))"
              },
              "valueType": {
                "id": 17,
                "keyType": {
                  "id": 15,
                  "name": "uint",
                  "nodeType": "ElementaryTypeName",
                  "src": "253:4:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "nodeType": "Mapping",
                "src": "245:27:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_SharedData_$13_storage_$",
                  "typeString": "mapping(uint256 => struct HashStorage.SharedData)"
                },
                "valueType": {
                  "contractScope": null,
                  "id": 16,
                  "name": "SharedData",
                  "nodeType": "UserDefinedTypeName",
                  "referencedDeclaration": 13,
                  "src": "261:10:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_SharedData_$13_storage_ptr",
                    "typeString": "struct HashStorage.SharedData"
                  }
                }
              }
            },
            "value": null,
            "visibility": "internal"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 29,
            "name": "ShareFile",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 28,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 21,
                  "indexed": false,
                  "name": "ipfsValue",
                  "nodeType": "VariableDeclaration",
                  "scope": 29,
                  "src": "319:16:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 20,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "319:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 23,
                  "indexed": false,
                  "name": "fileName",
                  "nodeType": "VariableDeclaration",
                  "scope": 29,
                  "src": "341:15:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 22,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "341:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 25,
                  "indexed": false,
                  "name": "sender",
                  "nodeType": "VariableDeclaration",
                  "scope": 29,
                  "src": "362:14:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 24,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "362:7:0",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 27,
                  "indexed": false,
                  "name": "receiver",
                  "nodeType": "VariableDeclaration",
                  "scope": 29,
                  "src": "382:16:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 26,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "382:7:0",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "313:89:0"
            },
            "src": "298:105:0"
          },
          {
            "constant": false,
            "id": 33,
            "name": "fileKey",
            "nodeType": "VariableDeclaration",
            "scope": 121,
            "src": "409:31:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
              "typeString": "mapping(address => uint256)"
            },
            "typeName": {
              "id": 32,
              "keyType": {
                "id": 30,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "417:7:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "nodeType": "Mapping",
              "src": "409:22:0",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                "typeString": "mapping(address => uint256)"
              },
              "valueType": {
                "id": 31,
                "name": "uint",
                "nodeType": "ElementaryTypeName",
                "src": "426:4:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              }
            },
            "value": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 77,
              "nodeType": "Block",
              "src": "555:239:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 48,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 44,
                      "name": "fileId",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 4,
                      "src": "567:6:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 45,
                        "name": "fileKey",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 33,
                        "src": "574:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                          "typeString": "mapping(address => uint256)"
                        }
                      },
                      "id": 47,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 46,
                        "name": "receiver",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 41,
                        "src": "582:8:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "IndexAccess",
                      "src": "574:17:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "567:24:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 49,
                  "nodeType": "ExpressionStatement",
                  "src": "567:24:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 62,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 50,
                          "name": "SharedDataMapping",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 19,
                          "src": "602:17:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_uint256_$_t_struct$_SharedData_$13_storage_$_$",
                            "typeString": "mapping(address => mapping(uint256 => struct HashStorage.SharedData storage ref))"
                          }
                        },
                        "id": 53,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 51,
                          "name": "receiver",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 41,
                          "src": "620:8:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "602:27:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_SharedData_$13_storage_$",
                          "typeString": "mapping(uint256 => struct HashStorage.SharedData storage ref)"
                        }
                      },
                      "id": 54,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 52,
                        "name": "fileId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4,
                        "src": "630:6:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "602:35:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_SharedData_$13_storage",
                        "typeString": "struct HashStorage.SharedData storage ref"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 56,
                          "name": "storedHash",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 35,
                          "src": "651:10:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string memory"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "id": 57,
                          "name": "fileName",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 37,
                          "src": "662:8:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string memory"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 58,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 173,
                            "src": "671:3:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 59,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "671:10:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "id": 60,
                          "name": "receiver",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 41,
                          "src": "682:8:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string memory"
                          },
                          {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string memory"
                          },
                          {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          },
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        ],
                        "id": 55,
                        "name": "SharedData",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 13,
                        "src": "640:10:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_struct$_SharedData_$13_storage_ptr_$",
                          "typeString": "type(struct HashStorage.SharedData storage pointer)"
                        }
                      },
                      "id": 61,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "structConstructorCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "640:51:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_SharedData_$13_memory",
                        "typeString": "struct HashStorage.SharedData memory"
                      }
                    },
                    "src": "602:89:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_SharedData_$13_storage",
                      "typeString": "struct HashStorage.SharedData storage ref"
                    }
                  },
                  "id": 63,
                  "nodeType": "ExpressionStatement",
                  "src": "602:89:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 68,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 64,
                        "name": "fileKey",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 33,
                        "src": "702:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                          "typeString": "mapping(address => uint256)"
                        }
                      },
                      "id": 66,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 65,
                        "name": "receiver",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 41,
                        "src": "710:8:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "702:17:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "+=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "hexValue": "31",
                      "id": 67,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "721:1:0",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_1_by_1",
                        "typeString": "int_const 1"
                      },
                      "value": "1"
                    },
                    "src": "702:20:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 69,
                  "nodeType": "ExpressionStatement",
                  "src": "702:20:0"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 71,
                        "name": "storedHash",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 35,
                        "src": "748:10:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 72,
                        "name": "fileName",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 37,
                        "src": "759:8:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 73,
                        "name": "sender",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 39,
                        "src": "768:6:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 74,
                        "name": "receiver",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 41,
                        "src": "775:8:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        },
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "id": 70,
                      "name": "ShareFile",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 29,
                      "src": "738:9:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$_t_address_$_t_address_$returns$__$",
                        "typeString": "function (string memory,string memory,address,address)"
                      }
                    },
                    "id": 75,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "738:46:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 76,
                  "nodeType": "EmitStatement",
                  "src": "733:51:0"
                }
              ]
            },
            "documentation": null,
            "id": 78,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "uploadHash",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 42,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 35,
                  "name": "storedHash",
                  "nodeType": "VariableDeclaration",
                  "scope": 78,
                  "src": "467:24:0",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 34,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "467:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 37,
                  "name": "fileName",
                  "nodeType": "VariableDeclaration",
                  "scope": 78,
                  "src": "492:22:0",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 36,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "492:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 39,
                  "name": "sender",
                  "nodeType": "VariableDeclaration",
                  "scope": 78,
                  "src": "515:14:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 38,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "515:7:0",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 41,
                  "name": "receiver",
                  "nodeType": "VariableDeclaration",
                  "scope": 78,
                  "src": "530:16:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 40,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "530:7:0",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "466:81:0"
            },
            "returnParameters": {
              "id": 43,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "555:0:0"
            },
            "scope": 121,
            "src": "447:347:0",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 119,
              "nodeType": "Block",
              "src": "911:215:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "components": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 93,
                              "name": "SharedDataMapping",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 19,
                              "src": "934:17:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_uint256_$_t_struct$_SharedData_$13_storage_$_$",
                                "typeString": "mapping(address => mapping(uint256 => struct HashStorage.SharedData storage ref))"
                              }
                            },
                            "id": 95,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 94,
                              "name": "receiver",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 82,
                              "src": "952:8:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "934:27:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_SharedData_$13_storage_$",
                              "typeString": "mapping(uint256 => struct HashStorage.SharedData storage ref)"
                            }
                          },
                          "id": 97,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 96,
                            "name": "fileId",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 80,
                            "src": "962:6:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "934:35:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_SharedData_$13_storage",
                            "typeString": "struct HashStorage.SharedData storage ref"
                          }
                        },
                        "id": 98,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "storedHash",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 6,
                        "src": "934:46:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_storage",
                          "typeString": "string storage ref"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 99,
                              "name": "SharedDataMapping",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 19,
                              "src": "981:17:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_uint256_$_t_struct$_SharedData_$13_storage_$_$",
                                "typeString": "mapping(address => mapping(uint256 => struct HashStorage.SharedData storage ref))"
                              }
                            },
                            "id": 101,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 100,
                              "name": "receiver",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 82,
                              "src": "999:8:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "981:27:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_SharedData_$13_storage_$",
                              "typeString": "mapping(uint256 => struct HashStorage.SharedData storage ref)"
                            }
                          },
                          "id": 103,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 102,
                            "name": "fileId",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 80,
                            "src": "1009:6:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "981:35:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_SharedData_$13_storage",
                            "typeString": "struct HashStorage.SharedData storage ref"
                          }
                        },
                        "id": 104,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "fileName",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 8,
                        "src": "981:44:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_storage",
                          "typeString": "string storage ref"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 105,
                              "name": "SharedDataMapping",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 19,
                              "src": "1033:17:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_uint256_$_t_struct$_SharedData_$13_storage_$_$",
                                "typeString": "mapping(address => mapping(uint256 => struct HashStorage.SharedData storage ref))"
                              }
                            },
                            "id": 107,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 106,
                              "name": "receiver",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 82,
                              "src": "1051:8:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "1033:27:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_SharedData_$13_storage_$",
                              "typeString": "mapping(uint256 => struct HashStorage.SharedData storage ref)"
                            }
                          },
                          "id": 109,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 108,
                            "name": "fileId",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 80,
                            "src": "1061:6:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "1033:35:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_SharedData_$13_storage",
                            "typeString": "struct HashStorage.SharedData storage ref"
                          }
                        },
                        "id": 110,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 10,
                        "src": "1033:42:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 111,
                              "name": "SharedDataMapping",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 19,
                              "src": "1076:17:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_uint256_$_t_struct$_SharedData_$13_storage_$_$",
                                "typeString": "mapping(address => mapping(uint256 => struct HashStorage.SharedData storage ref))"
                              }
                            },
                            "id": 113,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 112,
                              "name": "receiver",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 82,
                              "src": "1094:8:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "1076:27:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_SharedData_$13_storage_$",
                              "typeString": "mapping(uint256 => struct HashStorage.SharedData storage ref)"
                            }
                          },
                          "id": 115,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 114,
                            "name": "fileId",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 80,
                            "src": "1104:6:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "1076:35:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_SharedData_$13_storage",
                            "typeString": "struct HashStorage.SharedData storage ref"
                          }
                        },
                        "id": 116,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "receiver",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 12,
                        "src": "1076:44:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "id": 117,
                    "isConstant": false,
                    "isInlineArray": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "TupleExpression",
                    "src": "933:188:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_string_storage_$_t_string_storage_$_t_address_$_t_address_$",
                      "typeString": "tuple(string storage ref,string storage ref,address,address)"
                    }
                  },
                  "functionReturnParameters": 92,
                  "id": 118,
                  "nodeType": "Return",
                  "src": "926:195:0"
                }
              ]
            },
            "documentation": null,
            "id": 120,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "getFile",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 83,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 80,
                  "name": "fileId",
                  "nodeType": "VariableDeclaration",
                  "scope": 120,
                  "src": "817:11:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 79,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "817:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 82,
                  "name": "receiver",
                  "nodeType": "VariableDeclaration",
                  "scope": 120,
                  "src": "829:16:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 81,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "829:7:0",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "816:30:0"
            },
            "returnParameters": {
              "id": 92,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 85,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 120,
                  "src": "867:13:0",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 84,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "867:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 87,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 120,
                  "src": "881:13:0",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 86,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "881:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 89,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 120,
                  "src": "895:7:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 88,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "895:7:0",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 91,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 120,
                  "src": "903:7:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 90,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "903:7:0",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "866:45:0"
            },
            "scope": 121,
            "src": "800:326:0",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 122,
        "src": "67:1064:0"
      }
    ],
    "src": "32:1100:0"
  },
  "compiler": {
    "name": "solc",
    "version": "0.5.0+commit.1d4f565a.Emscripten.clang"
  },
  "networks": {
    "5777": {
      "events": {},
      "links": {},
      "address": "0x6Ca45047ba1733B49C659b93AE3334f0bdbe3447",
      "transactionHash": "0x1fb17c126d549a55f2e6849f53daeb39d6b2389d046fddbfa691bf6579ac6f01"
    }
  },
  "schemaVersion": "3.0.1",
  "updatedAt": "2021-05-03T16:26:35.759Z",
  "devdoc": {
    "methods": {}
  },
  "userdoc": {
    "methods": {}
  }
}
 


window.addEventListener("load",async () => {
  console.log('iwjifjiwjfjefje');
  if(typeof web3 !== 'undefined'){
    web3 = new Web3(web3.currentProvider);
    console.log('Metamask is providing web3 hctib');
    console.log(web3);

    account = await web3.eth.getAccounts();
    console.log(account);

    const networkId = await web3.eth.net.getId();
    console.log(networkId);

    const deployedNetwork = HashStorageContract.networks[networkId];

    console.log(deployedNetwork);

    contract = new web3.eth.Contract(
        HashStorageContract.abi,
        deployedNetwork && deployedNetwork.address,
      );

    console.log('contract hctib',contract);
    
    // const fk = web3.eth.

      console.log();

    contract.methods.getFile(fileKey[msg.sender],msg.sender).call().then(
      (val)=>{
        console.log('board dash hctib',val);
      }
    )
    
  }
});




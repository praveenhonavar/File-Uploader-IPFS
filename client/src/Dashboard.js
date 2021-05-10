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
          "name": "fId",
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
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "receiver",
          "type": "address"
        }
      ],
      "name": "getFileId",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0xd417c9f8"
    }
  ],
  "bytecode": "0x60806040526000805534801561001457600080fd5b50610b72806100246000396000f3fe608060405260043610610057576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff168063d417c9f81461005c578063d89c36e4146100c1578063ea2e4e0e14610260575b600080fd5b34801561006857600080fd5b506100ab6004803603602081101561007f57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610406565b6040518082815260200191505060405180910390f35b3480156100cd57600080fd5b5061025e600480360360808110156100e457600080fd5b810190808035906020019064010000000081111561010157600080fd5b82018360208201111561011357600080fd5b8035906020019184600183028401116401000000008311171561013557600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505091929192908035906020019064010000000081111561019857600080fd5b8201836020820111156101aa57600080fd5b803590602001918460018302840111640100000000831117156101cc57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061044f565b005b34801561026c57600080fd5b506102b96004803603604081101561028357600080fd5b8101908080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506107c4565b6040518080602001806020018573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001838103835287818151815260200191508051906020019080838360005b83811015610361578082015181840152602081019050610346565b50505050905090810190601f16801561038e5780820380516001836020036101000a031916815260200191505b50838103825286818151815260200191508051906020019080838360005b838110156103c75780820151818401526020810190506103ac565b50505050905090810190601f1680156103f45780820380516001836020036101000a031916815260200191505b50965050505050505060405180910390f35b6000600260008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b600260008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546000819055506080604051908101604052808581526020018481526020013373ffffffffffffffffffffffffffffffffffffffff1681526020018273ffffffffffffffffffffffffffffffffffffffff16815250600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000805481526020019081526020016000206000820151816000019080519060200190610550929190610aa1565b50602082015181600101908051906020019061056d929190610aa1565b5060408201518160020160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060608201518160030160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055509050506001600260008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055507fd85f2dd1d35cc84682c46cd9dcb79b9202b8ac0919a8267075f7fd4d6a07903d848484846040518080602001806020018573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001838103835287818151815260200191508051906020019080838360005b8381101561071a5780820151818401526020810190506106ff565b50505050905090810190601f1680156107475780820380516001836020036101000a031916815260200191505b50838103825286818151815260200191508051906020019080838360005b83811015610780578082015181840152602081019050610765565b50505050905090810190601f1680156107ad5780820380516001836020036101000a031916815260200191505b50965050505050505060405180910390a150505050565b606080600080600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000878152602001908152602001600020600001600160008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000888152602001908152602001600020600101600160008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600089815260200190815260200160002060020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600160008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008a815260200190815260200160002060030160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16838054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156109ed5780601f106109c2576101008083540402835291602001916109ed565b820191906000526020600020905b8154815290600101906020018083116109d057829003601f168201915b50505050509350828054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610a895780601f10610a5e57610100808354040283529160200191610a89565b820191906000526020600020905b815481529060010190602001808311610a6c57829003601f168201915b50505050509250935093509350935092959194509250565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10610ae257805160ff1916838001178555610b10565b82800160010185558215610b10579182015b82811115610b0f578251825591602001919060010190610af4565b5b509050610b1d9190610b21565b5090565b610b4391905b80821115610b3f576000816000905550600101610b27565b5090565b9056fea165627a7a72305820955beee552e0dd1805a1af71ee01b612a4248f9f86e2adf343dc6e00ebb1249b0029",
  "deployedBytecode": "0x608060405260043610610057576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff168063d417c9f81461005c578063d89c36e4146100c1578063ea2e4e0e14610260575b600080fd5b34801561006857600080fd5b506100ab6004803603602081101561007f57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610406565b6040518082815260200191505060405180910390f35b3480156100cd57600080fd5b5061025e600480360360808110156100e457600080fd5b810190808035906020019064010000000081111561010157600080fd5b82018360208201111561011357600080fd5b8035906020019184600183028401116401000000008311171561013557600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505091929192908035906020019064010000000081111561019857600080fd5b8201836020820111156101aa57600080fd5b803590602001918460018302840111640100000000831117156101cc57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061044f565b005b34801561026c57600080fd5b506102b96004803603604081101561028357600080fd5b8101908080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506107c4565b6040518080602001806020018573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001838103835287818151815260200191508051906020019080838360005b83811015610361578082015181840152602081019050610346565b50505050905090810190601f16801561038e5780820380516001836020036101000a031916815260200191505b50838103825286818151815260200191508051906020019080838360005b838110156103c75780820151818401526020810190506103ac565b50505050905090810190601f1680156103f45780820380516001836020036101000a031916815260200191505b50965050505050505060405180910390f35b6000600260008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b600260008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546000819055506080604051908101604052808581526020018481526020013373ffffffffffffffffffffffffffffffffffffffff1681526020018273ffffffffffffffffffffffffffffffffffffffff16815250600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000805481526020019081526020016000206000820151816000019080519060200190610550929190610aa1565b50602082015181600101908051906020019061056d929190610aa1565b5060408201518160020160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060608201518160030160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055509050506001600260008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055507fd85f2dd1d35cc84682c46cd9dcb79b9202b8ac0919a8267075f7fd4d6a07903d848484846040518080602001806020018573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001838103835287818151815260200191508051906020019080838360005b8381101561071a5780820151818401526020810190506106ff565b50505050905090810190601f1680156107475780820380516001836020036101000a031916815260200191505b50838103825286818151815260200191508051906020019080838360005b83811015610780578082015181840152602081019050610765565b50505050905090810190601f1680156107ad5780820380516001836020036101000a031916815260200191505b50965050505050505060405180910390a150505050565b606080600080600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000878152602001908152602001600020600001600160008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000888152602001908152602001600020600101600160008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600089815260200190815260200160002060020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600160008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008a815260200190815260200160002060030160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16838054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156109ed5780601f106109c2576101008083540402835291602001916109ed565b820191906000526020600020905b8154815290600101906020018083116109d057829003601f168201915b50505050509350828054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610a895780601f10610a5e57610100808354040283529160200191610a89565b820191906000526020600020905b815481529060010190602001808311610a6c57829003601f168201915b50505050509250935093509350935092959194509250565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10610ae257805160ff1916838001178555610b10565b82800160010185558215610b10579182015b82811115610b0f578251825591602001919060010190610af4565b5b509050610b1d9190610b21565b5090565b610b4391905b80821115610b3f576000816000905550600101610b27565b5090565b9056fea165627a7a72305820955beee552e0dd1805a1af71ee01b612a4248f9f86e2adf343dc6e00ebb1249b0029",
  "sourceMap": "67:1149:0:-;;;104:1;92:13;;67:1149;8:9:-1;5:2;;;30:1;27;20:12;5:2;67:1149:0;;;;;;;",
  "deployedSourceMap": "67:1149:0:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1116:97;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1116:97:0;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;1116:97:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;446:347;;8:9:-1;5:2;;;30:1;27;20:12;5:2;446:347:0;;;;;;13:3:-1;8;5:12;2:2;;;30:1;27;20:12;2:2;446:347:0;;;;;;;;;;21:11:-1;8;5:28;2:2;;;46:1;43;36:12;2:2;446:347:0;;35:9:-1;28:4;12:14;8:25;5:40;2:2;;;58:1;55;48:12;2:2;446:347:0;;;;;;100:9:-1;95:1;81:12;77:20;67:8;63:35;60:50;39:11;25:12;22:29;11:107;8:2;;;131:1;128;121:12;8:2;446:347:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;30:3:-1;22:6;14;1:33;99:1;93:3;85:6;81:16;74:27;137:4;133:9;126:4;121:3;117:14;113:30;106:37;;169:3;161:6;157:16;147:26;;446:347:0;;;;;;;;;;;;;;;;;21:11:-1;8;5:28;2:2;;;46:1;43;36:12;2:2;446:347:0;;35:9:-1;28:4;12:14;8:25;5:40;2:2;;;58:1;55;48:12;2:2;446:347:0;;;;;;100:9:-1;95:1;81:12;77:20;67:8;63:35;60:50;39:11;25:12;22:29;11:107;8:2;;;131:1;128;121:12;8:2;446:347:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;30:3:-1;22:6;14;1:33;99:1;93:3;85:6;81:16;74:27;137:4;133:9;126:4;121:3;117:14;113:30;106:37;;169:3;161:6;157:16;147:26;;446:347:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;799:311;;8:9:-1;5:2;;;30:1;27;20:12;5:2;799:311:0;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;799:311:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;799:311:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;799:311:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1116:97;1173:4;1191:7;:17;1199:8;1191:17;;;;;;;;;;;;;;;;1184:24;;1116:97;;;:::o;446:347::-;573:7;:17;581:8;573:17;;;;;;;;;;;;;;;;566:6;:24;;;;639:51;;;;;;;;;650:10;639:51;;;;661:8;639:51;;;;670:10;639:51;;;;;;681:8;639:51;;;;;601:17;:27;619:8;601:27;;;;;;;;;;;;;;;:35;629:6;;601:35;;;;;;;;;;;:89;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;720:1;701:7;:17;709:8;701:17;;;;;;;;;;;;;;;;:20;;;;;;;;;;;737:46;747:10;758:8;767:6;774:8;737:46;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;737:46:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;737:46:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;446:347;;;;:::o;799:311::-;863:13;877;891:7;899;930:17;:27;948:8;930:27;;;;;;;;;;;;;;;:32;958:3;930:32;;;;;;;;;;;:43;;974:17;:27;992:8;974:27;;;;;;;;;;;;;;;:32;1002:3;974:32;;;;;;;;;;;:41;;1023:17;:27;1041:8;1023:27;;;;;;;;;;;;;;;:32;1051:3;1023:32;;;;;;;;;;;:39;;;;;;;;;;;;1063:17;:27;1081:8;1063:27;;;;;;;;;;;;;;;:32;1091:3;1063:32;;;;;;;;;;;:41;;;;;;;;;;;;922:183;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;799:311;;;;;;;:::o;67:1149::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o",
  "source": "// SPDX-License-Identifier: MIT\npragma solidity >=0.4.21 <=0.8.4;\n\ncontract HashStorage {\n\n\nuint fileId=0;\n\nstruct SharedData{\n    \n    string storedHash;\n    string fileName;\n    address sender;\n    address receiver;\n    \n}\n\nmapping(address => mapping(uint => SharedData))  SharedDataMapping;\n\n\n  event ShareFile(\n    string ipfsValue,\n    string fileName,\n    address sender,\n    address receiver\n  );\n  \n  mapping(address=>uint) fileKey;\n  \n  function uploadHash(string memory storedHash,string memory fileName,address sender,address receiver) public {\n     \n    fileId=fileKey[receiver]; \n   \n    SharedDataMapping[receiver][fileId] = SharedData(storedHash,fileName,msg.sender,receiver);\n    \n    fileKey[receiver]+=1;\n    \n    emit ShareFile(storedHash,fileName,sender,receiver);\n    \n  }\n  \n  function getFile(uint fId,address receiver) public view returns(string memory,string memory,address,address){\n      \n      return (SharedDataMapping[receiver][fId].storedHash,SharedDataMapping[receiver][fId].fileName,\n      SharedDataMapping[receiver][fId].sender,SharedDataMapping[receiver][fId].receiver);\n  }\n  \n  function getFileId(address receiver) public view returns(uint){\n    return fileKey[receiver];\n  }\n\n}\n",
  "sourcePath": "C:/Users/HP/Desktop/fi-test/contracts/HashStorage.sol",
  "ast": {
    "absolutePath": "/C/Users/HP/Desktop/fi-test/contracts/HashStorage.sol",
    "exportedSymbols": {
      "HashStorage": [
        133
      ]
    },
    "id": 134,
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
          ".4"
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
        "id": 133,
        "linearizedBaseContracts": [
          133
        ],
        "name": "HashStorage",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 4,
            "name": "fileId",
            "nodeType": "VariableDeclaration",
            "scope": 133,
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
            "scope": 133,
            "src": "108:116:0",
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 19,
            "name": "SharedDataMapping",
            "nodeType": "VariableDeclaration",
            "scope": 133,
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
            "scope": 133,
            "src": "409:30:0",
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
              "src": "554:239:0",
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
                      "src": "566:6:0",
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
                        "src": "573:7:0",
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
                        "src": "581:8:0",
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
                      "src": "573:17:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "566:24:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 49,
                  "nodeType": "ExpressionStatement",
                  "src": "566:24:0"
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
                          "src": "601:17:0",
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
                          "src": "619:8:0",
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
                        "src": "601:27:0",
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
                        "src": "629:6:0",
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
                      "src": "601:35:0",
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
                          "src": "650:10:0",
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
                          "src": "661:8:0",
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
                            "referencedDeclaration": 185,
                            "src": "670:3:0",
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
                          "src": "670:10:0",
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
                          "src": "681:8:0",
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
                        "src": "639:10:0",
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
                      "src": "639:51:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_SharedData_$13_memory",
                        "typeString": "struct HashStorage.SharedData memory"
                      }
                    },
                    "src": "601:89:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_SharedData_$13_storage",
                      "typeString": "struct HashStorage.SharedData storage ref"
                    }
                  },
                  "id": 63,
                  "nodeType": "ExpressionStatement",
                  "src": "601:89:0"
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
                        "src": "701:7:0",
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
                        "src": "709:8:0",
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
                      "src": "701:17:0",
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
                      "src": "720:1:0",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_1_by_1",
                        "typeString": "int_const 1"
                      },
                      "value": "1"
                    },
                    "src": "701:20:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 69,
                  "nodeType": "ExpressionStatement",
                  "src": "701:20:0"
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
                        "src": "747:10:0",
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
                        "src": "758:8:0",
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
                        "src": "767:6:0",
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
                        "src": "774:8:0",
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
                      "src": "737:9:0",
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
                    "src": "737:46:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 76,
                  "nodeType": "EmitStatement",
                  "src": "732:51:0"
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
                  "src": "466:24:0",
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
                    "src": "466:6:0",
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
                  "src": "491:22:0",
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
                    "src": "491:6:0",
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
                  "src": "514:14:0",
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
                    "src": "514:7:0",
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
                  "src": "529:16:0",
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
                    "src": "529:7:0",
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
              "src": "465:81:0"
            },
            "returnParameters": {
              "id": 43,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "554:0:0"
            },
            "scope": 133,
            "src": "446:347:0",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 119,
              "nodeType": "Block",
              "src": "907:203:0",
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
                              "src": "930:17:0",
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
                              "src": "948:8:0",
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
                            "src": "930:27:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_SharedData_$13_storage_$",
                              "typeString": "mapping(uint256 => struct HashStorage.SharedData storage ref)"
                            }
                          },
                          "id": 97,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 96,
                            "name": "fId",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 80,
                            "src": "958:3:0",
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
                          "src": "930:32:0",
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
                        "src": "930:43:0",
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
                              "src": "974:17:0",
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
                              "src": "992:8:0",
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
                            "src": "974:27:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_SharedData_$13_storage_$",
                              "typeString": "mapping(uint256 => struct HashStorage.SharedData storage ref)"
                            }
                          },
                          "id": 103,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 102,
                            "name": "fId",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 80,
                            "src": "1002:3:0",
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
                          "src": "974:32:0",
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
                        "src": "974:41:0",
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
                              "src": "1023:17:0",
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
                              "src": "1041:8:0",
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
                            "src": "1023:27:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_SharedData_$13_storage_$",
                              "typeString": "mapping(uint256 => struct HashStorage.SharedData storage ref)"
                            }
                          },
                          "id": 109,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 108,
                            "name": "fId",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 80,
                            "src": "1051:3:0",
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
                          "src": "1023:32:0",
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
                        "src": "1023:39:0",
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
                              "src": "1063:17:0",
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
                              "src": "1081:8:0",
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
                            "src": "1063:27:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_SharedData_$13_storage_$",
                              "typeString": "mapping(uint256 => struct HashStorage.SharedData storage ref)"
                            }
                          },
                          "id": 115,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 114,
                            "name": "fId",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 80,
                            "src": "1091:3:0",
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
                          "src": "1063:32:0",
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
                        "src": "1063:41:0",
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
                    "src": "929:176:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_string_storage_$_t_string_storage_$_t_address_$_t_address_$",
                      "typeString": "tuple(string storage ref,string storage ref,address,address)"
                    }
                  },
                  "functionReturnParameters": 92,
                  "id": 118,
                  "nodeType": "Return",
                  "src": "922:183:0"
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
                  "name": "fId",
                  "nodeType": "VariableDeclaration",
                  "scope": 120,
                  "src": "816:8:0",
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
                    "src": "816:4:0",
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
                  "src": "825:16:0",
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
                    "src": "825:7:0",
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
              "src": "815:27:0"
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
                  "src": "863:13:0",
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
                    "src": "863:6:0",
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
                  "src": "877:13:0",
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
                    "src": "877:6:0",
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
                  "src": "891:7:0",
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
                    "src": "891:7:0",
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
                  "src": "899:7:0",
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
                    "src": "899:7:0",
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
              "src": "862:45:0"
            },
            "scope": 133,
            "src": "799:311:0",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 131,
              "nodeType": "Block",
              "src": "1178:35:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "baseExpression": {
                      "argumentTypes": null,
                      "id": 127,
                      "name": "fileKey",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 33,
                      "src": "1191:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                        "typeString": "mapping(address => uint256)"
                      }
                    },
                    "id": 129,
                    "indexExpression": {
                      "argumentTypes": null,
                      "id": 128,
                      "name": "receiver",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 122,
                      "src": "1199:8:0",
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
                    "src": "1191:17:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 126,
                  "id": 130,
                  "nodeType": "Return",
                  "src": "1184:24:0"
                }
              ]
            },
            "documentation": null,
            "id": 132,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "getFileId",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 123,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 122,
                  "name": "receiver",
                  "nodeType": "VariableDeclaration",
                  "scope": 132,
                  "src": "1135:16:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 121,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1135:7:0",
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
              "src": "1134:18:0"
            },
            "returnParameters": {
              "id": 126,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 125,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 132,
                  "src": "1173:4:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 124,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1173:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1172:6:0"
            },
            "scope": 133,
            "src": "1116:97:0",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 134,
        "src": "67:1149:0"
      }
    ],
    "src": "32:1185:0"
  },
  "legacyAST": {
    "absolutePath": "/C/Users/HP/Desktop/fi-test/contracts/HashStorage.sol",
    "exportedSymbols": {
      "HashStorage": [
        133
      ]
    },
    "id": 134,
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
          ".4"
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
        "id": 133,
        "linearizedBaseContracts": [
          133
        ],
        "name": "HashStorage",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 4,
            "name": "fileId",
            "nodeType": "VariableDeclaration",
            "scope": 133,
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
            "scope": 133,
            "src": "108:116:0",
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 19,
            "name": "SharedDataMapping",
            "nodeType": "VariableDeclaration",
            "scope": 133,
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
            "scope": 133,
            "src": "409:30:0",
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
              "src": "554:239:0",
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
                      "src": "566:6:0",
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
                        "src": "573:7:0",
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
                        "src": "581:8:0",
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
                      "src": "573:17:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "566:24:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 49,
                  "nodeType": "ExpressionStatement",
                  "src": "566:24:0"
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
                          "src": "601:17:0",
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
                          "src": "619:8:0",
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
                        "src": "601:27:0",
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
                        "src": "629:6:0",
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
                      "src": "601:35:0",
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
                          "src": "650:10:0",
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
                          "src": "661:8:0",
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
                            "referencedDeclaration": 185,
                            "src": "670:3:0",
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
                          "src": "670:10:0",
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
                          "src": "681:8:0",
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
                        "src": "639:10:0",
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
                      "src": "639:51:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_SharedData_$13_memory",
                        "typeString": "struct HashStorage.SharedData memory"
                      }
                    },
                    "src": "601:89:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_SharedData_$13_storage",
                      "typeString": "struct HashStorage.SharedData storage ref"
                    }
                  },
                  "id": 63,
                  "nodeType": "ExpressionStatement",
                  "src": "601:89:0"
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
                        "src": "701:7:0",
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
                        "src": "709:8:0",
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
                      "src": "701:17:0",
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
                      "src": "720:1:0",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_1_by_1",
                        "typeString": "int_const 1"
                      },
                      "value": "1"
                    },
                    "src": "701:20:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 69,
                  "nodeType": "ExpressionStatement",
                  "src": "701:20:0"
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
                        "src": "747:10:0",
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
                        "src": "758:8:0",
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
                        "src": "767:6:0",
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
                        "src": "774:8:0",
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
                      "src": "737:9:0",
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
                    "src": "737:46:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 76,
                  "nodeType": "EmitStatement",
                  "src": "732:51:0"
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
                  "src": "466:24:0",
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
                    "src": "466:6:0",
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
                  "src": "491:22:0",
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
                    "src": "491:6:0",
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
                  "src": "514:14:0",
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
                    "src": "514:7:0",
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
                  "src": "529:16:0",
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
                    "src": "529:7:0",
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
              "src": "465:81:0"
            },
            "returnParameters": {
              "id": 43,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "554:0:0"
            },
            "scope": 133,
            "src": "446:347:0",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 119,
              "nodeType": "Block",
              "src": "907:203:0",
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
                              "src": "930:17:0",
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
                              "src": "948:8:0",
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
                            "src": "930:27:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_SharedData_$13_storage_$",
                              "typeString": "mapping(uint256 => struct HashStorage.SharedData storage ref)"
                            }
                          },
                          "id": 97,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 96,
                            "name": "fId",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 80,
                            "src": "958:3:0",
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
                          "src": "930:32:0",
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
                        "src": "930:43:0",
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
                              "src": "974:17:0",
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
                              "src": "992:8:0",
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
                            "src": "974:27:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_SharedData_$13_storage_$",
                              "typeString": "mapping(uint256 => struct HashStorage.SharedData storage ref)"
                            }
                          },
                          "id": 103,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 102,
                            "name": "fId",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 80,
                            "src": "1002:3:0",
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
                          "src": "974:32:0",
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
                        "src": "974:41:0",
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
                              "src": "1023:17:0",
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
                              "src": "1041:8:0",
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
                            "src": "1023:27:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_SharedData_$13_storage_$",
                              "typeString": "mapping(uint256 => struct HashStorage.SharedData storage ref)"
                            }
                          },
                          "id": 109,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 108,
                            "name": "fId",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 80,
                            "src": "1051:3:0",
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
                          "src": "1023:32:0",
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
                        "src": "1023:39:0",
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
                              "src": "1063:17:0",
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
                              "src": "1081:8:0",
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
                            "src": "1063:27:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_SharedData_$13_storage_$",
                              "typeString": "mapping(uint256 => struct HashStorage.SharedData storage ref)"
                            }
                          },
                          "id": 115,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 114,
                            "name": "fId",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 80,
                            "src": "1091:3:0",
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
                          "src": "1063:32:0",
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
                        "src": "1063:41:0",
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
                    "src": "929:176:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_string_storage_$_t_string_storage_$_t_address_$_t_address_$",
                      "typeString": "tuple(string storage ref,string storage ref,address,address)"
                    }
                  },
                  "functionReturnParameters": 92,
                  "id": 118,
                  "nodeType": "Return",
                  "src": "922:183:0"
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
                  "name": "fId",
                  "nodeType": "VariableDeclaration",
                  "scope": 120,
                  "src": "816:8:0",
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
                    "src": "816:4:0",
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
                  "src": "825:16:0",
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
                    "src": "825:7:0",
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
              "src": "815:27:0"
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
                  "src": "863:13:0",
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
                    "src": "863:6:0",
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
                  "src": "877:13:0",
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
                    "src": "877:6:0",
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
                  "src": "891:7:0",
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
                    "src": "891:7:0",
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
                  "src": "899:7:0",
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
                    "src": "899:7:0",
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
              "src": "862:45:0"
            },
            "scope": 133,
            "src": "799:311:0",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 131,
              "nodeType": "Block",
              "src": "1178:35:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "baseExpression": {
                      "argumentTypes": null,
                      "id": 127,
                      "name": "fileKey",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 33,
                      "src": "1191:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                        "typeString": "mapping(address => uint256)"
                      }
                    },
                    "id": 129,
                    "indexExpression": {
                      "argumentTypes": null,
                      "id": 128,
                      "name": "receiver",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 122,
                      "src": "1199:8:0",
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
                    "src": "1191:17:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 126,
                  "id": 130,
                  "nodeType": "Return",
                  "src": "1184:24:0"
                }
              ]
            },
            "documentation": null,
            "id": 132,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "getFileId",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 123,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 122,
                  "name": "receiver",
                  "nodeType": "VariableDeclaration",
                  "scope": 132,
                  "src": "1135:16:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 121,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1135:7:0",
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
              "src": "1134:18:0"
            },
            "returnParameters": {
              "id": 126,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 125,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 132,
                  "src": "1173:4:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 124,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1173:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1172:6:0"
            },
            "scope": 133,
            "src": "1116:97:0",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 134,
        "src": "67:1149:0"
      }
    ],
    "src": "32:1185:0"
  },
  "compiler": {
    "name": "solc",
    "version": "0.5.0+commit.1d4f565a.Emscripten.clang"
  },
  "networks": {
    "5777": {
      "events": {},
      "links": {},
      "address": "0x75bcD1f613e1e35201C279e1eFB72a2FC63C3ed5",
      "transactionHash": "0x2d1a2b7d4a5599ed0fa59d151dbfc34e896a74286c5133a1fb67259a310892ef"
    }
  },
  "schemaVersion": "3.0.1",
  "updatedAt": "2021-05-04T06:48:53.231Z",
  "devdoc": {
    "methods": {}
  },
  "userdoc": {
    "methods": {}
  }
}




window.addEventListener("load",async () => {
  var fileId=-1;

  var sharedFiles = document.getElementById("shared-files");


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

    console.log(account[0]);

    contract.methods.getFileId(account[0]).call().then(
      (val)=>{
        var ipfsSite = 'http://ipfs.io/ipfs/';
        fileId=val;
        console.log('board dash hctib',fileId);

        for (let index = 0; index < fileId; index++) {
          // const element = array[index];
          contract.methods.getFile(index,account[0]).call().then((res)=>{
            console.log("hctib",res);

            // sharedFiles.innerHTML+= `<h4>${res[1]} &nbsp&nbsp ${res[2]}</h4> 
            // <a href=${ipfsSite+res[0]}><button>Download</button></a>`;


          // sharedFiles.innerHTML+=
          // `<div style=width:20em;height:5em;margin:20px;background-color:#0d1320>

          // <h6 style=color:#d9d9d9>${res[1]} &nbsp&nbsp ${res[2]}</h6>
            
          // <a href=${ipfsSite+res[0]}><button style=background-color:#00ffa4>Download</button></a>
          
          // </div>`

          sharedFiles.innerHTML+=
         `<div class="courses-container">
          <div class="course">
              <div class="course-preview">
                  <h6>Sender Details</h6>
                  <h3>${res[3]}</h3>

              </div>
              <div class="course-info">
                  
                  <h6>File Name</h6>
                  <h2>${res[1]}</h2>
                  <a href=${ipfsSite+res[0]}>
                  <button class="btn">Download</button>
                  </a>
              </div>
          </div>
      </div>`


          })

          
        }
       
      }
    )

    // console.log('thiss',contract.events.allEvents());

      
    // contract.getPastEvents('ShareFile',{
    //   fromBlock:0,
    //   toBlock:"latest"
    // }).then((val)=>{
    //   console.log(val[0]);
    //   console.log("rereeeeeeeeeee",val[0].returnValues);

    // })
    
  }

});




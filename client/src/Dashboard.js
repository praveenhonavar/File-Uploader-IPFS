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
        },
        {
          "indexed": false,
          "name": "time",
          "type": "string"
        }
      ],
      "name": "ShareFile",
      "type": "event",
      "signature": "0x01351c85acc5bf139767f2267f4a8053ddaf083b71343214be5dce62896f5451"
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
        },
        {
          "name": "time",
          "type": "string"
        }
      ],
      "name": "uploadHash",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0xcfdebdb8"
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
        },
        {
          "name": "",
          "type": "string"
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
  "bytecode": "0x60806040526000805534801561001457600080fd5b50610dfa806100246000396000f3fe608060405260043610610057576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff168063cfdebdb81461005c578063d417c9f814610292578063ea2e4e0e146102f7575b600080fd5b34801561006857600080fd5b50610290600480360360a081101561007f57600080fd5b810190808035906020019064010000000081111561009c57600080fd5b8201836020820111156100ae57600080fd5b803590602001918460018302840111640100000000831117156100d057600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505091929192908035906020019064010000000081111561013357600080fd5b82018360208201111561014557600080fd5b8035906020019184600183028401116401000000008311171561016757600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019064010000000081111561020a57600080fd5b82018360208201111561021c57600080fd5b8035906020019184600183028401116401000000008311171561023e57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290505050610509565b005b34801561029e57600080fd5b506102e1600480360360208110156102b557600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061090f565b6040518082815260200191505060405180910390f35b34801561030357600080fd5b506103506004803603604081101561031a57600080fd5b8101908080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610958565b6040518080602001806020018673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200180602001848103845289818151815260200191508051906020019080838360005b838110156103fc5780820151818401526020810190506103e1565b50505050905090810190601f1680156104295780820380516001836020036101000a031916815260200191505b50848103835288818151815260200191508051906020019080838360005b83811015610462578082015181840152602081019050610447565b50505050905090810190601f16801561048f5780820380516001836020036101000a031916815260200191505b50848103825285818151815260200191508051906020019080838360005b838110156104c85780820151818401526020810190506104ad565b50505050905090810190601f1680156104f55780820380516001836020036101000a031916815260200191505b509850505050505050505060405180910390f35b600260008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205460008190555060a0604051908101604052808681526020018581526020013373ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff16815260200182815250600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000805481526020019081526020016000206000820151816000019080519060200190610610929190610d29565b50602082015181600101908051906020019061062d929190610d29565b5060408201518160020160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060608201518160030160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060808201518160040190805190602001906106d8929190610d29565b509050506001600260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055507f01351c85acc5bf139767f2267f4a8053ddaf083b71343214be5dce62896f545185858585856040518080602001806020018673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200180602001848103845289818151815260200191508051906020019080838360005b838110156107fc5780820151818401526020810190506107e1565b50505050905090810190601f1680156108295780820380516001836020036101000a031916815260200191505b50848103835288818151815260200191508051906020019080838360005b83811015610862578082015181840152602081019050610847565b50505050905090810190601f16801561088f5780820380516001836020036101000a031916815260200191505b50848103825285818151815260200191508051906020019080838360005b838110156108c85780820151818401526020810190506108ad565b50505050905090810190601f1680156108f55780820380516001836020036101000a031916815260200191505b509850505050505050505060405180910390a15050505050565b6000600260008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6060806000806060600160008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000888152602001908152602001600020600001600160008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000898152602001908152602001600020600101600160008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008a815260200190815260200160002060020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600160008a73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008b815260200190815260200160002060030160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600160008b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008c8152602001908152602001600020600401848054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610bd65780601f10610bab57610100808354040283529160200191610bd6565b820191906000526020600020905b815481529060010190602001808311610bb957829003601f168201915b50505050509450838054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610c725780601f10610c4757610100808354040283529160200191610c72565b820191906000526020600020905b815481529060010190602001808311610c5557829003601f168201915b50505050509350808054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610d0e5780601f10610ce357610100808354040283529160200191610d0e565b820191906000526020600020905b815481529060010190602001808311610cf157829003601f168201915b50505050509050945094509450945094509295509295909350565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10610d6a57805160ff1916838001178555610d98565b82800160010185558215610d98579182015b82811115610d97578251825591602001919060010190610d7c565b5b509050610da59190610da9565b5090565b610dcb91905b80821115610dc7576000816000905550600101610daf565b5090565b9056fea165627a7a723058206c81de64f3d0f94d20ebb3615ad0157811272aef631af1ea005f00e8db24b0440029",
  "deployedBytecode": "0x608060405260043610610057576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff168063cfdebdb81461005c578063d417c9f814610292578063ea2e4e0e146102f7575b600080fd5b34801561006857600080fd5b50610290600480360360a081101561007f57600080fd5b810190808035906020019064010000000081111561009c57600080fd5b8201836020820111156100ae57600080fd5b803590602001918460018302840111640100000000831117156100d057600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505091929192908035906020019064010000000081111561013357600080fd5b82018360208201111561014557600080fd5b8035906020019184600183028401116401000000008311171561016757600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019064010000000081111561020a57600080fd5b82018360208201111561021c57600080fd5b8035906020019184600183028401116401000000008311171561023e57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290505050610509565b005b34801561029e57600080fd5b506102e1600480360360208110156102b557600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061090f565b6040518082815260200191505060405180910390f35b34801561030357600080fd5b506103506004803603604081101561031a57600080fd5b8101908080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610958565b6040518080602001806020018673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200180602001848103845289818151815260200191508051906020019080838360005b838110156103fc5780820151818401526020810190506103e1565b50505050905090810190601f1680156104295780820380516001836020036101000a031916815260200191505b50848103835288818151815260200191508051906020019080838360005b83811015610462578082015181840152602081019050610447565b50505050905090810190601f16801561048f5780820380516001836020036101000a031916815260200191505b50848103825285818151815260200191508051906020019080838360005b838110156104c85780820151818401526020810190506104ad565b50505050905090810190601f1680156104f55780820380516001836020036101000a031916815260200191505b509850505050505050505060405180910390f35b600260008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205460008190555060a0604051908101604052808681526020018581526020013373ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff16815260200182815250600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000805481526020019081526020016000206000820151816000019080519060200190610610929190610d29565b50602082015181600101908051906020019061062d929190610d29565b5060408201518160020160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060608201518160030160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060808201518160040190805190602001906106d8929190610d29565b509050506001600260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055507f01351c85acc5bf139767f2267f4a8053ddaf083b71343214be5dce62896f545185858585856040518080602001806020018673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200180602001848103845289818151815260200191508051906020019080838360005b838110156107fc5780820151818401526020810190506107e1565b50505050905090810190601f1680156108295780820380516001836020036101000a031916815260200191505b50848103835288818151815260200191508051906020019080838360005b83811015610862578082015181840152602081019050610847565b50505050905090810190601f16801561088f5780820380516001836020036101000a031916815260200191505b50848103825285818151815260200191508051906020019080838360005b838110156108c85780820151818401526020810190506108ad565b50505050905090810190601f1680156108f55780820380516001836020036101000a031916815260200191505b509850505050505050505060405180910390a15050505050565b6000600260008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6060806000806060600160008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000888152602001908152602001600020600001600160008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000898152602001908152602001600020600101600160008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008a815260200190815260200160002060020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600160008a73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008b815260200190815260200160002060030160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600160008b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008c8152602001908152602001600020600401848054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610bd65780601f10610bab57610100808354040283529160200191610bd6565b820191906000526020600020905b815481529060010190602001808311610bb957829003601f168201915b50505050509450838054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610c725780601f10610c4757610100808354040283529160200191610c72565b820191906000526020600020905b815481529060010190602001808311610c5557829003601f168201915b50505050509350808054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610d0e5780601f10610ce357610100808354040283529160200191610d0e565b820191906000526020600020905b815481529060010190602001808311610cf157829003601f168201915b50505050509050945094509450945094509295509295909350565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10610d6a57805160ff1916838001178555610d98565b82800160010185558215610d98579182015b82811115610d97578251825591602001919060010190610d7c565b5b509050610da59190610da9565b5090565b610dcb91905b80821115610dc7576000816000905550600101610daf565b5090565b9056fea165627a7a723058206c81de64f3d0f94d20ebb3615ad0157811272aef631af1ea005f00e8db24b0440029",
  "sourceMap": "67:1269:0:-;;;104:1;92:13;;67:1269;8:9:-1;5:2;;;30:1;27;20:12;5:2;67:1269:0;;;;;;;",
  "deployedSourceMap": "67:1269:0:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;485:376;;8:9:-1;5:2;;;30:1;27;20:12;5:2;485:376:0;;;;;;13:3:-1;8;5:12;2:2;;;30:1;27;20:12;2:2;485:376:0;;;;;;;;;;21:11:-1;8;5:28;2:2;;;46:1;43;36:12;2:2;485:376:0;;35:9:-1;28:4;12:14;8:25;5:40;2:2;;;58:1;55;48:12;2:2;485:376:0;;;;;;100:9:-1;95:1;81:12;77:20;67:8;63:35;60:50;39:11;25:12;22:29;11:107;8:2;;;131:1;128;121:12;8:2;485:376:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;30:3:-1;22:6;14;1:33;99:1;93:3;85:6;81:16;74:27;137:4;133:9;126:4;121:3;117:14;113:30;106:37;;169:3;161:6;157:16;147:26;;485:376:0;;;;;;;;;;;;;;;;;21:11:-1;8;5:28;2:2;;;46:1;43;36:12;2:2;485:376:0;;35:9:-1;28:4;12:14;8:25;5:40;2:2;;;58:1;55;48:12;2:2;485:376:0;;;;;;100:9:-1;95:1;81:12;77:20;67:8;63:35;60:50;39:11;25:12;22:29;11:107;8:2;;;131:1;128;121:12;8:2;485:376:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;30:3:-1;22:6;14;1:33;99:1;93:3;85:6;81:16;74:27;137:4;133:9;126:4;121:3;117:14;113:30;106:37;;169:3;161:6;157:16;147:26;;485:376:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;21:11:-1;8;5:28;2:2;;;46:1;43;36:12;2:2;485:376:0;;35:9:-1;28:4;12:14;8:25;5:40;2:2;;;58:1;55;48:12;2:2;485:376:0;;;;;;100:9:-1;95:1;81:12;77:20;67:8;63:35;60:50;39:11;25:12;22:29;11:107;8:2;;;131:1;128;121:12;8:2;485:376:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;30:3:-1;22:6;14;1:33;99:1;93:3;85:6;81:16;74:27;137:4;133:9;126:4;121:3;117:14;113:30;106:37;;169:3;161:6;157:16;147:26;;485:376:0;;;;;;;;;;;;;;;;;;1236:97;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1236:97:0;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;1236:97:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;867:363;;8:9:-1;5:2;;;30:1;27;20:12;5:2;867:363:0;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;867:363:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;867:363:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;867:363:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;867:363:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;485:376;631:7;:17;639:8;631:17;;;;;;;;;;;;;;;;624:6;:24;;;;697:56;;;;;;;;;708:10;697:56;;;;719:8;697:56;;;;728:10;697:56;;;;;;739:8;697:56;;;;;;748:4;697:56;;;659:17;:27;677:8;659:27;;;;;;;;;;;;;;;:35;687:6;;659:35;;;;;;;;;;;:94;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;783:1;764:7;:17;772:8;764:17;;;;;;;;;;;;;;;;:20;;;;;;;;;;;800:51;810:10;821:8;830:6;837:8;846:4;800:51;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;800:51:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;800:51:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;800:51:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;485:376;;;;;:::o;1236:97::-;1293:4;1311:7;:17;1319:8;1311:17;;;;;;;;;;;;;;;;1304:24;;1236:97;;;:::o;867:363::-;931:13;945;959:7;967;975:13;1012:17;:27;1030:8;1012:27;;;;;;;;;;;;;;;:32;1040:3;1012:32;;;;;;;;;;;:43;;1056:17;:27;1074:8;1056:27;;;;;;;;;;;;;;;:32;1084:3;1056:32;;;;;;;;;;;:41;;1105:17;:27;1123:8;1105:27;;;;;;;;;;;;;;;:32;1133:3;1105:32;;;;;;;;;;;:39;;;;;;;;;;;;1145:17;:27;1163:8;1145:27;;;;;;;;;;;;;;;:32;1173:3;1145:32;;;;;;;;;;;:41;;;;;;;;;;;;1187:17;:27;1205:8;1187:27;;;;;;;;;;;;;;;:32;1215:3;1187:32;;;;;;;;;;;:37;;1004:221;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;867:363;;;;;;;;:::o;67:1269::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o",
  "source": "// SPDX-License-Identifier: MIT\npragma solidity >=0.4.21 <=0.8.4;\n\ncontract HashStorage {\n\n\nuint fileId=0;\n\nstruct SharedData{\n    \n    string storedHash;\n    string fileName;\n    address sender;\n    address receiver;\n    string time;\n    \n    \n}\n\nmapping(address => mapping(uint => SharedData))  SharedDataMapping;\n\n\n  event ShareFile(\n    string ipfsValue,\n    string fileName,\n    address sender,\n    address receiver,\n    string time\n  );\n  \n  mapping(address=>uint) fileKey;\n  \n  function uploadHash(string memory storedHash,string memory fileName,address sender,address receiver,string memory time) public {\n     \n    fileId=fileKey[receiver]; \n   \n    SharedDataMapping[receiver][fileId] = SharedData(storedHash,fileName,msg.sender,receiver,time);\n    \n    fileKey[receiver]+=1;\n    \n    emit ShareFile(storedHash,fileName,sender,receiver,time);\n    \n  }\n  \n  function getFile(uint fId,address receiver) public view returns(string memory,string memory,address,address,string memory){\n      \n      return (SharedDataMapping[receiver][fId].storedHash,SharedDataMapping[receiver][fId].fileName,\n      SharedDataMapping[receiver][fId].sender,SharedDataMapping[receiver][fId].receiver,SharedDataMapping[receiver][fId].time);\n  }\n  \n  function getFileId(address receiver) public view returns(uint){\n    return fileKey[receiver];\n  }\n\n}\n",
  "sourcePath": "C:/Users/HP/Desktop/fi-test/contracts/HashStorage.sol",
  "ast": {
    "absolutePath": "/C/Users/HP/Desktop/fi-test/contracts/HashStorage.sol",
    "exportedSymbols": {
      "HashStorage": [
        149
      ]
    },
    "id": 150,
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
        "id": 149,
        "linearizedBaseContracts": [
          149
        ],
        "name": "HashStorage",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 4,
            "name": "fileId",
            "nodeType": "VariableDeclaration",
            "scope": 149,
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
            "id": 15,
            "members": [
              {
                "constant": false,
                "id": 6,
                "name": "storedHash",
                "nodeType": "VariableDeclaration",
                "scope": 15,
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
                "scope": 15,
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
                "scope": 15,
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
                "scope": 15,
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
              },
              {
                "constant": false,
                "id": 14,
                "name": "time",
                "nodeType": "VariableDeclaration",
                "scope": 15,
                "src": "222:11:0",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_string_storage_ptr",
                  "typeString": "string"
                },
                "typeName": {
                  "id": 13,
                  "name": "string",
                  "nodeType": "ElementaryTypeName",
                  "src": "222:6:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_storage_ptr",
                    "typeString": "string"
                  }
                },
                "value": null,
                "visibility": "internal"
              }
            ],
            "name": "SharedData",
            "nodeType": "StructDefinition",
            "scope": 149,
            "src": "108:138:0",
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 21,
            "name": "SharedDataMapping",
            "nodeType": "VariableDeclaration",
            "scope": 149,
            "src": "248:66:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_uint256_$_t_struct$_SharedData_$15_storage_$_$",
              "typeString": "mapping(address => mapping(uint256 => struct HashStorage.SharedData))"
            },
            "typeName": {
              "id": 20,
              "keyType": {
                "id": 16,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "256:7:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "nodeType": "Mapping",
              "src": "248:47:0",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_uint256_$_t_struct$_SharedData_$15_storage_$_$",
                "typeString": "mapping(address => mapping(uint256 => struct HashStorage.SharedData))"
              },
              "valueType": {
                "id": 19,
                "keyType": {
                  "id": 17,
                  "name": "uint",
                  "nodeType": "ElementaryTypeName",
                  "src": "275:4:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "nodeType": "Mapping",
                "src": "267:27:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_SharedData_$15_storage_$",
                  "typeString": "mapping(uint256 => struct HashStorage.SharedData)"
                },
                "valueType": {
                  "contractScope": null,
                  "id": 18,
                  "name": "SharedData",
                  "nodeType": "UserDefinedTypeName",
                  "referencedDeclaration": 15,
                  "src": "283:10:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_SharedData_$15_storage_ptr",
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
            "id": 33,
            "name": "ShareFile",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 32,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 23,
                  "indexed": false,
                  "name": "ipfsValue",
                  "nodeType": "VariableDeclaration",
                  "scope": 33,
                  "src": "341:16:0",
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
                  "name": "fileName",
                  "nodeType": "VariableDeclaration",
                  "scope": 33,
                  "src": "363:15:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 24,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "363:6:0",
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
                  "id": 27,
                  "indexed": false,
                  "name": "sender",
                  "nodeType": "VariableDeclaration",
                  "scope": 33,
                  "src": "384:14:0",
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
                    "src": "384:7:0",
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
                  "id": 29,
                  "indexed": false,
                  "name": "receiver",
                  "nodeType": "VariableDeclaration",
                  "scope": 33,
                  "src": "404:16:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 28,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "404:7:0",
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
                  "id": 31,
                  "indexed": false,
                  "name": "time",
                  "nodeType": "VariableDeclaration",
                  "scope": 33,
                  "src": "426:11:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 30,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "426:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "335:106:0"
            },
            "src": "320:122:0"
          },
          {
            "constant": false,
            "id": 37,
            "name": "fileKey",
            "nodeType": "VariableDeclaration",
            "scope": 149,
            "src": "448:30:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
              "typeString": "mapping(address => uint256)"
            },
            "typeName": {
              "id": 36,
              "keyType": {
                "id": 34,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "456:7:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "nodeType": "Mapping",
              "src": "448:22:0",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                "typeString": "mapping(address => uint256)"
              },
              "valueType": {
                "id": 35,
                "name": "uint",
                "nodeType": "ElementaryTypeName",
                "src": "465:4:0",
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
              "id": 85,
              "nodeType": "Block",
              "src": "612:249:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 54,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 50,
                      "name": "fileId",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 4,
                      "src": "624:6:0",
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
                        "id": 51,
                        "name": "fileKey",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 37,
                        "src": "631:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                          "typeString": "mapping(address => uint256)"
                        }
                      },
                      "id": 53,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 52,
                        "name": "receiver",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 45,
                        "src": "639:8:0",
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
                      "src": "631:17:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "624:24:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 55,
                  "nodeType": "ExpressionStatement",
                  "src": "624:24:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 69,
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
                          "id": 56,
                          "name": "SharedDataMapping",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 21,
                          "src": "659:17:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_uint256_$_t_struct$_SharedData_$15_storage_$_$",
                            "typeString": "mapping(address => mapping(uint256 => struct HashStorage.SharedData storage ref))"
                          }
                        },
                        "id": 59,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 57,
                          "name": "receiver",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 45,
                          "src": "677:8:0",
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
                        "src": "659:27:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_SharedData_$15_storage_$",
                          "typeString": "mapping(uint256 => struct HashStorage.SharedData storage ref)"
                        }
                      },
                      "id": 60,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 58,
                        "name": "fileId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4,
                        "src": "687:6:0",
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
                      "src": "659:35:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_SharedData_$15_storage",
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
                          "id": 62,
                          "name": "storedHash",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 39,
                          "src": "708:10:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string memory"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "id": 63,
                          "name": "fileName",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 41,
                          "src": "719:8:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string memory"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 64,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 201,
                            "src": "728:3:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 65,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "728:10:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "id": 66,
                          "name": "receiver",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 45,
                          "src": "739:8:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "id": 67,
                          "name": "time",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 47,
                          "src": "748:4:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string memory"
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
                          },
                          {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string memory"
                          }
                        ],
                        "id": 61,
                        "name": "SharedData",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 15,
                        "src": "697:10:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_struct$_SharedData_$15_storage_ptr_$",
                          "typeString": "type(struct HashStorage.SharedData storage pointer)"
                        }
                      },
                      "id": 68,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "structConstructorCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "697:56:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_SharedData_$15_memory",
                        "typeString": "struct HashStorage.SharedData memory"
                      }
                    },
                    "src": "659:94:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_SharedData_$15_storage",
                      "typeString": "struct HashStorage.SharedData storage ref"
                    }
                  },
                  "id": 70,
                  "nodeType": "ExpressionStatement",
                  "src": "659:94:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 75,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 71,
                        "name": "fileKey",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 37,
                        "src": "764:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                          "typeString": "mapping(address => uint256)"
                        }
                      },
                      "id": 73,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 72,
                        "name": "receiver",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 45,
                        "src": "772:8:0",
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
                      "src": "764:17:0",
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
                      "id": 74,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "783:1:0",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_1_by_1",
                        "typeString": "int_const 1"
                      },
                      "value": "1"
                    },
                    "src": "764:20:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 76,
                  "nodeType": "ExpressionStatement",
                  "src": "764:20:0"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 78,
                        "name": "storedHash",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 39,
                        "src": "810:10:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 79,
                        "name": "fileName",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 41,
                        "src": "821:8:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 80,
                        "name": "sender",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 43,
                        "src": "830:6:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 81,
                        "name": "receiver",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 45,
                        "src": "837:8:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 82,
                        "name": "time",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 47,
                        "src": "846:4:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
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
                        },
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      ],
                      "id": 77,
                      "name": "ShareFile",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 33,
                      "src": "800:9:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$_t_address_$_t_address_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (string memory,string memory,address,address,string memory)"
                      }
                    },
                    "id": 83,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "800:51:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 84,
                  "nodeType": "EmitStatement",
                  "src": "795:56:0"
                }
              ]
            },
            "documentation": null,
            "id": 86,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "uploadHash",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 48,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 39,
                  "name": "storedHash",
                  "nodeType": "VariableDeclaration",
                  "scope": 86,
                  "src": "505:24:0",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 38,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "505:6:0",
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
                  "id": 41,
                  "name": "fileName",
                  "nodeType": "VariableDeclaration",
                  "scope": 86,
                  "src": "530:22:0",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 40,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "530:6:0",
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
                  "id": 43,
                  "name": "sender",
                  "nodeType": "VariableDeclaration",
                  "scope": 86,
                  "src": "553:14:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 42,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "553:7:0",
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
                  "id": 45,
                  "name": "receiver",
                  "nodeType": "VariableDeclaration",
                  "scope": 86,
                  "src": "568:16:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 44,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "568:7:0",
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
                  "id": 47,
                  "name": "time",
                  "nodeType": "VariableDeclaration",
                  "scope": 86,
                  "src": "585:18:0",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 46,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "585:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "504:100:0"
            },
            "returnParameters": {
              "id": 49,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "612:0:0"
            },
            "scope": 149,
            "src": "485:376:0",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 135,
              "nodeType": "Block",
              "src": "989:241:0",
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
                              "id": 103,
                              "name": "SharedDataMapping",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 21,
                              "src": "1012:17:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_uint256_$_t_struct$_SharedData_$15_storage_$_$",
                                "typeString": "mapping(address => mapping(uint256 => struct HashStorage.SharedData storage ref))"
                              }
                            },
                            "id": 105,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 104,
                              "name": "receiver",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 90,
                              "src": "1030:8:0",
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
                            "src": "1012:27:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_SharedData_$15_storage_$",
                              "typeString": "mapping(uint256 => struct HashStorage.SharedData storage ref)"
                            }
                          },
                          "id": 107,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 106,
                            "name": "fId",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 88,
                            "src": "1040:3:0",
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
                          "src": "1012:32:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_SharedData_$15_storage",
                            "typeString": "struct HashStorage.SharedData storage ref"
                          }
                        },
                        "id": 108,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "storedHash",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 6,
                        "src": "1012:43:0",
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
                              "id": 109,
                              "name": "SharedDataMapping",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 21,
                              "src": "1056:17:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_uint256_$_t_struct$_SharedData_$15_storage_$_$",
                                "typeString": "mapping(address => mapping(uint256 => struct HashStorage.SharedData storage ref))"
                              }
                            },
                            "id": 111,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 110,
                              "name": "receiver",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 90,
                              "src": "1074:8:0",
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
                            "src": "1056:27:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_SharedData_$15_storage_$",
                              "typeString": "mapping(uint256 => struct HashStorage.SharedData storage ref)"
                            }
                          },
                          "id": 113,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 112,
                            "name": "fId",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 88,
                            "src": "1084:3:0",
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
                          "src": "1056:32:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_SharedData_$15_storage",
                            "typeString": "struct HashStorage.SharedData storage ref"
                          }
                        },
                        "id": 114,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "fileName",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 8,
                        "src": "1056:41:0",
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
                              "id": 115,
                              "name": "SharedDataMapping",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 21,
                              "src": "1105:17:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_uint256_$_t_struct$_SharedData_$15_storage_$_$",
                                "typeString": "mapping(address => mapping(uint256 => struct HashStorage.SharedData storage ref))"
                              }
                            },
                            "id": 117,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 116,
                              "name": "receiver",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 90,
                              "src": "1123:8:0",
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
                            "src": "1105:27:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_SharedData_$15_storage_$",
                              "typeString": "mapping(uint256 => struct HashStorage.SharedData storage ref)"
                            }
                          },
                          "id": 119,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 118,
                            "name": "fId",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 88,
                            "src": "1133:3:0",
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
                          "src": "1105:32:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_SharedData_$15_storage",
                            "typeString": "struct HashStorage.SharedData storage ref"
                          }
                        },
                        "id": 120,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 10,
                        "src": "1105:39:0",
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
                              "id": 121,
                              "name": "SharedDataMapping",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 21,
                              "src": "1145:17:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_uint256_$_t_struct$_SharedData_$15_storage_$_$",
                                "typeString": "mapping(address => mapping(uint256 => struct HashStorage.SharedData storage ref))"
                              }
                            },
                            "id": 123,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 122,
                              "name": "receiver",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 90,
                              "src": "1163:8:0",
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
                            "src": "1145:27:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_SharedData_$15_storage_$",
                              "typeString": "mapping(uint256 => struct HashStorage.SharedData storage ref)"
                            }
                          },
                          "id": 125,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 124,
                            "name": "fId",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 88,
                            "src": "1173:3:0",
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
                          "src": "1145:32:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_SharedData_$15_storage",
                            "typeString": "struct HashStorage.SharedData storage ref"
                          }
                        },
                        "id": 126,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "receiver",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 12,
                        "src": "1145:41:0",
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
                              "id": 127,
                              "name": "SharedDataMapping",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 21,
                              "src": "1187:17:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_uint256_$_t_struct$_SharedData_$15_storage_$_$",
                                "typeString": "mapping(address => mapping(uint256 => struct HashStorage.SharedData storage ref))"
                              }
                            },
                            "id": 129,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 128,
                              "name": "receiver",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 90,
                              "src": "1205:8:0",
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
                            "src": "1187:27:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_SharedData_$15_storage_$",
                              "typeString": "mapping(uint256 => struct HashStorage.SharedData storage ref)"
                            }
                          },
                          "id": 131,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 130,
                            "name": "fId",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 88,
                            "src": "1215:3:0",
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
                          "src": "1187:32:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_SharedData_$15_storage",
                            "typeString": "struct HashStorage.SharedData storage ref"
                          }
                        },
                        "id": 132,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "time",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 14,
                        "src": "1187:37:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_storage",
                          "typeString": "string storage ref"
                        }
                      }
                    ],
                    "id": 133,
                    "isConstant": false,
                    "isInlineArray": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "TupleExpression",
                    "src": "1011:214:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_string_storage_$_t_string_storage_$_t_address_$_t_address_$_t_string_storage_$",
                      "typeString": "tuple(string storage ref,string storage ref,address,address,string storage ref)"
                    }
                  },
                  "functionReturnParameters": 102,
                  "id": 134,
                  "nodeType": "Return",
                  "src": "1004:221:0"
                }
              ]
            },
            "documentation": null,
            "id": 136,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "getFile",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 91,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 88,
                  "name": "fId",
                  "nodeType": "VariableDeclaration",
                  "scope": 136,
                  "src": "884:8:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 87,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "884:4:0",
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
                  "id": 90,
                  "name": "receiver",
                  "nodeType": "VariableDeclaration",
                  "scope": 136,
                  "src": "893:16:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 89,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "893:7:0",
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
              "src": "883:27:0"
            },
            "returnParameters": {
              "id": 102,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 93,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 136,
                  "src": "931:13:0",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 92,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "931:6:0",
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
                  "id": 95,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 136,
                  "src": "945:13:0",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 94,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "945:6:0",
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
                  "id": 97,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 136,
                  "src": "959:7:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 96,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "959:7:0",
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
                  "id": 99,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 136,
                  "src": "967:7:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 98,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "967:7:0",
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
                  "id": 101,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 136,
                  "src": "975:13:0",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 100,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "975:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "930:59:0"
            },
            "scope": 149,
            "src": "867:363:0",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 147,
              "nodeType": "Block",
              "src": "1298:35:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "baseExpression": {
                      "argumentTypes": null,
                      "id": 143,
                      "name": "fileKey",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 37,
                      "src": "1311:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                        "typeString": "mapping(address => uint256)"
                      }
                    },
                    "id": 145,
                    "indexExpression": {
                      "argumentTypes": null,
                      "id": 144,
                      "name": "receiver",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 138,
                      "src": "1319:8:0",
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
                    "src": "1311:17:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 142,
                  "id": 146,
                  "nodeType": "Return",
                  "src": "1304:24:0"
                }
              ]
            },
            "documentation": null,
            "id": 148,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "getFileId",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 139,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 138,
                  "name": "receiver",
                  "nodeType": "VariableDeclaration",
                  "scope": 148,
                  "src": "1255:16:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 137,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1255:7:0",
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
              "src": "1254:18:0"
            },
            "returnParameters": {
              "id": 142,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 141,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 148,
                  "src": "1293:4:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 140,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1293:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1292:6:0"
            },
            "scope": 149,
            "src": "1236:97:0",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 150,
        "src": "67:1269:0"
      }
    ],
    "src": "32:1305:0"
  },
  "legacyAST": {
    "absolutePath": "/C/Users/HP/Desktop/fi-test/contracts/HashStorage.sol",
    "exportedSymbols": {
      "HashStorage": [
        149
      ]
    },
    "id": 150,
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
        "id": 149,
        "linearizedBaseContracts": [
          149
        ],
        "name": "HashStorage",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 4,
            "name": "fileId",
            "nodeType": "VariableDeclaration",
            "scope": 149,
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
            "id": 15,
            "members": [
              {
                "constant": false,
                "id": 6,
                "name": "storedHash",
                "nodeType": "VariableDeclaration",
                "scope": 15,
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
                "scope": 15,
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
                "scope": 15,
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
                "scope": 15,
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
              },
              {
                "constant": false,
                "id": 14,
                "name": "time",
                "nodeType": "VariableDeclaration",
                "scope": 15,
                "src": "222:11:0",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_string_storage_ptr",
                  "typeString": "string"
                },
                "typeName": {
                  "id": 13,
                  "name": "string",
                  "nodeType": "ElementaryTypeName",
                  "src": "222:6:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_storage_ptr",
                    "typeString": "string"
                  }
                },
                "value": null,
                "visibility": "internal"
              }
            ],
            "name": "SharedData",
            "nodeType": "StructDefinition",
            "scope": 149,
            "src": "108:138:0",
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 21,
            "name": "SharedDataMapping",
            "nodeType": "VariableDeclaration",
            "scope": 149,
            "src": "248:66:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_uint256_$_t_struct$_SharedData_$15_storage_$_$",
              "typeString": "mapping(address => mapping(uint256 => struct HashStorage.SharedData))"
            },
            "typeName": {
              "id": 20,
              "keyType": {
                "id": 16,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "256:7:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "nodeType": "Mapping",
              "src": "248:47:0",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_uint256_$_t_struct$_SharedData_$15_storage_$_$",
                "typeString": "mapping(address => mapping(uint256 => struct HashStorage.SharedData))"
              },
              "valueType": {
                "id": 19,
                "keyType": {
                  "id": 17,
                  "name": "uint",
                  "nodeType": "ElementaryTypeName",
                  "src": "275:4:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "nodeType": "Mapping",
                "src": "267:27:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_SharedData_$15_storage_$",
                  "typeString": "mapping(uint256 => struct HashStorage.SharedData)"
                },
                "valueType": {
                  "contractScope": null,
                  "id": 18,
                  "name": "SharedData",
                  "nodeType": "UserDefinedTypeName",
                  "referencedDeclaration": 15,
                  "src": "283:10:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_SharedData_$15_storage_ptr",
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
            "id": 33,
            "name": "ShareFile",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 32,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 23,
                  "indexed": false,
                  "name": "ipfsValue",
                  "nodeType": "VariableDeclaration",
                  "scope": 33,
                  "src": "341:16:0",
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
                  "name": "fileName",
                  "nodeType": "VariableDeclaration",
                  "scope": 33,
                  "src": "363:15:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 24,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "363:6:0",
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
                  "id": 27,
                  "indexed": false,
                  "name": "sender",
                  "nodeType": "VariableDeclaration",
                  "scope": 33,
                  "src": "384:14:0",
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
                    "src": "384:7:0",
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
                  "id": 29,
                  "indexed": false,
                  "name": "receiver",
                  "nodeType": "VariableDeclaration",
                  "scope": 33,
                  "src": "404:16:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 28,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "404:7:0",
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
                  "id": 31,
                  "indexed": false,
                  "name": "time",
                  "nodeType": "VariableDeclaration",
                  "scope": 33,
                  "src": "426:11:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 30,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "426:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "335:106:0"
            },
            "src": "320:122:0"
          },
          {
            "constant": false,
            "id": 37,
            "name": "fileKey",
            "nodeType": "VariableDeclaration",
            "scope": 149,
            "src": "448:30:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
              "typeString": "mapping(address => uint256)"
            },
            "typeName": {
              "id": 36,
              "keyType": {
                "id": 34,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "456:7:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "nodeType": "Mapping",
              "src": "448:22:0",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                "typeString": "mapping(address => uint256)"
              },
              "valueType": {
                "id": 35,
                "name": "uint",
                "nodeType": "ElementaryTypeName",
                "src": "465:4:0",
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
              "id": 85,
              "nodeType": "Block",
              "src": "612:249:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 54,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 50,
                      "name": "fileId",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 4,
                      "src": "624:6:0",
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
                        "id": 51,
                        "name": "fileKey",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 37,
                        "src": "631:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                          "typeString": "mapping(address => uint256)"
                        }
                      },
                      "id": 53,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 52,
                        "name": "receiver",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 45,
                        "src": "639:8:0",
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
                      "src": "631:17:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "624:24:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 55,
                  "nodeType": "ExpressionStatement",
                  "src": "624:24:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 69,
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
                          "id": 56,
                          "name": "SharedDataMapping",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 21,
                          "src": "659:17:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_uint256_$_t_struct$_SharedData_$15_storage_$_$",
                            "typeString": "mapping(address => mapping(uint256 => struct HashStorage.SharedData storage ref))"
                          }
                        },
                        "id": 59,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 57,
                          "name": "receiver",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 45,
                          "src": "677:8:0",
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
                        "src": "659:27:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_SharedData_$15_storage_$",
                          "typeString": "mapping(uint256 => struct HashStorage.SharedData storage ref)"
                        }
                      },
                      "id": 60,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 58,
                        "name": "fileId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4,
                        "src": "687:6:0",
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
                      "src": "659:35:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_SharedData_$15_storage",
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
                          "id": 62,
                          "name": "storedHash",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 39,
                          "src": "708:10:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string memory"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "id": 63,
                          "name": "fileName",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 41,
                          "src": "719:8:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string memory"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 64,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 201,
                            "src": "728:3:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 65,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "728:10:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "id": 66,
                          "name": "receiver",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 45,
                          "src": "739:8:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "id": 67,
                          "name": "time",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 47,
                          "src": "748:4:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string memory"
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
                          },
                          {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string memory"
                          }
                        ],
                        "id": 61,
                        "name": "SharedData",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 15,
                        "src": "697:10:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_struct$_SharedData_$15_storage_ptr_$",
                          "typeString": "type(struct HashStorage.SharedData storage pointer)"
                        }
                      },
                      "id": 68,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "structConstructorCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "697:56:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_SharedData_$15_memory",
                        "typeString": "struct HashStorage.SharedData memory"
                      }
                    },
                    "src": "659:94:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_SharedData_$15_storage",
                      "typeString": "struct HashStorage.SharedData storage ref"
                    }
                  },
                  "id": 70,
                  "nodeType": "ExpressionStatement",
                  "src": "659:94:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 75,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 71,
                        "name": "fileKey",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 37,
                        "src": "764:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                          "typeString": "mapping(address => uint256)"
                        }
                      },
                      "id": 73,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 72,
                        "name": "receiver",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 45,
                        "src": "772:8:0",
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
                      "src": "764:17:0",
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
                      "id": 74,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "783:1:0",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_1_by_1",
                        "typeString": "int_const 1"
                      },
                      "value": "1"
                    },
                    "src": "764:20:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 76,
                  "nodeType": "ExpressionStatement",
                  "src": "764:20:0"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 78,
                        "name": "storedHash",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 39,
                        "src": "810:10:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 79,
                        "name": "fileName",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 41,
                        "src": "821:8:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 80,
                        "name": "sender",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 43,
                        "src": "830:6:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 81,
                        "name": "receiver",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 45,
                        "src": "837:8:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 82,
                        "name": "time",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 47,
                        "src": "846:4:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
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
                        },
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      ],
                      "id": 77,
                      "name": "ShareFile",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 33,
                      "src": "800:9:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$_t_address_$_t_address_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (string memory,string memory,address,address,string memory)"
                      }
                    },
                    "id": 83,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "800:51:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 84,
                  "nodeType": "EmitStatement",
                  "src": "795:56:0"
                }
              ]
            },
            "documentation": null,
            "id": 86,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "uploadHash",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 48,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 39,
                  "name": "storedHash",
                  "nodeType": "VariableDeclaration",
                  "scope": 86,
                  "src": "505:24:0",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 38,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "505:6:0",
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
                  "id": 41,
                  "name": "fileName",
                  "nodeType": "VariableDeclaration",
                  "scope": 86,
                  "src": "530:22:0",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 40,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "530:6:0",
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
                  "id": 43,
                  "name": "sender",
                  "nodeType": "VariableDeclaration",
                  "scope": 86,
                  "src": "553:14:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 42,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "553:7:0",
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
                  "id": 45,
                  "name": "receiver",
                  "nodeType": "VariableDeclaration",
                  "scope": 86,
                  "src": "568:16:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 44,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "568:7:0",
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
                  "id": 47,
                  "name": "time",
                  "nodeType": "VariableDeclaration",
                  "scope": 86,
                  "src": "585:18:0",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 46,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "585:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "504:100:0"
            },
            "returnParameters": {
              "id": 49,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "612:0:0"
            },
            "scope": 149,
            "src": "485:376:0",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 135,
              "nodeType": "Block",
              "src": "989:241:0",
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
                              "id": 103,
                              "name": "SharedDataMapping",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 21,
                              "src": "1012:17:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_uint256_$_t_struct$_SharedData_$15_storage_$_$",
                                "typeString": "mapping(address => mapping(uint256 => struct HashStorage.SharedData storage ref))"
                              }
                            },
                            "id": 105,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 104,
                              "name": "receiver",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 90,
                              "src": "1030:8:0",
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
                            "src": "1012:27:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_SharedData_$15_storage_$",
                              "typeString": "mapping(uint256 => struct HashStorage.SharedData storage ref)"
                            }
                          },
                          "id": 107,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 106,
                            "name": "fId",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 88,
                            "src": "1040:3:0",
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
                          "src": "1012:32:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_SharedData_$15_storage",
                            "typeString": "struct HashStorage.SharedData storage ref"
                          }
                        },
                        "id": 108,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "storedHash",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 6,
                        "src": "1012:43:0",
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
                              "id": 109,
                              "name": "SharedDataMapping",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 21,
                              "src": "1056:17:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_uint256_$_t_struct$_SharedData_$15_storage_$_$",
                                "typeString": "mapping(address => mapping(uint256 => struct HashStorage.SharedData storage ref))"
                              }
                            },
                            "id": 111,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 110,
                              "name": "receiver",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 90,
                              "src": "1074:8:0",
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
                            "src": "1056:27:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_SharedData_$15_storage_$",
                              "typeString": "mapping(uint256 => struct HashStorage.SharedData storage ref)"
                            }
                          },
                          "id": 113,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 112,
                            "name": "fId",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 88,
                            "src": "1084:3:0",
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
                          "src": "1056:32:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_SharedData_$15_storage",
                            "typeString": "struct HashStorage.SharedData storage ref"
                          }
                        },
                        "id": 114,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "fileName",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 8,
                        "src": "1056:41:0",
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
                              "id": 115,
                              "name": "SharedDataMapping",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 21,
                              "src": "1105:17:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_uint256_$_t_struct$_SharedData_$15_storage_$_$",
                                "typeString": "mapping(address => mapping(uint256 => struct HashStorage.SharedData storage ref))"
                              }
                            },
                            "id": 117,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 116,
                              "name": "receiver",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 90,
                              "src": "1123:8:0",
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
                            "src": "1105:27:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_SharedData_$15_storage_$",
                              "typeString": "mapping(uint256 => struct HashStorage.SharedData storage ref)"
                            }
                          },
                          "id": 119,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 118,
                            "name": "fId",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 88,
                            "src": "1133:3:0",
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
                          "src": "1105:32:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_SharedData_$15_storage",
                            "typeString": "struct HashStorage.SharedData storage ref"
                          }
                        },
                        "id": 120,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 10,
                        "src": "1105:39:0",
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
                              "id": 121,
                              "name": "SharedDataMapping",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 21,
                              "src": "1145:17:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_uint256_$_t_struct$_SharedData_$15_storage_$_$",
                                "typeString": "mapping(address => mapping(uint256 => struct HashStorage.SharedData storage ref))"
                              }
                            },
                            "id": 123,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 122,
                              "name": "receiver",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 90,
                              "src": "1163:8:0",
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
                            "src": "1145:27:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_SharedData_$15_storage_$",
                              "typeString": "mapping(uint256 => struct HashStorage.SharedData storage ref)"
                            }
                          },
                          "id": 125,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 124,
                            "name": "fId",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 88,
                            "src": "1173:3:0",
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
                          "src": "1145:32:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_SharedData_$15_storage",
                            "typeString": "struct HashStorage.SharedData storage ref"
                          }
                        },
                        "id": 126,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "receiver",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 12,
                        "src": "1145:41:0",
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
                              "id": 127,
                              "name": "SharedDataMapping",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 21,
                              "src": "1187:17:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_uint256_$_t_struct$_SharedData_$15_storage_$_$",
                                "typeString": "mapping(address => mapping(uint256 => struct HashStorage.SharedData storage ref))"
                              }
                            },
                            "id": 129,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 128,
                              "name": "receiver",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 90,
                              "src": "1205:8:0",
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
                            "src": "1187:27:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_SharedData_$15_storage_$",
                              "typeString": "mapping(uint256 => struct HashStorage.SharedData storage ref)"
                            }
                          },
                          "id": 131,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 130,
                            "name": "fId",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 88,
                            "src": "1215:3:0",
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
                          "src": "1187:32:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_SharedData_$15_storage",
                            "typeString": "struct HashStorage.SharedData storage ref"
                          }
                        },
                        "id": 132,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "time",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 14,
                        "src": "1187:37:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_storage",
                          "typeString": "string storage ref"
                        }
                      }
                    ],
                    "id": 133,
                    "isConstant": false,
                    "isInlineArray": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "TupleExpression",
                    "src": "1011:214:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_string_storage_$_t_string_storage_$_t_address_$_t_address_$_t_string_storage_$",
                      "typeString": "tuple(string storage ref,string storage ref,address,address,string storage ref)"
                    }
                  },
                  "functionReturnParameters": 102,
                  "id": 134,
                  "nodeType": "Return",
                  "src": "1004:221:0"
                }
              ]
            },
            "documentation": null,
            "id": 136,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "getFile",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 91,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 88,
                  "name": "fId",
                  "nodeType": "VariableDeclaration",
                  "scope": 136,
                  "src": "884:8:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 87,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "884:4:0",
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
                  "id": 90,
                  "name": "receiver",
                  "nodeType": "VariableDeclaration",
                  "scope": 136,
                  "src": "893:16:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 89,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "893:7:0",
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
              "src": "883:27:0"
            },
            "returnParameters": {
              "id": 102,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 93,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 136,
                  "src": "931:13:0",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 92,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "931:6:0",
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
                  "id": 95,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 136,
                  "src": "945:13:0",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 94,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "945:6:0",
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
                  "id": 97,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 136,
                  "src": "959:7:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 96,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "959:7:0",
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
                  "id": 99,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 136,
                  "src": "967:7:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 98,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "967:7:0",
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
                  "id": 101,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 136,
                  "src": "975:13:0",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 100,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "975:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "930:59:0"
            },
            "scope": 149,
            "src": "867:363:0",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 147,
              "nodeType": "Block",
              "src": "1298:35:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "baseExpression": {
                      "argumentTypes": null,
                      "id": 143,
                      "name": "fileKey",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 37,
                      "src": "1311:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                        "typeString": "mapping(address => uint256)"
                      }
                    },
                    "id": 145,
                    "indexExpression": {
                      "argumentTypes": null,
                      "id": 144,
                      "name": "receiver",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 138,
                      "src": "1319:8:0",
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
                    "src": "1311:17:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 142,
                  "id": 146,
                  "nodeType": "Return",
                  "src": "1304:24:0"
                }
              ]
            },
            "documentation": null,
            "id": 148,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "getFileId",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 139,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 138,
                  "name": "receiver",
                  "nodeType": "VariableDeclaration",
                  "scope": 148,
                  "src": "1255:16:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 137,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1255:7:0",
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
              "src": "1254:18:0"
            },
            "returnParameters": {
              "id": 142,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 141,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 148,
                  "src": "1293:4:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 140,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1293:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1292:6:0"
            },
            "scope": 149,
            "src": "1236:97:0",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 150,
        "src": "67:1269:0"
      }
    ],
    "src": "32:1305:0"
  },
  "compiler": {
    "name": "solc",
    "version": "0.5.0+commit.1d4f565a.Emscripten.clang"
  },
  "networks": {
    "5777": {
      "events": {},
      "links": {},
      "address": "0xe592Fb4167a5A8A80c63b5e680A2472359d86E9F",
      "transactionHash": "0x282f04db101a6271e3c316f87d64bfef8b916a65a4d395d5f5a390eedf0fddd8"
    }
  },
  "schemaVersion": "3.0.1",
  "updatedAt": "2021-05-12T16:58:31.177Z",
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

   
    // console.log('eedar',web3.eth.getTransactionReceipt());
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
                  <h6>Time Stamp</h6>
                  <br>
                  <h4>${res[4]}</h4>

              </div>
              <div class="course-info">
                  
                  <h6>File Name</h6>
                  
                  <h2>${res[1]}</h2>

                  <h6 id="sender">Sender</h6>
                  
                  <h4>${res[2]}</h4>


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




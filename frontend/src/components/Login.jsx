import { useState,createRef,useContext } from 'react';
import { loginFields } from "../constants/formField";
import FormAction from "./FormAction";
import FormExtra from "./FormExtra";
import Input from "./Input";
import Popper from "popper.js";
import { useNavigate } from 'react-router-dom';
import AppContext from '../AppContext';
import { getAccount } from '../Web3Client';

const fields=loginFields;
let fieldsState = {};
fields.forEach(field=>fieldsState[field.id]='');

export default function Login(){

  const navigate = useNavigate();

  const {account,setAccount,userrole,setUserrole} = useContext(AppContext);

    const [loginState,setLoginState]=useState(fieldsState);
    const [dropdownPopoverShow, setDropdownPopoverShow] = useState(false);
  const [role,setRole] = useState('');

  const btnDropdownRef = createRef();
  const popoverDropdownRef = createRef();
  const openDropdownPopover = () => {
    new Popper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "bottom-start"
    });
    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };
  // bg colors
  let bgColor;
    bgColor = "bg-gray-800";

    const handleChange=(e)=>{
        setLoginState({...loginState,[e.target.id]:e.target.value})
    }

    const handleClick=(e)=>{
      window.open("/customer");
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        authenticateUser(loginState,role);
    }
    

    //Handle Login API Integration here
    const authenticateUser = (loginState,role) =>{
      const acc = getAccount(loginState.UserName,loginState.Id,role);
      acc.then( (res) => {
        if(res!=null){
          console.log(res);
          setAccount(res);
          localStorage.setItem('account',res);
          localStorage.setItem('userrole',role);
          setUserrole(role);
          navigate(`/${role}/${res[0]}`);
          console.log("User Authenticated");
        }
        else{
          console.log("User Not Authenticated");
        }
      })
    }

    return(
        <div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
        <div className="-space-y-px">
            {
                fields.map(field=>
                        <Input
                            key={field.id}
                            handleChange={handleChange}
                            value={loginState[field.id]}
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
        <div className="flex flex-wrap">
        <div className="w-full sm:w-6/12 md:w-4/12 px-4">
          <div className="relative inline-flex align-middle w-full">
            <button
              className={
                "text-white font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 " +
                bgColor
              }
              style={{ transition: "all .15s ease" }}
              type="button"
              ref={btnDropdownRef}
              onClick={() => {
                dropdownPopoverShow
                  ? closeDropdownPopover()
                  : openDropdownPopover();
              }}
            >
              {role?role:'Login as'}
            </button>
            <div
              ref={popoverDropdownRef}
              className={
                (dropdownPopoverShow ? "block " : "hidden ") +
                "bg-white " +
                "text-base z-50 float-left py-2 list-none text-left rounded shadow-lg mt-1"
              }
              style={{ minWidth: "12rem" }}
            >
              <a
                href="#pablo"
                className={
                  "text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent " +
                  "text-gray-800 "
                }
                onClick={e => {e.preventDefault();setRole('Supplier');closeDropdownPopover()}}
              >
                Supplier
              </a>
              <a
                href="#pablo"
                className={
                  "text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent " +
                  "text-gray-800 "
                }
                onClick={e => {e.preventDefault();setRole('Manufacturer');closeDropdownPopover()}}
              >
                Manufacturer
              </a>
              <a
                href="#pablo"
                className={
                  "text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent " +
                  "text-gray-800 "
                }
                onClick={e => {e.preventDefault();setRole('Distributor');closeDropdownPopover()}}
              >
                Distributor
              </a>
              <a
                href="#pablo"
                className={
                  "text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent " +
                  "text-gray-800 "
                }
                onClick={e => {e.preventDefault();setRole('Retailer');closeDropdownPopover()}}
              >
                Retailer
              </a>
            </div>
          </div>
        </div>
      </div>
        <FormExtra/>
        <FormAction handleSubmit={handleSubmit} text="LOGIN"/>
        <p align="center">OR</p>
      </form>
      <button className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 mt-10" onClick={handleClick}>CUSTOMER</button>
      </div>
    )
}
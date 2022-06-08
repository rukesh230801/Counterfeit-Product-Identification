import { useState,createRef } from 'react';
import Popper from "popper.js";
import { signupFields } from "../constants/formField"
import FormAction from "./FormAction";
import Input from "./Input";
import { addAccount } from '../Web3Client';

const fields=signupFields;
let fieldsState={};

fields.forEach(field => fieldsState[field.id]='');

export default function Signup(){
  const [signupState,setSignupState]=useState(fieldsState);
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


  const handleChange=(e)=>setSignupState({...signupState,[e.target.id]:e.target.value});

  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(signupState)
    createAccount(signupState,role);
  }

  //handle Signup API Integration here
  const createAccount=(signupState,role)=>{
    console.log(signupState);
    console.log(role);
    let id = addAccount(signupState.username.toString(),role);
    console.log(id);
  }

    return(
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
        <div className="">
        {
                fields.map(field=>
                        <Input
                            key={field.id}
                            handleChange={handleChange}
                            value={signupState[field.id]}
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
              {role?role:'Signup as'}
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
          <FormAction handleSubmit={handleSubmit} text="Signup" />
      </div>
      </div>
      </form>
    )
}
const loginFields=[
    {
        labelText:"UserName",
        labelFor:"UserName",
        id:"UserName",
        name:"text",
        type:"text",
        autoComplete:"text",
        isRequired:true,
        placeholder:"User Name"   
    },
    {
        labelText:"Id",
        labelFor:"Id",
        id:"Id",
        name:"text",
        type:"text",
        autoComplete:"text",
        isRequired:true,
        placeholder:"Id"   
    }
]

const signupFields=[
    {
        labelText:"Username",
        labelFor:"username",
        id:"username",
        name:"username",
        type:"text",
        autoComplete:"username",
        isRequired:true,
        placeholder:"Username"   
    }
]

const addProductFields = [
    {
        labelText:"Product Name",
        labelFor:"productName",
        id:"name",
        name:"name",
        type:"text",
        autoComplete:"productName",
        isRequired:true,
        placeholder:"Product Name"
    },
    {
        labelText:"Product Price",
        labelFor:"productPrice",
        id:"price",
        name:"price",
        type:"number",
        autoComplete:"productPrice",
        isRequired:true,
        placeholder:"Product Price"
    },
    {
        labelText:"Product Description",
        labelFor:"productDescription",
        id:"description",
        name:"description",
        type:"text",
        autoComplete:"productDescription",
        isRequired:true,
        placeholder:"Product Description"
    }
]
export {loginFields,signupFields,addProductFields}
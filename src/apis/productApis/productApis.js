import {uploadProduct,saledProduct,fetchUserAllProducts,fetchCurrentProducts} from "../Config.json"

export const uploadProductApi = async(authToken,title,description,price,url,city,submissionDate,categories)=> {
    let myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${authToken}`);
    myHeaders.append("Content-Type", "application/json");

    let raw = JSON.stringify({"title":title,"description":description,
    "price":price,"city":city,"image":url,"submission_date":submissionDate,
    "categories":categories});

    let requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    return fetch(uploadProduct, requestOptions)
      .then(response => response.text())
      .then((result) => {
        let json = JSON.parse(result)
        console.log("result:",json)
        return json
       })
      .catch((error) => {console.log('error:', error)
       return error});
}

export const saledProductApi = async(authToken,product_id)=> {
  let myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${authToken}`);
  myHeaders.append("Content-Type", "application/json");

  let raw = JSON.stringify({"product_id":product_id});

  let requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

  return fetch(saledProduct, requestOptions)
    .then(response => response.text())
    .then((result) => {
      let json = JSON.parse(result)
      console.log("result:",json)
      return json
     })
    .catch((error) => {console.log('error:', error)
     return error});
}

export const fetchUserProductApi = async(authToken)=> {
    let myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${authToken}`);
    myHeaders.append("Content-Type", "application/json");

    let requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    return fetch(fetchUserAllProducts, requestOptions)
      .then(response => response.text())
      .then((result) => {
        let json = JSON.parse(result)
        console.log("result:",json)
        return json
       })
      .catch((error) => {console.log('error:', error)
       return error});
}

export const fetchCurrentProductApi = async(authToken)=> {
    let myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${authToken}`);
    myHeaders.append("Content-Type", "application/json");

    let requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

   return fetch(fetchCurrentProducts, requestOptions)
      .then(response => response.text())
      .then((result) => {
        let json = JSON.parse(result)
        console.log("result:",json)
        return json
       })
      .catch((error) => {console.log('error:', error)
       return error});
}
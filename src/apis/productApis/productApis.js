import {uploadProduct,saledProduct,fetchUserAllProducts,fetchCurrentProducts,confirmProducts} from "../Config.json"

export const uploadProductApi = async(authToken,title,description,price,imgCollection,city,submissionDate,category)=> {
  let myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Authorization", `Bearer ${authToken}`);
  let raw = JSON.stringify({"title": title,"description": description,"city": city,
  "imgCollection": imgCollection,"price": price,"submission_date": submissionDate,
  "category": category});
  
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
      .catch((error) => {alert('error:', error)
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

export const fetchUserPurchasedProductApi = async(authToken)=> {
  let myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${authToken}`);
  myHeaders.append("Content-Type", "application/json");

  let requestOptions = {
      method: 'GET',
      headers: myHeaders,
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

export const fetchPendingProductApi = async()=> {
  let requestOptions = {
      method: 'GET',
      redirect: 'follow'
  };

 return fetch(confirmProducts, requestOptions)
    .then(response => response.text())
    .then((result) => {
      let json = JSON.parse(result)
      console.log("result:",json)
      return json
     })
    .catch((error) => {console.log('error:', error)
     return error});
}

export const statusProductApi = async(product_id,status)=> {
  let myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  let raw = JSON.stringify({ "product_id": product_id, "status": status });

  let requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

  return fetch(confirmProducts, requestOptions)
    .then(response => response.text())
    .then((result) => {
      let json = JSON.parse(result)
      console.log("result:", json)
      return json
    })
    .catch((error) => {
      console.log('error:', error)
      return error
    });
    
}
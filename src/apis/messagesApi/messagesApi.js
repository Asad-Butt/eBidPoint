import {lastMessages,messages} from "../Config.json"

export const lastMessagesApi = async(authToken,email)=> {   
    let myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${authToken}`);
    myHeaders.append("Content-Type", "application/json");

    let raw = JSON.stringify({"email":email});

    let requestOptions = {
    method: 'GET',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
    };

  return fetch(lastMessages, requestOptions)
  .then(response => response.text())
    .then((result) => {
    let json = JSON.parse(result)
    console.log("result:",json)
    return json
    })
    .catch((error) => {console.log('error:', error)
    return error});      
}

export const getMessagesApi = async(authToken,email)=> {  
    let myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${authToken}`);
    myHeaders.append("Content-Type", "application/json");

    let raw = JSON.stringify({"email":email});

    let requestOptions = {
        method: 'GET',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

  return fetch(messages, requestOptions)
  .then(response => response.text())
  .then((result) => {
  let json = JSON.parse(result)
  console.log("result:",json)
  return json
  })
  .catch((error) => {console.log('error:', error)
  return error});
}

export const sendMessageApi = async(email,senderEmail,message)=> {
    let myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${authToken}`);
    myHeaders.append("Content-Type", "application/json");

    let raw = JSON.stringify({"email":email,"sender_email":senderEmail,"message":message});

    let requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    return fetch(messages, requestOptions)
    .then(response => response.text())
      .then((result) => {
        let json = JSON.parse(result)
        console.log("result:",json)
        return json
       })
      .catch((error) => {console.log('error:', error)
       return error});
}
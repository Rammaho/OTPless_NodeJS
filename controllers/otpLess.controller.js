const express = require ('express')

const axios = require('axios')

const getSignupUrl = async (req, res)  => {
// calling the URL of OTPless for signing up 
    const response = await axios.get('https://api.otpless.com/api/v1/user/getSignupUrl', {
    headers: {
        clientid: process.env.clientid,
        clientsecret: process.env.clientsecret,
    },    // required headers for signing app ( clientid, and client secret after creating new application with OTPless.com)
}).then(response => {
    res.status(200).json({data: response.data})
}).catch(err => res.status(400).json({data: err}))
};


const getUserDetails = async(req, res) => {
    const response = await axios.post('https://api.otpless.com/api/v1/user/getUserDetails', // URL for fetching user details (name, phoneNumber) 
        {token: process.env.token }, // token is required and it can be taken by fisiting the signup URL.
    {
        headers: {
            clientid : process.env.clientid,
            clientsecret : process.env.clientsecret,                       
},
}
).then(response => {
    res.status(200).json({data: response.data})
}).catch(err => res.status(400).json({data: err}))
}

module.exports = {
    getUserDetails,
    getSignupUrl
};





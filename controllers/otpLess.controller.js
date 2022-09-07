const express = require ('express')

const axios = require('axios')

const getSignupUrl = async (req, res)  => {

    const response = await axios.get('https://api.otpless.com/api/v1/user/getSignupUrl', {
    headers: {
        clientid: process.env.clientid,
        clientsecret: process.env.clientsecret,
    },    
}).then(response => {
    res.status(200).json({data: response.data})
}).catch(err => res.status(400).json({data: err}))
};


const getUserDetails = async(req, res) => {
    const response = await axios.post('https://api.otpless.com/api/v1/user/getUserDetails',
        {token: process.env.token },
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





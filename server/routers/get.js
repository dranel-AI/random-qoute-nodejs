const express = require('express')
const axios = require('axios')
const router = express.Router()

router.get('', async (req, res) => {
    try {
        const api = `${process.env.API_URL}/random/1`
        const response = await axios(api, {
            params: {
                type: 'tag',
                val: 'motivational',
            },
        })
        res.render('index', response.data)
    } catch (error) {
        console.log(error.message)
    }
})

module.exports = router

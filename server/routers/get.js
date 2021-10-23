const express = require('express')
const axios = require('axios')
const router = express.Router()

router.get('', async (req, res) => {
    try {
        const tags = [
            'motivational',
            'music',
            'patience',
            'peace',
            'attitude',
            'general',
        ]

        const api = `${process.env.API_URL}/random/1`
        const response = await axios(api, {
            params: {
                type: 'tag',
                val: tags[Math.floor(Math.random() * tags.length)],
            },
        })
        res.render('index', response.data)
    } catch ({ message }) {
        res.json({ message })
    }
})

module.exports = router

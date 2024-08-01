import express from 'express'

const app = express();

app.get('/', (req, res) => [
    res.send('Server is Ready.')
]);


app.get('/api/jokes', (req, res) => {

    const jokes = [
        {
            id: 1,
            title: '1st title',
            content: '1st content',
        },
        {
            id: 2,
            title: '2st title',
            content: '2st content',
        },
        {
            id: 3,
            title: '3rd title',
            content: '3rd content',
        },
        {
            id: 4,
            title: '4th title',
            content: '4th content',
        },
        {
            id: 5,
            title: '5th title',
            content: '5th content',
        }
    ];

    res.send(jokes)

});


const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`server at http://localhost:${port}`)
})
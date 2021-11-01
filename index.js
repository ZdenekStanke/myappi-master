const express = require('express');
const cors = require('cors');
const PORT = 3000;
const app = express();


app.use(cors());
app.use(express.json());


app.get('/user/:id', (req, res) => {
    const { id } = req.params;
    res.status(200).send({
        id,

    });
});
app.get('/article/:java/:id1', (req, res) => {
    const { java  } = req.params;
    const { id1} = req.params;
    res.status(200).send({
        java,
        id1

    });
});
app.get('/comment/:id1', (req, res) => {
    const { id1} = req.params;
    res.status(200).send({
        id1

    });
});

app.post('/user', (req, res) => {
    const { name  } = req.body;
    const { age} = req.body;
    res.status(200).send({
        name,
        age

    });
});
app.post('/article', (req, res) => {
    const { title  } = req.body;
    const { category} = req.body;
    res.status(200).send({
        title,
        category

    });
});
app.post('/category', (req, res) => {
    const { name  } = req.body;

    res.status(200).send({
        name

    });
});
app.put('/user', (req, res) => {
    const { name  } = req.body;
    const { age} = req.body;
    res.status(200).send({
        name,
        age

    });
});
app.patch('/user', (req, res) => {
    const { id  } = req.body;
    const { name} = req.body;
    res.status(200).send({
        id,
        name

    });
});
app.delete('/article', (req, res) => {
    const { id  } = req.body;

    res.status(200).send({
        id


    });
});


app.listen(PORT, () => console.log(`Server is running on ${PORT}`));

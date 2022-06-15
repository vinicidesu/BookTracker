import { Router } from "express";
import { Book } from "../model/Book.js"

const routes = Router();

//Retorna os livros
routes.get('/', (req, res) => {
    Book.find().then(
        books => {
            res.render('index',{
                books: books,                
            })
        }
    )
});

routes.get('/books/new', (req, res) => {
    res.render('newbook');
});

routes.get('/books/update/:id', (req, res) => {
    id = req.body.id;
    Book.findOne({
        where:{_id: id}
    })
    res.render('updatebook');
});

//Registra os livros
routes.post('/books',(req, res) => {
        const newBook = new Book();
        newBook.name = req.body.name;
        newBook.author = req.body.author;
        newBook.status = req.body.status;
        newBook.save()
        .then(() => {
            res.redirect('/');
        });
});

//Deleta o livro
routes.post("/delete/:id", (req, res) => {
    const id = req.params.id;
    Book.deleteOne({
        where:{_id: id}
    }).then(
        res.redirect("/"));
});

//Alterar Status
routes.put("/books/:id", (req, res) => {
    const id = req.params.id;
    const status = req.body.status;
    const nota = req.body.nota;
    Book.updateOne(
        {_id: id},
        {status},
        {nota}
    ).then(
        res.redirect("/"));
});

export { routes };
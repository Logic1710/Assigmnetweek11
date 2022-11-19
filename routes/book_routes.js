import * as BookController from "../controllers/BookControllers.js"
export default function (app) {
    app.route('/book/findAllBooks')
        .get(BookController.findAllBooks)

    app.route('/book/deleteBooks')
        .get(BookController.deleteBook)

    app.route('/book/createBooks')
        .get(BookController.createBook)

    app.route('/book/updateBooks')
        .get(BookController.updateBook)
}
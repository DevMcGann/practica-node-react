const jwt = require('jsonwebtoken');

module.exports = (req,res,next) =>  {
    //auth por el header
    const authHeader = req.get('Authorization');

    if(!authHeader) {
        const error = new Error ('No autenticado');
        error.statusCode = 401;
        throw error;
    }

    //obtener token  y verificarlo 
    const token = authHeader.split(" ")[1];
    let revisarToken;

    try {
        revisarToken = jwt.verify(token, 'LLAVESECRETA')
    } catch (error) {
        error.statusCode = 500;
        throw error;
    }

    //si el token es valido pero hay algun error
    if(!revisarToken) {
        const error = new Error ('No autenticado')
        error.statusCode=401;
        throw error
    }

    //si esta todo ok
    next();
}
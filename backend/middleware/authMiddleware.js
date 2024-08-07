import jwt from 'jsonwebtoken';

const authMiddleware = (req, res, next) => {
    const token = req.header('x-auth-token');
    console.log(`Received token: ${token}`);
    console.log(`JWT_SECRET: ${process.env.JWT_SECRET}`);
    if (!token) return res.status(401).json({ msg: 'No token, authorization denied' });

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        console.log(`Decoded token: ${JSON.stringify(decoded)}`);
        req.user = decoded.user;
        next();
    } catch (err) {
        console.error(`Token verification error: ${err}`);
        res.status(401).json({ msg: 'Token is not valid' });
    }
};

export default authMiddleware;

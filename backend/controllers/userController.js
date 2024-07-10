import User from '../models/User.js';
import pkg from 'bcryptjs';
const { hash } = pkg;
import jwt from 'jsonwebtoken';

// Get user profile
export async function getUserProfile(req, res) {
    try {
        const user = await User.findById(req.user.id).select('-password');
        res.json(user);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
}

// Update user profile
export async function updateUserProfile(req, res) {
    const { name, email, password } = req.body;

    try {
        let user = await User.findById(req.user.id);

        if (!user) {
            return res.status(404).json({ msg: 'User not found' });
        }

        if (name) user.name = name;
        if (email) user.email = email;
        if (password) {
            user.password = await hash(password, 10);
        }

        await user.save();
        res.json(user);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
}

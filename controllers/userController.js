const express = require('express');
const { PrismaClient } = require('@prisma/client');
const Prisma = new PrismaClient();
const cookieToken = require('../utils/cookieToken');
const bcrypt = require('bcrypt');


exports.signup = async (req, res, next) => {
    try {
        const { name, email, password } = req.body;

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await Prisma.user.create({
            data: {
                name,
                email,
                password: hashedPassword,
            },
        });

        // Assuming cookieToken only sets the cookie and does not send a response

        // Now, send the response
        return res.status(200).json({
            success: true,
        });
    } catch (err) { 
        // Ensure no response is attempted after this point if an error occurs
       
            return res.status(500).json({
                success: false,
                message: 'An error occurred while creating the user.',
            });
        
    }
};



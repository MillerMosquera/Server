import User from "../Model/UserModel.js";

export const getAllUsers = async(request, response) => {
    try{
        const users = await User.findAll();
        response.json(users);
    }catch(error){
        response.json({message: error.message});
    }
}

export const getUserByEmail = async (request, response) => {
    try{
        const user = await User.findOne({
            where: {
                email: request.params.email
            }
        });
        response.json(user);
    }catch(error){
        response.json({message: error.message});
    }
}

export const createUser = async (request, response) => {
    try{
        await User.create(request.body);
        response.json({
            "message": "User Created"
        });
    }catch(error){
        response.json({message: error.message});
    }
}

export const updateUser = async (request, response) => {
    try{
        await User.update(request.body, {
            where: {
                email: request.params.email
            }
        });
        response.json({
            "message": "User Updated"
        });
    }catch(error){
        response.json({message: error.message});
    }
}
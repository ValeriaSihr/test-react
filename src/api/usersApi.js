import axios from "axios";

const usersApi = axios.create({
    baseURL: "https://66572ecd9f970b3b36c8471a.mockapi.io/api/users",
});

export const fetchUsers = async (endpoint) => {
    try {
        const { data } = await usersApi(endpoint);
        return data;
    } catch (error) {
        console.log(error);
    }
};

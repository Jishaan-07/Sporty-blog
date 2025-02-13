import commonAPI from "./commonAPI";
import SERVER_BASE_URL from "./serverUrl";
import axios from "axios";
 

// registerAPI
export const registerAPI = async(reqBody)=>{
    return await commonAPI("POST",`${SERVER_BASE_URL}/register`,reqBody)
}




// LoginAPI
export const loginAPI = async(reqBody)=>{
    return await commonAPI("POST",`${SERVER_BASE_URL}/login`,reqBody)
}


// addBlogAPI
export const addBlogAPI = async(reqBody,reqHeader)=>{
    return await commonAPI("POST",`${SERVER_BASE_URL}/add-blog`,reqBody,reqHeader)
}

// getHomeAPI
export const getHomeBlogAPI = async()=>{
    return await commonAPI("GET",`${SERVER_BASE_URL}/home-blog`,{})
}
// getHomeBestBlogAPI
export const getHomeBestBlogAPI = async()=>{
    return await commonAPI("GET",`${SERVER_BASE_URL}/homeBest-blog`,{})
}
// getAllBlogAPI
export const getAllBlogAPI = async(searchKey)=>{
    return await commonAPI("GET",`${SERVER_BASE_URL}/all-blog?search=${searchKey}`,{})
}
// getUserBlogAPI
export const getUserBlogAPI = async(reqHeader)=>{
    return await commonAPI("GET",`${SERVER_BASE_URL}/user-blog`,{},reqHeader)
}

// edit blog
// blog/blog/67aa5c35ac15799813ad9106/edit
export const editBlogAPI = async(id,reqBody,reqHeader)=>{
    return await commonAPI("PUT",`${SERVER_BASE_URL}/blog/${id}/edit`,reqBody,reqHeader)
}

//delete-blog/:id
export const deleteBlogAPI = async(id,reqHeader)=>{
    return await commonAPI("DELETE",`${SERVER_BASE_URL}/delete-blog/${id}`,{},reqHeader)
}

// edit profile
export const editUserAPI = async(reqBody,reqHeader)=>{
    return await commonAPI("PUT",`${SERVER_BASE_URL}/user/edit`,reqBody,reqHeader)
}





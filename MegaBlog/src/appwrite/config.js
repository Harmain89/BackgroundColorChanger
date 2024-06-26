import { Account, Client, Databases, ID, Query, Storage } from "appwrite";
import conf from "../conf/conf";


export class Service {
    client = new Client();
    account;
    databases;
    bucket;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);

        // this.account = new Account(this.client);
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    async createPost({title, slug, content, featuredImage, status, userId}) {
        try {
            
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId,
                }
            );
            
        } catch (error) {
            throw error;
        }
    }


    async updatePost(slug, {title, content, featuredImage, status, userId}) {
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                }
            );
        } catch (error) {
            throw error;
        }
    }


    async deletePost() {
        try {

            await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            );
            return true;
            
        } catch (error) {
            throw error;
            return false;
        }
    }


    async getPost(slug) {
        try {
            
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            );

        } catch (error) {
            throw error;
        }
    }


    async getPosts(queries = [Query.equal("status", ["active"])]) {
        try {
            
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries,
                // [
                //     Query.select(["title", "slug", "content", "featuredImage", "status", "userId"]),
                // ],
            );

        } catch (error) {
            throw error;
        }
    }



    // UPLOAD FILE SERVICES / METHODS

    async uploadFile(file) {
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            );
        } catch (error) {
            throw error;
        }
    }

    async deleteFile(fileId){
        try {
            await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId
            )
            return true
        } catch (error) {
            console.log("Appwrite serive :: deleteFile :: error", error);
            return false
        }
    }

    async getFilePreview(fileId){
        try {

            return await this.bucket.getFilePreview(
                conf.appwriteBucketId,
                fileId
            );

        } catch (error) {
            console.log("Appwrite serive :: deleteFile :: error", error);
            return false
        }
    }

}


const service = new Service();

export default service;
import conf from '../conf/conf';
import { Client, Account, ID } from 'appwrite';

export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.account = new Account(this.client)
    }

    // they all are services
    // create a account service
    async createAccount({ email, password, name }) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if (userAccount) {
                // class another method
                return this.login({ email, password });
            } else {
                return userAccount;
            }
        } catch (error) {
            console.log("Appwrite service :: createAccount ", error)
            throw error;
        }
    }

    // login into account service
    async login({ email, password }) {
        try {
            return await this.account.createEmailSession(email, password);
        } catch (error) {
            console.log("Appwrite service :: login ", error)
        }

    }

    // get current user details service
    async getCurrentUser() {
        try {
            return await this.account.get()
        } catch (error) {
            console.log("Appwrite service :: getCurrentUser ", error)
        }

        return null;
    }

    // logout account service
    async logout() {
        try {
            return await this.account.deleteSessions(); // current(), all()
        } catch (error) {
            console.log("Appwrite service :: logout ", error)
        }
    }
}

const authService = new AuthService();

export default authService;
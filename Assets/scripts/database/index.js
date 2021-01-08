/**
 * Made with ❤️ by Dibesh Raj Subedi [v1.0]
 * 
 * A simple client side database to store elements 
 */
export default class Database {
    constructor() { this.database = localStorage; }
    /**
     * Gets the item from database using key
     * @param {string} key 
     */
    getItem = (key) => this.database.getItem(key);
    /**
     * Sets the item in database using key value pair
     * @param {string} key 
     * @param {string} value 
     */
    setItem = (key, value) => this.database.setItem(key, value);
    /**
     * Removes the item from database using key
     * @param {string} key 
     */
    removeItem = (key) => this.database.removeItem(key);
    /**
     * Clears up the database
     */
    clear = () => this.database.clear();
    /**
     * Gets the key using index
     * @param {index} index 
     */
    key = (index) => this.database.key(index);
}
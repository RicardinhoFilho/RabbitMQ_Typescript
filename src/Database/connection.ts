import Firebird from "node-firebird";
export const connection:Firebird.Options = {

    host: '127.0.0.1',
    port: 3050,
    database: 'C:\\Users\\User\\Desktop\\ITBI\\ITBI.GDB',
    user: 'SYSDBA',
    password: 'masterkey',
    lowercase_keys: false, // set to true to lowercase keys
           // default
    pageSize: 4096,        // default when creating database
    retryConnectionInterval: 1000, // reconnect interval in case of connection drop

};



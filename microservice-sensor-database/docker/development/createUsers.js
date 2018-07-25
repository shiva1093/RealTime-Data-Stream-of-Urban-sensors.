db = db.getSiblingDB('admin');
db.createUser(
    {
        user: "admin",
        pwd: "2opf=+f9_gme2",
        roles: [
            { role: "userAdminAnyDatabase", db: "admin" }
        ]
    }
);
db = db.getSiblingDB('contextfencing');
db.createUser(
    {
        user: "frontend",
        pwd: "ob7%93g0-sdfg7",
        roles: [ { role: "readWrite", db: "contextfencing" }]
    }
);
db.createCollection("sensors");
db.createCollection("situatons");
db.createCollection("user");
db.createCollection("sensor-adapter-geofencing");
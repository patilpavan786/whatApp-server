var multer = require('multer');
var GridFsStorage = require('multer-gridfs-storage');
var dotenv = require('dotenv');

dotenv.config();

var username = process.env.DB_USERNAME;
var password = process.env.DB_PASSWORD;

var storage = new GridFsStorage({
    url: 'mongodb://' + username + ':' + password + '@ac-kx7kxom-shard-00-00.y3pd8zs.mongodb.net:27017,ac-kx7kxom-shard-00-01.y3pd8zs.mongodb.net:27017,ac-kx7kxom-shard-00-02.y3pd8zs.mongodb.net:27017/?ssl=true&replicaSet=atlas-5shhdg-shard-0&authSource=admin&retryWrites=true&w=majority',
    options: { useNewUrlParser: true },
    file: function(request, file) {
        var match = ['image/png', 'image/jpg'];

        if (match.indexOf(file.memeType) === -1)
            return Date.now() + '-blog-' + file.originalname;

        return {
            bucketName: 'photos',
            filename: Date.now() + '-blog-' + file.originalname
        };
    }
});

module.exports = multer({ storage: storage });

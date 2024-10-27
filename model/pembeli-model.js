const { DataTypes } = require( "sequelize")
const {db} = require( "../config/database")

const Pembeli = db.define(
    "Pembeli", 
    {
        kode_pembeli : {
            type : DataTypes.INTEGER,
            allowNull : false,
            primaryKey : true, 
            autoIncrement : true
        },
        nama : {
            type : DataTypes.STRING(255),
            allowNull : true
        },
        no_identitas : {
            type : DataTypes.STRING(100),
            allowNull : true,
            unique : true
        },
        jenis_kelamin : {
            type : DataTypes.ENUM('Pria', 'Wanita'),
            allowNull : true
        },
        alamat : {
            type : DataTypes.TEXT(),
            allowNull : true
        },
        no_hp : {
            type : DataTypes.STRING(14),
            allowNull : true
        },
        udcr : {
            type : DataTypes.DATE(),
            allowNull : true
        },
        udch : {
            type : DataTypes.DATE(),
            allowNull : true
        }
    },
    {
        tableName : "ref_pembeli",
        createdAt : "udcr",
        updatedAt : "udch"
    }
)

module.exports = Pembeli
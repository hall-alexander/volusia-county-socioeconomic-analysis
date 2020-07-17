const { Sequelize, Model } = require("sequelize");
const sequelize = new Sequelize('postgres://postgres:postgres@host.docker.internal:5432/spatial');

class parcels extends Model {}

parcels.init({
    gid:        {type: Sequelize.RANGE(Sequelize.INTEGER)},
    prefix_:    {type: Sequelize.STRING},
    sub:        {type: Sequelize.STRING},
    pcl:        {type: Sequelize.STRING},
    fullpid:    {type: Sequelize.STRING},
    altkey:     {type: Sequelize.RANGE(Sequelize.BIGINT), primaryKey: true},
    pid:        {type: Sequelize.STRING},
    subnum:     {type: Sequelize.STRING},
    shape_star: {type: Sequelize.DOUBLE},
    shape_stle: {type: Sequelize.DOUBLE},
    geom:       {type: Sequelize.GEOMETRY}
},
{
    sequelize,
    modelName: 'volusia.gis_parcels',
    timestamps: false
});

module.exports = parcels;


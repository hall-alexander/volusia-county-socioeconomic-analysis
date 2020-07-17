/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('gis_parcels', {
		'gid': {
			type: DataTypes.INTEGER,
			allowNull: false,
			defaultValue: 'nextval(volusia.gis_parcels_gid_seq::regclass)',
			comment: "null",
			primaryKey: true
		},
		'prefix_': {
			type: DataTypes.STRING,
			allowNull: true,
			comment: "null"
		},
		'sub': {
			type: DataTypes.STRING,
			allowNull: true,
			comment: "null"
		},
		'pcl': {
			type: DataTypes.STRING,
			allowNull: true,
			comment: "null"
		},
		'fullpid': {
			type: DataTypes.STRING,
			allowNull: true,
			comment: "null"
		},
		'altkey': {
			type: DataTypes.BIGINT,
			allowNull: true,
			comment: "null"
		},
		'pid': {
			type: DataTypes.STRING,
			allowNull: true,
			comment: "null"
		},
		'subnum': {
			type: DataTypes.STRING,
			allowNull: true,
			comment: "null"
		},
		'shape_star': {
			type: DataTypes.DOUBLE,
			allowNull: true,
			comment: "null"
		},
		'shape_stle': {
			type: DataTypes.DOUBLE,
			allowNull: true,
			comment: "null"
		},
		'geom': {
			type: DataTypes.ENUM(),
			allowNull: true,
			comment: "null"
		}
	}, {
		tableName: 'gis_parcels'
	});
};

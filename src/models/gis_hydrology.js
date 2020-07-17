/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('gis_hydrology', {
		'gid': {
			type: DataTypes.INTEGER,
			allowNull: false,
			defaultValue: 'nextval(volusia.gis_hydrology_gid_seq::regclass)',
			comment: "null",
			primaryKey: true
		},
		'objectid': {
			type: DataTypes.BIGINT,
			allowNull: true,
			comment: "null"
		},
		'hyd_code': {
			type: DataTypes.INTEGER,
			allowNull: true,
			comment: "null"
		},
		'hyd_name': {
			type: DataTypes.STRING,
			allowNull: true,
			comment: "null"
		},
		'acreage': {
			type: DataTypes.DOUBLE,
			allowNull: true,
			comment: "null"
		},
		'shape_leng': {
			type: DataTypes.DOUBLE,
			allowNull: true,
			comment: "null"
		},
		'shape_area': {
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
		tableName: 'gis_hydrology'
	});
};

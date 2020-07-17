/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('teststreets', {
		'gid': {
			type: DataTypes.INTEGER,
			allowNull: true,
			comment: "null"
		},
		'name': {
			type: DataTypes.STRING,
			allowNull: true,
			comment: "null"
		},
		'intersec1': {
			type: DataTypes.STRING,
			allowNull: true,
			comment: "null"
		},
		'intersec1_': {
			type: DataTypes.STRING,
			allowNull: true,
			comment: "null"
		},
		'intersec2': {
			type: DataTypes.STRING,
			allowNull: true,
			comment: "null"
		},
		'intersec2_': {
			type: DataTypes.STRING,
			allowNull: true,
			comment: "null"
		},
		'lzip': {
			type: DataTypes.BIGINT,
			allowNull: true,
			comment: "null"
		},
		'rzip': {
			type: DataTypes.BIGINT,
			allowNull: true,
			comment: "null"
		},
		'lcomm': {
			type: DataTypes.STRING,
			allowNull: true,
			comment: "null"
		},
		'rcomm': {
			type: DataTypes.STRING,
			allowNull: true,
			comment: "null"
		},
		'segment': {
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
		tableName: 'teststreets'
	});
};

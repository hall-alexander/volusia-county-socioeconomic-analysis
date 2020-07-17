/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('smallstreets', {
		'name': {
			type: DataTypes.TEXT,
			allowNull: true,
			comment: "null"
		},
		'geom_array': {
			type: DataTypes.TEXT,
			allowNull: true,
			comment: "null"
		},
		'road_length': {
			type: DataTypes.DOUBLE,
			allowNull: true,
			comment: "null"
		}
	}, {
		tableName: 'smallstreets'
	});
};

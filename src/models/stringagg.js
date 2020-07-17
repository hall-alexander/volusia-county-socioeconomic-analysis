/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('stringagg', {
		'name': {
			type: DataTypes.STRING,
			allowNull: true,
			comment: "null"
		},
		'string_agg': {
			type: DataTypes.TEXT,
			allowNull: true,
			comment: "null"
		}
	}, {
		tableName: 'stringagg'
	});
};

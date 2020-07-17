/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('nonadvalorem', {
		'parid': {
			type: DataTypes.DOUBLE,
			allowNull: true,
			comment: "null"
		},
		'taxyr': {
			type: DataTypes.DOUBLE,
			allowNull: true,
			comment: "null"
		},
		'projno': {
			type: DataTypes.TEXT,
			allowNull: true,
			comment: "null"
		},
		'projnam': {
			type: DataTypes.TEXT,
			allowNull: true,
			comment: "null"
		},
		'units': {
			type: DataTypes.DOUBLE,
			allowNull: true,
			comment: "null"
		},
		'rate': {
			type: DataTypes.DOUBLE,
			allowNull: true,
			comment: "null"
		},
		'amount': {
			type: DataTypes.DOUBLE,
			allowNull: true,
			comment: "null"
		}
	}, {
		tableName: 'nonadvalorem'
	});
};

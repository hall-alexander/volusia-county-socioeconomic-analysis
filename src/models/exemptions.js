/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('exemptions', {
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
		'excode': {
			type: DataTypes.TEXT,
			allowNull: true,
			comment: "null"
		},
		'excode_desc': {
			type: DataTypes.TEXT,
			allowNull: true,
			comment: "null"
		},
		'apother': {
			type: DataTypes.DOUBLE,
			allowNull: true,
			comment: "null"
		},
		'yrbeg': {
			type: DataTypes.DOUBLE,
			allowNull: true,
			comment: "null"
		}
	}, {
		tableName: 'exemptions'
	});
};

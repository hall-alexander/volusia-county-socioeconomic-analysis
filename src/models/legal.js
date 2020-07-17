/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('legal', {
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
		'legdesc': {
			type: DataTypes.TEXT,
			allowNull: true,
			comment: "null"
		},
		'censusblk': {
			type: DataTypes.TEXT,
			allowNull: true,
			comment: "null"
		},
		'splt_comb': {
			type: DataTypes.TEXT,
			allowNull: true,
			comment: "null"
		},
		'yr_annex': {
			type: DataTypes.TEXT,
			allowNull: true,
			comment: "null"
		}
	}, {
		tableName: 'legal'
	});
};

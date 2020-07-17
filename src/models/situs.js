/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('situs', {
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
		'ownseq': {
			type: DataTypes.DOUBLE,
			allowNull: true,
			comment: "null"
		},
		'adrno': {
			type: DataTypes.DOUBLE,
			allowNull: true,
			comment: "null"
		},
		'adradd': {
			type: DataTypes.TEXT,
			allowNull: true,
			comment: "null"
		},
		'adrdir': {
			type: DataTypes.TEXT,
			allowNull: true,
			comment: "null"
		},
		'adrstr': {
			type: DataTypes.TEXT,
			allowNull: true,
			comment: "null"
		},
		'adrsuf': {
			type: DataTypes.TEXT,
			allowNull: true,
			comment: "null"
		},
		'adrsuf2': {
			type: DataTypes.TEXT,
			allowNull: true,
			comment: "null"
		},
		'unitdesc': {
			type: DataTypes.TEXT,
			allowNull: true,
			comment: "null"
		},
		'unitno': {
			type: DataTypes.TEXT,
			allowNull: true,
			comment: "null"
		},
		'loc2': {
			type: DataTypes.TEXT,
			allowNull: true,
			comment: "null"
		},
		'cityname': {
			type: DataTypes.TEXT,
			allowNull: true,
			comment: "null"
		},
		'zip1': {
			type: DataTypes.TEXT,
			allowNull: true,
			comment: "null"
		}
	}, {
		tableName: 'situs'
	});
};

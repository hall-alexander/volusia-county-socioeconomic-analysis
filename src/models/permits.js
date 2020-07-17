/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('permits', {
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
		'num': {
			type: DataTypes.TEXT,
			allowNull: true,
			comment: "null"
		},
		'permdt': {
			type: DataTypes.TEXT,
			allowNull: true,
			comment: "null"
		},
		'issued_by': {
			type: DataTypes.TEXT,
			allowNull: true,
			comment: "null"
		},
		'status': {
			type: DataTypes.TEXT,
			allowNull: true,
			comment: "null"
		},
		'flag': {
			type: DataTypes.TEXT,
			allowNull: true,
			comment: "null"
		},
		'why': {
			type: DataTypes.TEXT,
			allowNull: true,
			comment: "null"
		},
		'sub_type': {
			type: DataTypes.TEXT,
			allowNull: true,
			comment: "null"
		},
		'work_type': {
			type: DataTypes.TEXT,
			allowNull: true,
			comment: "null"
		},
		'work_desc': {
			type: DataTypes.TEXT,
			allowNull: true,
			comment: "null"
		},
		'contractor': {
			type: DataTypes.TEXT,
			allowNull: true,
			comment: "null"
		},
		'amount': {
			type: DataTypes.DOUBLE,
			allowNull: true,
			comment: "null"
		},
		'occ_cert_nbr': {
			type: DataTypes.TEXT,
			allowNull: true,
			comment: "null"
		},
		'occ_date': {
			type: DataTypes.TEXT,
			allowNull: true,
			comment: "null"
		},
		'compl_date': {
			type: DataTypes.TEXT,
			allowNull: true,
			comment: "null"
		}
	}, {
		tableName: 'permits'
	});
};

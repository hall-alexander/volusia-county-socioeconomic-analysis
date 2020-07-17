/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('comm_area', {
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
		'card': {
			type: DataTypes.DOUBLE,
			allowNull: true,
			comment: "null"
		},
		'sect': {
			type: DataTypes.TEXT,
			allowNull: true,
			comment: "null"
		},
		'flrfrom': {
			type: DataTypes.TEXT,
			allowNull: true,
			comment: "null"
		},
		'flrto': {
			type: DataTypes.TEXT,
			allowNull: true,
			comment: "null"
		},
		'constr': {
			type: DataTypes.TEXT,
			allowNull: true,
			comment: "null"
		},
		'constr_desc': {
			type: DataTypes.TEXT,
			allowNull: true,
			comment: "null"
		},
		'usetype': {
			type: DataTypes.TEXT,
			allowNull: true,
			comment: "null"
		},
		'usetype_desc': {
			type: DataTypes.TEXT,
			allowNull: true,
			comment: "null"
		},
		'sprinkler': {
			type: DataTypes.TEXT,
			allowNull: true,
			comment: "null"
		},
		'air_cond': {
			type: DataTypes.TEXT,
			allowNull: true,
			comment: "null"
		},
		'extwall': {
			type: DataTypes.TEXT,
			allowNull: true,
			comment: "null"
		},
		'extwall_desc': {
			type: DataTypes.TEXT,
			allowNull: true,
			comment: "null"
		},
		'extwallpct': {
			type: DataTypes.DOUBLE,
			allowNull: true,
			comment: "null"
		},
		'extwall1': {
			type: DataTypes.TEXT,
			allowNull: true,
			comment: "null"
		},
		'extwall1_desc': {
			type: DataTypes.TEXT,
			allowNull: true,
			comment: "null"
		},
		'extwall1pct': {
			type: DataTypes.DOUBLE,
			allowNull: true,
			comment: "null"
		},
		'wallhgt': {
			type: DataTypes.DOUBLE,
			allowNull: true,
			comment: "null"
		},
		'area': {
			type: DataTypes.DOUBLE,
			allowNull: true,
			comment: "null"
		},
		'yrblt': {
			type: DataTypes.DOUBLE,
			allowNull: true,
			comment: "null"
		},
		'effyr': {
			type: DataTypes.DOUBLE,
			allowNull: true,
			comment: "null"
		},
		'mktadj': {
			type: DataTypes.DOUBLE,
			allowNull: true,
			comment: "null"
		},
		'obsdep': {
			type: DataTypes.DOUBLE,
			allowNull: true,
			comment: "null"
		},
		'fundep': {
			type: DataTypes.DOUBLE,
			allowNull: true,
			comment: "null"
		},
		'ecndep': {
			type: DataTypes.DOUBLE,
			allowNull: true,
			comment: "null"
		},
		'rcn': {
			type: DataTypes.DOUBLE,
			allowNull: true,
			comment: "null"
		},
		'rcnld': {
			type: DataTypes.DOUBLE,
			allowNull: true,
			comment: "null"
		},
		'exmppct': {
			type: DataTypes.DOUBLE,
			allowNull: true,
			comment: "null"
		},
		'exmpval': {
			type: DataTypes.DOUBLE,
			allowNull: true,
			comment: "null"
		},
		'chgrsn': {
			type: DataTypes.TEXT,
			allowNull: true,
			comment: "null"
		},
		'chgrsn_desc': {
			type: DataTypes.TEXT,
			allowNull: true,
			comment: "null"
		}
	}, {
		tableName: 'comm_area'
	});
};

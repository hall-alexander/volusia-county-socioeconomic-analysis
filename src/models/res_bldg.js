/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('res_bldg', {
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
		'class': {
			type: DataTypes.TEXT,
			allowNull: true,
			comment: "null"
		},
		'class_desc': {
			type: DataTypes.TEXT,
			allowNull: true,
			comment: "null"
		},
		'grade': {
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
		'specarch': {
			type: DataTypes.TEXT,
			allowNull: true,
			comment: "null"
		},
		'specarch_desc': {
			type: DataTypes.TEXT,
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
		'yrremod': {
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
		'bldgjust': {
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
		},
		'rmbed': {
			type: DataTypes.DOUBLE,
			allowNull: true,
			comment: "null"
		},
		'fixhalf': {
			type: DataTypes.DOUBLE,
			allowNull: true,
			comment: "null"
		},
		'fixbath': {
			type: DataTypes.DOUBLE,
			allowNull: true,
			comment: "null"
		},
		'fixbath4': {
			type: DataTypes.DOUBLE,
			allowNull: true,
			comment: "null"
		},
		'fixbath5': {
			type: DataTypes.DOUBLE,
			allowNull: true,
			comment: "null"
		},
		'fixbath6': {
			type: DataTypes.DOUBLE,
			allowNull: true,
			comment: "null"
		},
		'fixbath7': {
			type: DataTypes.DOUBLE,
			allowNull: true,
			comment: "null"
		},
		'fixaddl': {
			type: DataTypes.DOUBLE,
			allowNull: true,
			comment: "null"
		},
		'fixtot': {
			type: DataTypes.DOUBLE,
			allowNull: true,
			comment: "null"
		},
		'heat': {
			type: DataTypes.TEXT,
			allowNull: true,
			comment: "null"
		},
		'heat_desc': {
			type: DataTypes.TEXT,
			allowNull: true,
			comment: "null"
		},
		'stacks': {
			type: DataTypes.DOUBLE,
			allowNull: true,
			comment: "null"
		},
		'openings': {
			type: DataTypes.DOUBLE,
			allowNull: true,
			comment: "null"
		},
		'foundation': {
			type: DataTypes.TEXT,
			allowNull: true,
			comment: "null"
		},
		'foundation_desc': {
			type: DataTypes.TEXT,
			allowNull: true,
			comment: "null"
		},
		'fuel': {
			type: DataTypes.TEXT,
			allowNull: true,
			comment: "null"
		},
		'fuel_desc': {
			type: DataTypes.TEXT,
			allowNull: true,
			comment: "null"
		},
		'heat_method': {
			type: DataTypes.TEXT,
			allowNull: true,
			comment: "null"
		},
		'heat_method_desc': {
			type: DataTypes.TEXT,
			allowNull: true,
			comment: "null"
		},
		'floor_cover': {
			type: DataTypes.TEXT,
			allowNull: true,
			comment: "null"
		},
		'floor_cover_desc': {
			type: DataTypes.TEXT,
			allowNull: true,
			comment: "null"
		},
		'wall_type': {
			type: DataTypes.TEXT,
			allowNull: true,
			comment: "null"
		},
		'wall_type_desc': {
			type: DataTypes.TEXT,
			allowNull: true,
			comment: "null"
		},
		'roof_style': {
			type: DataTypes.TEXT,
			allowNull: true,
			comment: "null"
		},
		'roof_style_desc': {
			type: DataTypes.TEXT,
			allowNull: true,
			comment: "null"
		},
		'roof_cover': {
			type: DataTypes.TEXT,
			allowNull: true,
			comment: "null"
		},
		'roof_cover_desc': {
			type: DataTypes.TEXT,
			allowNull: true,
			comment: "null"
		},
		'granny_flats_flag': {
			type: DataTypes.TEXT,
			allowNull: true,
			comment: "null"
		},
		'sfla': {
			type: DataTypes.DOUBLE,
			allowNull: true,
			comment: "null"
		},
		'total_area': {
			type: DataTypes.DOUBLE,
			allowNull: true,
			comment: "null"
		},
		'siding_perim': {
			type: DataTypes.TEXT,
			allowNull: true,
			comment: "null"
		},
		'frame_block_perim': {
			type: DataTypes.TEXT,
			allowNull: true,
			comment: "null"
		},
		'brick_perim': {
			type: DataTypes.TEXT,
			allowNull: true,
			comment: "null"
		},
		'stone_perim': {
			type: DataTypes.TEXT,
			allowNull: true,
			comment: "null"
		}
	}, {
		tableName: 'res_bldg'
	});
};

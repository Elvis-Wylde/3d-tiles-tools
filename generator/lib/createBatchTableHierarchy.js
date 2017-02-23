'use strict';
var Cesium = require('cesium');

var defined = Cesium.defined;

module.exports = createBatchTableHierarchy;

function createBatchTableHierarchy(options) {
    var zone0 = {
        className : 'zone',
        properties : {
            zone_name : 'zone0',
            zone_buildings : 3
        },
        parents : []
    };

    var building0 = {
        className : 'building',
        properties : {
            building_name : 'building0',
            building_area : 20.0
        },
        parents : [zone0]
    };

    var building1 = {
        className : 'building',
        properties : {
            building_name : 'building1',
            building_area : 21.98
        },
        parents : [zone0]
    };

    var building2 = {
        className : 'building',
        properties : {
            building_name : 'building2',
            building_area : 39.3
        },
        parents : [zone0]
    };

    var door0 = {
        className : 'door',
        properties : {
            door_name : 'door0',
            door_width : 1.2,
            door_mass : 10
        },
        parents : [building0]
    };

    var door1 = {
        className : 'door',
        properties : {
            door_name : 'door1',
            door_width : 1.3,
            door_mass : 11
        },
        parents : [building0]
    };

    var door2 = {
        className : 'door',
        properties : {
            door_name : 'door2',
            door_width : 1.21,
            door_mass : 14
        },
        parents : [building0]
    };

    var door3 = {
        className : 'door',
        properties : {
            door_name : 'door3',
            door_width : 1.5,
            door_mass : 7
        },
        parents : [building0]
    };

    var door4 = {
        className : 'door',
        properties : {
            door_name : 'door4',
            door_width : 1.1,
            door_mass : 8
        },
        parents : [building1]
    };

    var door5 = {
        className : 'door',
        properties : {
            door_name : 'door5',
            door_width : 1.15,
            door_mass : 12
        },
        parents : [building1]
    };

    var door6 = {
        className : 'door',
        properties : {
            door_name : 'door6',
            door_width : 1.32,
            door_mass : 3
        },
        parents : [building1]
    };

    var door7 = {
        className : 'door',
        properties : {
            door_name : 'door7',
            door_width : 1.54,
            door_mass : 6
        },
        parents : [building1]
    };

    var door8 = {
        className : 'door',
        properties : {
            door_name : 'door8',
            door_width : 1.8,
            door_mass : 3
        },
        parents : [building2]
    };

    var door9 = {
        className : 'door',
        properties : {
            door_name : 'door9',
            door_width : 2.0,
            door_mass : 5
        },
        parents : [building2]
    };

    var door10 = {
        className : 'door',
        properties : {
            door_name : 'door10',
            door_width : 2.1,
            door_mass : 9
        },
        parents : [building2]
    };

    var door11 = {
        className : 'door',
        properties : {
            door_name : 'door11',
            door_width : 1.3,
            door_mass : 10
        },
        parents : [building2]
    };

    var doorknob0 = {
        className : 'doorknob',
        properties : {
            doorknob_name : 'doorknob0',
            doorknob_size : 0.3
        },
        parents : [door0]
    };

    var doorknob1 = {
        className : 'doorknob',
        properties : {
            doorknob_name : 'doorknob1',
            doorknob_size : 0.43
        },
        parents : [door1]
    };

    var doorknob2 = {
        className : 'doorknob',
        properties : {
            doorknob_name : 'doorknob2',
            doorknob_size : 0.32
        },
        parents : [door2]
    };

    var doorknob3 = {
        className : 'doorknob',
        properties : {
            doorknob_name : 'doorknob3',
            doorknob_size : 0.2
        },
        parents : [door3]
    };

    var doorknob4 = {
        className : 'doorknob',
        properties : {
            doorknob_name : 'doorknob4',
            doorknob_size : 0.21
        },
        parents : [door4]
    };

    var doorknob5 = {
        className : 'doorknob',
        properties : {
            doorknob_name : 'doorknob5',
            doorknob_size : 0.35
        },
        parents : [door5]
    };

    var doorknob6 = {
        className : 'doorknob',
        properties : {
            doorknob_name : 'doorknob6',
            doorknob_size : 0.3
        },
        parents : [door6]
    };

    var doorknob7 = {
        className : 'doorknob',
        properties : {
            doorknob_name : 'doorknob7',
            doorknob_size : 0.23
        },
        parents : [door7]
    };

    var doorknob8 = {
        className : 'doorknob',
        properties : {
            doorknob_name : 'doorknob8',
            doorknob_size : 0.43
        },
        parents : [door8]
    };

    var doorknob9 = {
        className : 'doorknob',
        properties : {
            doorknob_name : 'doorknob9',
            doorknob_size : 0.32
        },
        parents : [door9]
    };

    var doorknob10 = {
        className : 'doorknob',
        properties : {
            doorknob_name : 'doorknob10',
            doorknob_size : 0.41
        },
        parents : [door10]
    };

    var doorknob11 = {
        className : 'doorknob',
        properties : {
            doorknob_name : 'doorknob11',
            doorknob_size : 0.33
        },
        parents : [door11]
    };

    var roof0 = {
        className : 'roof',
        properties : {
            roof_name : 'roof0',
            roof_paint : 'red'
        },
        parents : [building0]
    };

    var roof1 = {
        className : 'roof',
        properties : {
            roof_name : 'roof1',
            roof_paint : 'blue'
        },
        parents : [building1]
    };

    var roof2 = {
        className : 'roof',
        properties : {
            roof_name : 'roof2',
            roof_paint : 'yellow'
        },
        parents : [building2]
    };

    var wall0 = {
        className : 'wall',
        properties : {
            wall_name : 'wall0',
            wall_paint : 'pink',
            wall_windows : 1
        },
        parents : [building0]
    };

    var wall1 = {
        className : 'wall',
        properties : {
            wall_name : 'wall1',
            wall_paint : 'orange',
            wall_windows : 1
        },
        parents : [building1]
    };

    var wall2 = {
        className : 'wall',
        properties : {
            wall_name : 'wall2',
            wall_paint : 'blue',
            wall_windows : 1
        },
        parents : [building2]
    };

    var instances = [
        doorknob0, doorknob1, doorknob2, doorknob3, door0, door1, door2, door3, roof0, wall0,
        doorknob4, doorknob5, doorknob6, doorknob7, door4, door5, door6, door7, roof1, wall1,
        doorknob8, doorknob9, doorknob10, doorknob11, door8, door9, door10, door11, roof2, wall2,
        building0, building1, building2, zone0
    ];

    var hierarchy = createHierarchy(instances);
}

function createHierarchy(instances) {
    var i;
    var j;
    var classes = [];
    var classIds = [];
    var parentCounts = [];
    var parentIds = [];
    var instancesLength = instances.length;

    for (i = 0; i < instancesLength; ++i) {
        var instance = instances[i];
        var className = instance.className;
        var properties = instance.properties;
        var parents = instance.parents;
        var parentsLength = parents.length;

        // Get class id
        var classId;
        var classData;
        var classesLength = classes.length;
        for (j = 0; j < classesLength; ++j) {
            if (classes[j].name === className) {
                classId = j;
                classData = classes[j];
                break;
            }
        }

        // Create class if it doesn't already exist
        if (!defined(classId)) {
            classData = {
                name : className,
                length : 0,
                instances : {}
            };
            classId = classes.length;
            classes.push(classData);
            var propertyNames = Object.keys(properties);
            var propertyNamesLength = propertyNames.length;
            for (j = 0; j < propertyNamesLength; ++j) {
                classData.instances[propertyNames[j]] = [];
            }
        }

        // Add properties to class
        for (var propertyName in properties) {
            if (properties.hasOwnProperty(propertyName)) {
                classData.instances[propertyName].push(properties[propertyName]);
            }
        }

        // Increment class instances length
        classData.length++;

        // Add to classIds
        classIds.push(classId);

        // Add to parentCounts
        parentCounts.push(parentsLength);

        // Add to parent ids
        for (j = 0; j < parentsLength; ++j) {
            var parent = parents[j];
            var parentId = instances.indexOf(parent);
            parentIds.push(parentId);
        }
    }

    // Check if any of the instances have multiple parents, or if none of the instances have parents
    var singleParents = true;
    var noParents = true;
    for (i = 0; i < instancesLength; ++i) {
        if (parentCounts[i] > 0) {
            noParents = false;
        }
        if (parentCounts[i] > 1) {
            singleParents = false;
        }
    }

    if (noParents) {
        // Unlink parentCounts and parentIds
        parentCounts = undefined;
        parentIds = undefined;
    } else if (singleParents) {
        // Unlink parentCounts and fix parentIds so that parentId points to itself
        for (i = 0; i < instancesLength; ++i) {
            if (parentCounts[i] === 0) {
                parentIds.splice(i, 0, i);
            }
        }
        parentCounts = undefined;
    }

    return {
        instancesLength : instancesLength,
        classes : classes,
        classIds : classIds,
        parentIds : parentIds,
        parentCounts : parentCounts
    };
}
